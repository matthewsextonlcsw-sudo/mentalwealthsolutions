import { NextRequest, NextResponse, NextFetchEvent } from 'next/server'
import { get } from '@vercel/edge-config'

const MISSION_CONTROL_URL = process.env.MISSION_CONTROL_URL ?? ''
const MISSION_CONTROL_API_KEY = process.env.MISSION_CONTROL_API_KEY ?? ''

function logHit(ip: string, path: string, blocked: boolean): Promise<void> {
  if (!MISSION_CONTROL_URL || !MISSION_CONTROL_API_KEY) return Promise.resolve()
  return fetch(`${MISSION_CONTROL_URL}/api/log-hit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': MISSION_CONTROL_API_KEY,
    },
    body: JSON.stringify({ ip, path, blocked, ts: Date.now() }),
  }).then(() => undefined).catch(() => undefined)
}

// ─── CIDR MATCHING UTILITIES ─────────────────────────────────────────────────
function ipToInt(ip: string): number {
  return ip.split('.').reduce((acc, oct) => (acc << 8) + parseInt(oct, 10), 0) >>> 0
}
function inCIDR(ip: string, cidr: string): boolean {
  const [base, bits] = cidr.split('/')
  const mask = bits ? ~((1 << (32 - parseInt(bits))) - 1) >>> 0 : 0xffffffff
  try {
    return (ipToInt(ip) & mask) === (ipToInt(base) & mask)
  } catch {
    return false
  }
}
function ipv6Expand(ip: string): string {
  if (ip.includes('::')) {
    const [left, right] = ip.split('::')
    const l = left ? left.split(':') : []
    const r = right ? right.split(':') : []
    const missing = 8 - l.length - r.length
    const mid = Array(missing).fill('0000')
    return [...l, ...mid, ...r].map(g => g.padStart(4, '0')).join(':')
  }
  return ip.split(':').map(g => g.padStart(4, '0')).join(':')
}
function inIPv6CIDR(ip: string, cidr: string): boolean {
  const [base, bits] = cidr.split('/')
  const prefixLen = parseInt(bits)
  try {
    const ipExp = ipv6Expand(ip).replace(/:/g, '')
    const baseExp = ipv6Expand(base).replace(/:/g, '')
    const nibbles = Math.floor(prefixLen / 4)
    const remainder = prefixLen % 4
    if (ipExp.slice(0, nibbles) !== baseExp.slice(0, nibbles)) return false
    if (remainder === 0) return true
    const mask = (0xf << (4 - remainder)) & 0xf
    return (parseInt(ipExp[nibbles], 16) & mask) === (parseInt(baseExp[nibbles], 16) & mask)
  } catch {
    return false
  }
}

// ─── EX — INDIVIDUAL IPv4 ────────────────────────────────────────────────────
// Rule 1 (Home & Work) + Rule 2 (Additional Known) merged
const EX_IPV4 = new Set([
  // Rule 1 — confirmed residential/mobile
  '173.52.207.29',   // Home (Optimum)
  '65.217.195.202',
  '131.239.150.162',
  '140.248.5.131',   // iCloud Private Relay
  '140.248.5.134',
  '140.248.5.135',
  '74.108.4.168',
  '74.108.0.168',
  '74.108.150.198',  // Merrick 8am — confirmed via IPv6 gap
  '74.108.0.192',
  '74.108.221.101',
  '74.108.221.52',
  '100.33.80.247',
  '108.29.72.112',
  '108.30.85.29',
  '96.250.199.77',
  '96.250.237.132',
  '72.69.67.59',
  '98.116.97.110',
  '98.113.34.237',
  '71.183.213.243',
  '74.101.251.36',
  '74.101.254.170',
  '170.24.156.2',
  '108.54.17.91',
  '100.38.255.90',
  '67.86.179.115',
  '173.56.60.7',     // Mobile
  '71.190.102.161',  // Mobile
  // Rule 2 — additional known
  '173.2.155.13',
  '96.250.202.2',
  '98.113.34.129',
  '68.237.93.74',
  '173.56.57.79',
  '108.46.183.114',  // Merrick — IPv4 mapped after IPv6 session
  '108.6.128.195',
  '66.65.168.94',
  '146.75.236.1',    // Fastly Private Relay
  '146.75.236.0',
  '146.75.245.78',
  '146.75.237.84',
  '146.75.245.79',
  '146.75.237.85',
  '146.75.249.103',
  '104.28.55.223',
  '104.28.57.225',
  '104.28.57.224',
  '104.28.57.221',
  '104.28.77.139',
  '96.232.108.168',
  '172.56.164.220',  // T-Mobile Brooklyn
  '172.56.164.122',
  '172.56.161.153',  // T-Mobile Queens
  // Added Mar 3 — Mechanicsville (Day 9, Edge Desktop, fixated on Intimacy post)
  '67.174.74.39',
  // Added Mar 6 — bots/crawlers
  '51.38.104.193', // OVH SAS Madrid — scanning for /ss.php, /cache.php
  '40.77.167.19',  // Microsoft/Bingbot — Boydton VA datacenter
])

// ─── EX — CIDR RANGES (IPv4) ─────────────────────────────────────────────────
const EX_IPV4_CIDRS = [
  '72.69.152.0/24',    // Optimum range
  '71.167.151.0/24',   // known range
  '140.248.5.0/24',    // iCloud Private Relay
  '140.248.4.0/24',    // iCloud Private Relay
  '146.75.236.0/24',   // Fastly Private Relay
  '146.75.237.0/24',
  '146.75.244.0/24',
  '146.75.245.0/24',
  '146.75.249.0/24',
]

// ─── EX — INDIVIDUAL IPv6 ────────────────────────────────────────────────────
const EX_IPV6 = new Set([
  '2a04:4e41:360a:b05e::3c67:d05e',        // Fastly Private Relay — iPhone Safari
  '2a09:bac3:abc1:197d::28a:c6',            // iCloud Relay
  '2600:4808:5a34:8900:d5c4:fc04:9e60:b133',// Cablevision — Mac Safari
  '2a09:bac3:6d4e:266e::3d4:1d',            // iCloud Relay — iOS BG
  '2a09:bac2:a622:303c::4ce:23',            // iCloud Relay — Mac Safari
  '2600:4041:5697:ab00:a9b0:218c:54a8:e560',// Verizon — Samsung Android
  '2600:4808:9ad0:cf00:9049:bc84:80ef:c663',// Cablevision — iPhone (different /48)
  '2600:4040:9b28:fc00:a079:8ddb:7917:85ce',// Verizon — iPhone (Merrick gap)
  '2a04:4e41:360a:931f::70ce:31f',          // Fastly — new Mar 2, Mac Safari
  '2a04:4e41:3009:e8b8::8d0b:48b8',         // Fastly — new Mar 3, iPhone Safari
  '2a09:bac3:a7a7:292d::41a:7',             // Cloudflare/Private Relay — iOS BG
  '2a09:bac2:a7a6:197d::28a:6e',            // Cloudflare/Private Relay — iOS BG
])

// ─── EX — IPv6 CIDR RANGES ───────────────────────────────────────────────────
const EX_IPV6_CIDRS = [
  '2a04:4e41::/32',  // Fastly full range (iCloud Private Relay)
]

// ─── HUSBAND & WIFE — IPv4 ───────────────────────────────────────────────────
// Personal + Secondary merged
const HW_IPV4 = new Set([
  // Personal devices
  '74.108.40.8',
  '47.23.110.146',
  '108.14.107.240',  // Wife's phone (Verizon Business)
  '216.247.106.3',
  '104.28.57.247',
  '104.28.202.181',
  '155.133.4.229',
  '104.28.55.233',
  '151.240.205.74',
  '172.226.198.12',  // Google Fi
  '172.226.198.9',
  '172.226.200.16',
  '172.226.196.3',
  '172.226.204.15',
  '172.226.202.21',
  '172.226.194.26',
  '172.225.132.81',
  '172.225.132.94',
  '104.28.55.252',
  '104.28.56.2',
  // Secondary
  '172.56.35.189',
  '104.28.77.155',
  '104.28.55.230',
  '104.28.132.125',
  '104.28.56.0',
  '104.28.56.3',
  '104.28.39.144',
  '104.28.39.142',
  '104.28.55.234',
  '104.28.77.145',
  '104.28.77.167',
  '149.57.176.43',   // Altice/Optimum Rockland County
  '149.57.176.224',
  '149.57.176.183',
  '149.57.191.211',
  '149.57.191.67',
  '149.57.191.232',
  '149.57.191.239',
  '149.57.191.113',
  '149.57.191.97',
  '45.88.222.205',
  '140.163.254.89',  // MSK (also covered by /24 below)
  '104.28.39.123',
])

// ─── HUSBAND & WIFE — CIDR RANGES ────────────────────────────────────────────
const HW_IPV4_CIDRS = [
  '140.163.254.0/24', // Memorial Sloan Kettering corporate network
]

// ─── WHITELIST ────────────────────────────────────────────────────────────────
const WHITELIST_IPV4 = new Set([
  '24.47.247.192', // Site owner — Valley Stream
])
const WHITELIST_IPV6_CIDRS = [
  '2600:4808:2b50:9600::/64', // Site owner home — Valley Stream Optimum/Cablevision
]

// ─── MAIN BLOCKER ─────────────────────────────────────────────────────────────
function isBlocked(ip: string): boolean {
  const isIPv6 = ip.includes(':')
  if (isIPv6) {
    // Whitelist check first
    if (WHITELIST_IPV6_CIDRS.some(cidr => inIPv6CIDR(ip, cidr))) return false
    // Ex IPv6 exact match
    if (EX_IPV6.has(ip)) return true
    // Ex IPv6 CIDR match
    if (EX_IPV6_CIDRS.some(cidr => inIPv6CIDR(ip, cidr))) return true
    return false
  } else {
    // Whitelist check first
    if (WHITELIST_IPV4.has(ip)) return false
    // Ex IPv4 exact match
    if (EX_IPV4.has(ip)) return true
    // Ex IPv4 CIDR match
    if (EX_IPV4_CIDRS.some(cidr => inCIDR(ip, cidr))) return true
    // H&W IPv4 exact match
    if (HW_IPV4.has(ip)) return true
    // H&W IPv4 CIDR match
    if (HW_IPV4_CIDRS.some(cidr => inCIDR(ip, cidr))) return true
    return false
  }
}

// ─── MIDDLEWARE EXPORT ────────────────────────────────────────────────────────
// Ghost slugs — ISR-cached pages from old deploys that no longer exist in Firestore.
// Middleware intercepts BEFORE ISR cache layer, guaranteeing a real 404.
const GHOST_SLUGS = new Set([
  'narcissistic-abuse-and-the-awakening-how-antagonistic-personality-traits-trap-empathic-people',
])

export async function middleware(req: NextRequest, evt: NextFetchEvent) {
  // Kill ghost pages first — runs before everything else
  const pathname = req.nextUrl.pathname
  if (pathname.startsWith('/post/')) {
    const slug = pathname.replace('/post/', '').replace(/\/$/, '')
    if (GHOST_SLUGS.has(slug)) {
      return new NextResponse('Not Found', { status: 404 })
    }
  }

  // Check Edge Config toggle — skip blocking if firewall is disabled
  try {
    const firewallEnabled = await get<boolean>('firewallEnabled')
    if (firewallEnabled === false) return NextResponse.next()
  } catch {
    // Edge Config unavailable — fail open (don't block)
    return NextResponse.next()
  }

  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    '0.0.0.0'

  const blocked = isBlocked(ip)
  const path = req.nextUrl.pathname

  // Log hit asynchronously — does not delay the response
  evt.waitUntil(logHit(ip, path, blocked))

  if (blocked) {
    return new NextResponse(null, { status: 403 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/:path*',
}
