"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  phase: number;
  speed: number;
};

type Shooter = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  len: number;
  alpha: number;
  active: boolean;
};

function buildCityPath(w: number, h: number): Path2D {
  const path = new Path2D();
  path.moveTo(0, h);

  // Buildings — deterministic widths/heights so it looks like a real skyline
  const buildings = [
    { w: 60, h: 0.28 }, { w: 40, h: 0.22 }, { w: 80, h: 0.35 },
    { w: 30, h: 0.18 }, { w: 55, h: 0.30 }, { w: 45, h: 0.25 },
    { w: 100, h: 0.42 }, { w: 35, h: 0.20 }, { w: 70, h: 0.33 },
    { w: 50, h: 0.27 }, { w: 40, h: 0.21 }, { w: 65, h: 0.31 },
    { w: 30, h: 0.17 }, { w: 80, h: 0.38 }, { w: 45, h: 0.24 },
    { w: 55, h: 0.29 }, { w: 35, h: 0.19 }, { w: 60, h: 0.32 },
    { w: 90, h: 0.40 }, { w: 40, h: 0.22 }, { w: 50, h: 0.26 },
    { w: 35, h: 0.20 }, { w: 70, h: 0.34 }, { w: 45, h: 0.23 },
  ];

  // Scale buildings to fill full width
  const totalBuildingW = buildings.reduce((a, b) => a + b.w, 0);
  const scale = w / totalBuildingW;

  let x = 0;
  for (const b of buildings) {
    const bw = b.w * scale;
    const bh = b.h * h;
    // Notched rooftop for some buildings (every 3rd)
    const idx = buildings.indexOf(b);
    path.lineTo(x, h - bh);
    if (idx % 3 === 0 && bw > 40) {
      // Add antenna
      path.lineTo(x + bw * 0.45, h - bh);
      path.lineTo(x + bw * 0.45, h - bh - 12);
      path.lineTo(x + bw * 0.55, h - bh - 12);
      path.lineTo(x + bw * 0.55, h - bh);
    }
    path.lineTo(x + bw, h - bh);
    path.lineTo(x + bw, h);
    x += bw;
  }

  path.lineTo(w, h);
  path.closePath();
  return path;
}

function makeStars(count: number, w: number, h: number): Star[] {
  const stars: Star[] = [];
  // Deterministic using golden ratio sequence
  const phi = 1.6180339887;
  for (let i = 0; i < count; i++) {
    stars.push({
      x: ((i * phi * 100) % 100) / 100 * w,
      y: ((i * phi * phi * 100) % 100) / 100 * h * 0.78, // keep stars in upper 78%
      r: i % 30 === 0 ? 1.8 : i % 7 === 0 ? 1.2 : 0.7,
      phase: (i * 1.37) % (Math.PI * 2),
      speed: 0.3 + (i % 5) * 0.15,
    });
  }
  return stars;
}

export function CinematicSky() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let startTime: number | null = null;
    const PAN_DURATION = 4000; // ms for pan-up
    const CITY_HEIGHT_FRACTION = 0.22; // city takes bottom 22% of canvas

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    // Pre-generate stars
    let stars: Star[] = makeStars(180, W(), H());

    // Shooting star state
    const shooter: Shooter = {
      x: 0, y: 0, vx: 0, vy: 0, len: 0, alpha: 0, active: false,
    };

    function launchShooter() {
      shooter.x = W() * (0.2 + Math.random() * 0.5);
      shooter.y = H() * 0.05;
      const angle = Math.PI * (0.15 + Math.random() * 0.1); // ~27-45 deg
      const speed = 8 + Math.random() * 6;
      shooter.vx = Math.cos(angle) * speed;
      shooter.vy = Math.sin(angle) * speed;
      shooter.len = 80 + Math.random() * 60;
      shooter.alpha = 1;
      shooter.active = true;
    }

    // Launch first shooter after pan completes + 1s
    let shooterTimeout = setTimeout(launchShooter, PAN_DURATION + 1000);
    let shooterInterval: ReturnType<typeof setInterval>;

    function draw(ts: number) {
      if (!ctx) return;
      if (startTime === null) startTime = ts;
      const elapsed = ts - startTime;
      const panProgress = Math.min(elapsed / PAN_DURATION, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - panProgress, 3);

      const w = W();
      const h = H();
      const cityH = h * CITY_HEIGHT_FRACTION;

      // Pan offset: start shifted down 20% of h, pan to 0
      const panOffset = (1 - ease) * h * 0.20;

      ctx.clearRect(0, 0, w, h);

      // Sky gradient (dark navy → slightly lighter at horizon)
      const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
      skyGrad.addColorStop(0, "#050d1a");
      skyGrad.addColorStop(0.7, "#0a1628");
      skyGrad.addColorStop(1, "#0d1f38");
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, w, h);

      // Nebula glow
      const nebula1 = ctx.createRadialGradient(w * 0.2, h * 0.3 + panOffset, 0, w * 0.2, h * 0.3 + panOffset, w * 0.4);
      nebula1.addColorStop(0, "rgba(88,28,135,0.12)");
      nebula1.addColorStop(1, "rgba(88,28,135,0)");
      ctx.fillStyle = nebula1;
      ctx.fillRect(0, 0, w, h);

      const nebula2 = ctx.createRadialGradient(w * 0.75, h * 0.2 + panOffset, 0, w * 0.75, h * 0.2 + panOffset, w * 0.35);
      nebula2.addColorStop(0, "rgba(30,64,175,0.10)");
      nebula2.addColorStop(1, "rgba(30,64,175,0)");
      ctx.fillStyle = nebula2;
      ctx.fillRect(0, 0, w, h);

      // Stars (pan with offset)
      const t = ts / 1000;
      for (const s of stars) {
        const twinkle = 0.3 + 0.7 * Math.abs(Math.sin(t * s.speed + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y + panOffset, s.r, 0, Math.PI * 2);
        if (s.r > 1.5) {
          // Glow for large stars
          const glow = ctx.createRadialGradient(s.x, s.y + panOffset, 0, s.x, s.y + panOffset, s.r * 4);
          glow.addColorStop(0, `rgba(255,255,255,${twinkle * 0.8})`);
          glow.addColorStop(1, "rgba(255,255,255,0)");
          ctx.fillStyle = glow;
          ctx.arc(s.x, s.y + panOffset, s.r * 4, 0, Math.PI * 2);
        } else {
          ctx.fillStyle = `rgba(255,255,255,${twinkle})`;
        }
        ctx.fill();
      }

      // Shooting star
      if (shooter.active) {
        const tail = ctx.createLinearGradient(
          shooter.x - shooter.vx * (shooter.len / 8),
          shooter.y - shooter.vy * (shooter.len / 8),
          shooter.x, shooter.y
        );
        tail.addColorStop(0, `rgba(255,255,255,0)`);
        tail.addColorStop(1, `rgba(255,255,255,${shooter.alpha})`);
        ctx.beginPath();
        ctx.strokeStyle = tail;
        ctx.lineWidth = 1.5;
        ctx.moveTo(shooter.x - shooter.vx * (shooter.len / 8), shooter.y - shooter.vy * (shooter.len / 8));
        ctx.lineTo(shooter.x, shooter.y);
        ctx.stroke();

        // Advance
        shooter.x += shooter.vx;
        shooter.y += shooter.vy;
        shooter.alpha -= 0.018;
        if (shooter.alpha <= 0 || shooter.x > w + 50 || shooter.y > h) {
          shooter.active = false;
          // Schedule next
          shooterInterval = setInterval(launchShooter, 9000);
        }
      }

      // Horizon glow above city
      const horizonGrad = ctx.createLinearGradient(0, h - cityH - 30, 0, h - cityH + 20);
      horizonGrad.addColorStop(0, "rgba(201,168,76,0)");
      horizonGrad.addColorStop(0.5, "rgba(201,168,76,0.06)");
      horizonGrad.addColorStop(1, "rgba(201,168,76,0.12)");
      ctx.fillStyle = horizonGrad;
      ctx.fillRect(0, h - cityH - 30, w, 50);

      // City silhouette
      ctx.save();
      ctx.translate(0, 0);
      const cityPath = buildCityPath(w, cityH);
      ctx.save();
      ctx.translate(0, h - cityH);
      const cityGrad = ctx.createLinearGradient(0, 0, 0, cityH);
      cityGrad.addColorStop(0, "#0a1628");
      cityGrad.addColorStop(1, "#06101f");
      ctx.fillStyle = cityGrad;
      ctx.fill(cityPath);
      ctx.restore();
      ctx.restore();

      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(shooterTimeout);
      clearInterval(shooterInterval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
