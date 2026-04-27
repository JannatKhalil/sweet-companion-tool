const COLORS = ["#F4A28C", "#F8C8B6", "#FBD9C0", "#C9A9D6", "#7A2A3A", "#D7BDE2", "#EFB8A1"];

// Deterministic pseudo-random so SSR and client match
function rand(seed: number) {
  const x = Math.sin(seed * 999.13) * 43758.5453;
  return x - Math.floor(x);
}

export function FloatingBalloons({ count = 16 }: { count?: number }) {
  const balloons = Array.from({ length: count }).map((_, i) => {
    const left = rand(i + 1) * 100;
    const duration = 14 + rand(i + 17) * 16;
    const delay = -rand(i + 31) * duration;
    const size = 18 + rand(i + 47) * 26;
    const color = COLORS[i % COLORS.length];
    return { left, duration, delay, size, color, id: i };
  });

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {balloons.map((b) => (
        <div
          key={b.id}
          className="animate-float-up absolute"
          style={{
            left: `${b.left.toFixed(3)}%`,
            animationDuration: `${b.duration.toFixed(3)}s`,
            animationDelay: `${b.delay.toFixed(3)}s`,
            bottom: "-80px",
          }}
        >
          <svg width={b.size.toFixed(2)} height={(b.size * 1.05).toFixed(2)} viewBox="0 0 24 26" fill="none">
            <path
              d="M12 2 C6 2 3 7 5 13 C6.5 17 9.5 19 12 22 C14.5 19 17.5 17 19 13 C21 7 18 2 12 2 Z"
              fill={b.color}
              opacity="0.85"
            />
            <path d="M12 22 L11.5 26 L12.5 26 Z" fill={b.color} opacity="0.9" />
          </svg>
        </div>
      ))}
    </div>
  );
}
