/**
 * Firestore REST client for fetching published blog posts.
 * Uses jose for JWT signing — no Firebase SDK needed.
 * Server-side only (Next.js RSC / build time).
 */

import { SignJWT, importPKCS8 } from "jose";

interface FirestoreDoc {
  name: string;
  fields: Record<string, FirestoreValue>;
  createTime: string;
  updateTime: string;
}

type FirestoreValue =
  | { stringValue: string }
  | { integerValue: string }
  | { booleanValue: boolean }
  | { arrayValue: { values?: FirestoreValue[] } }
  | { mapValue: { fields: Record<string, FirestoreValue> } }
  | { timestampValue: string }
  | { nullValue: null };

// ---------- Auth ----------

let cachedToken: { token: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt - 60_000) {
    return cachedToken.token;
  }

  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (!raw) {
    throw new Error("FIREBASE_SERVICE_ACCOUNT_JSON env var is not set");
  }

  const sa = JSON.parse(raw);
  const now = Math.floor(Date.now() / 1000);

  const privateKey = await importPKCS8(sa.private_key, "RS256");

  const jwt = await new SignJWT({
    iss: sa.client_email,
    sub: sa.client_email,
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
    scope: "https://www.googleapis.com/auth/datastore",
  })
    .setProtectedHeader({ alg: "RS256", typ: "JWT" })
    .sign(privateKey);

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Token exchange failed (${res.status}): ${text}`);
  }

  const data = await res.json();
  cachedToken = {
    token: data.access_token,
    expiresAt: Date.now() + data.expires_in * 1000,
  };
  return cachedToken.token;
}

// ---------- Helpers ----------

function extractString(v: FirestoreValue | undefined): string {
  if (!v) return "";
  if ("stringValue" in v) return v.stringValue;
  if ("timestampValue" in v) return v.timestampValue;
  return "";
}

function extractArray(v: FirestoreValue | undefined): string[] {
  if (!v || !("arrayValue" in v)) return [];
  const vals = v.arrayValue.values ?? [];
  return vals.map((item) => extractString(item)).filter(Boolean);
}

// ---------- Public API ----------

export interface FirestoreBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  content: string;
}

const PROJECT_ID = "vibe-check-d53bb";

export async function getFirestorePosts(): Promise<FirestoreBlogPost[]> {
  // Skip if no service account configured (local dev without Firestore)
  if (!process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
    return [];
  }

  try {
    const token = await getAccessToken();

    // Firestore REST: run a structured query for published posts
    const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents:runQuery`;

    const body = {
      structuredQuery: {
        from: [{ collectionId: "blogs" }],
        where: {
          fieldFilter: {
            field: { fieldPath: "status" },
            op: "EQUAL",
            value: { stringValue: "published" },
          },
        },
        orderBy: [
          {
            field: { fieldPath: "publishedAt" },
            direction: "DESCENDING",
          },
        ],
        limit: 100,
      },
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      next: { revalidate: 300 }, // ISR: revalidate every 5 minutes
    });

    if (!res.ok) {
      const text = await res.text();
      console.error(`Firestore query failed (${res.status}):`, text);
      return [];
    }

    const results: Array<{ document?: FirestoreDoc }> = await res.json();

    return results
      .filter((r) => r.document)
      .map((r) => {
        const f = r.document!.fields;
        return {
          slug: extractString(f.slug),
          title: extractString(f.title),
          excerpt: extractString(f.excerpt),
          date: extractString(f.publishedAt),
          author: extractString(f.author) || "Matthew Sexton, LCSW",
          tags: extractArray(f.tags),
          content: extractString(f.content),
        };
      })
      .filter((p) => p.slug && p.title);
  } catch (err) {
    console.error("Failed to fetch Firestore posts:", err);
    return [];
  }
}

export async function getFirestorePostBySlug(
  slug: string
): Promise<FirestoreBlogPost | null> {
  if (!process.env.FIREBASE_SERVICE_ACCOUNT_JSON) return null;

  try {
    const token = await getAccessToken();

    const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents:runQuery`;

    const body = {
      structuredQuery: {
        from: [{ collectionId: "blogs" }],
        where: {
          compositeFilter: {
            op: "AND",
            filters: [
              {
                fieldFilter: {
                  field: { fieldPath: "slug" },
                  op: "EQUAL",
                  value: { stringValue: slug },
                },
              },
              {
                fieldFilter: {
                  field: { fieldPath: "status" },
                  op: "EQUAL",
                  value: { stringValue: "published" },
                },
              },
            ],
          },
        },
        limit: 1,
      },
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      next: { revalidate: 300 },
    });

    if (!res.ok) return null;

    const results: Array<{ document?: FirestoreDoc }> = await res.json();
    const doc = results.find((r) => r.document)?.document;
    if (!doc) return null;

    const f = doc.fields;
    return {
      slug: extractString(f.slug),
      title: extractString(f.title),
      excerpt: extractString(f.excerpt),
      date: extractString(f.publishedAt),
      author: extractString(f.author) || "Matthew Sexton, LCSW",
      tags: extractArray(f.tags),
      content: extractString(f.content),
    };
  } catch (err) {
    console.error("Failed to fetch Firestore post by slug:", err);
    return null;
  }
}
