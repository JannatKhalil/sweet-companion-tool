export function Sparkles({ count = 18 }: { count?: number }) {
  const items = Array.from({ length: count }).map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: 6 + Math.random() * 10,
    delay: Math.random() * 3,
  }));
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((s) => (
        <svg
          key={s.id}
          className="animate-shimmer absolute"
          width={s.size}
          height={s.size}
          viewBox="0 0 24 24"
          fill="none"
          style={{ top: `${s.top}%`, left: `${s.left}%`, animationDelay: `${s.delay}s` }}
        >
          <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" fill="#E8927C" opacity="0.7" />
        </svg>
      ))}
    </div>
  );
}
