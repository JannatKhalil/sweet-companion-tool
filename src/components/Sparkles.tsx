function rand(seed: number) {
  const x = Math.sin(seed * 911.7) * 43758.5453;
  return x - Math.floor(x);
}

export function Sparkles({ count = 18, seed = 1 }: { count?: number; seed?: number }) {
  const items = Array.from({ length: count }).map((_, i) => ({
    id: i,
    top: rand(seed * 100 + i) * 100,
    left: rand(seed * 200 + i) * 100,
    size: 6 + rand(seed * 300 + i) * 10,
    delay: rand(seed * 400 + i) * 3,
    color: i % 3 === 0 ? "#7A2A3A" : i % 3 === 1 ? "#C9A9D6" : "#E8927C",
  }));
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((s) => (
        <svg
          key={s.id}
          className="animate-shimmer absolute"
          width={s.size.toFixed(2)}
          height={s.size.toFixed(2)}
          viewBox="0 0 24 24"
          fill="none"
          style={{ top: `${s.top.toFixed(3)}%`, left: `${s.left.toFixed(3)}%`, animationDelay: `${s.delay.toFixed(3)}s` }}
        >
          <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" fill={s.color} opacity="0.7" />
        </svg>
      ))}
    </div>
  );
}
