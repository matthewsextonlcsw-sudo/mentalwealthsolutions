// Deterministic star positions — no Math.random() for stable SSR/hydration
function genStars(
  count: number,
  xMult: number,
  yMult: number,
  durationBase: number,
  delayMult: number
) {
  return Array.from({ length: count }, (_, i) => ({
    x: Number(((i * xMult + 7.3) % 100).toFixed(2)),
    y: Number(((i * yMult + 13.1) % 100).toFixed(2)),
    delay: Number(((i * delayMult) % 10).toFixed(1)),
    duration: Number((durationBase + ((i * 0.53) % durationBase)).toFixed(1)),
  }));
}

const SMALL = genStars(120, 13.71, 23.81, 4, 1.37);
const MEDIUM = genStars(60, 17.43, 31.17, 6, 2.11);
const LARGE = genStars(18, 22.87, 41.23, 5, 3.07);

export function Starfield() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Space nebula gradients */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(88, 28, 135, 0.4) 0%, transparent 50%), " +
            "radial-gradient(ellipse at 80% 20%, rgba(30, 64, 175, 0.3) 0%, transparent 45%)",
        }}
      />

      {/* Small stars */}
      {SMALL.map((s, i) => (
        <span
          key={`sm-${i}`}
          className="star-sm"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            "--star-duration": `${s.duration}s`,
            "--star-delay": `${s.delay}s`,
          } as React.CSSProperties}
        />
      ))}

      {/* Medium stars */}
      {MEDIUM.map((s, i) => (
        <span
          key={`md-${i}`}
          className="star-md"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            "--star-duration": `${s.duration}s`,
            "--star-delay": `${s.delay}s`,
          } as React.CSSProperties}
        />
      ))}

      {/* Large stars */}
      {LARGE.map((s, i) => (
        <span
          key={`lg-${i}`}
          className="star-lg"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            "--star-duration": `${s.duration}s`,
            "--star-delay": `${s.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
