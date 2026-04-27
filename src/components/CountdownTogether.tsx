import { useEffect, useState } from "react";

// Two years ago from today (you can change this!)
const ANNIVERSARY_DATE = new Date(new Date().getFullYear() - 2, new Date().getMonth(), new Date().getDate());

function diff() {
  const now = new Date();
  const ms = now.getTime() - ANNIVERSARY_DATE.getTime();
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export function CountdownTogether() {
  const [mounted, setMounted] = useState(false);
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    setMounted(true);
    setT(diff());
    const id = setInterval(() => setT(diff()), 1000);
    return () => clearInterval(id);
  }, []);
  const items = [
    { label: "days", value: t.days },
    { label: "hours", value: t.hours },
    { label: "minutes", value: t.minutes },
    { label: "seconds", value: t.seconds },
  ];
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {items.map((i) => (
        <div
          key={i.label}
          className="rounded-2xl border border-coral/20 bg-card/70 px-4 py-5 text-center backdrop-blur-sm shadow-petal"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="font-display text-4xl font-medium text-coral sm:text-5xl">
            {mounted ? String(i.value).padStart(2, "0") : "--"}
          </div>
          <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{i.label}</div>
        </div>
      ))}
    </div>
  );
}
