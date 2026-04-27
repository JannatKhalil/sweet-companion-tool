const COLORS = ["#F4A28C", "#F8C8B6", "#FBD9C0", "#F49C8C", "#EFB8A1", "#FAD2C0"];

export function FloatingBalloons({ count = 14 }: { count?: number }) {
  const balloons = Array.from({ length: count }).map((_, i) => {
    const left = Math.random() * 100;
    const duration = 14 + Math.random() * 16;
    const delay = -Math.random() * duration;
    const size = 18 + Math.random() * 26;
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
            left: `${b.left}%`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            bottom: "-80px",
          }}
        >
          <svg width={b.size} height={b.size * 1.05} viewBox="0 0 24 26" fill="none">
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
