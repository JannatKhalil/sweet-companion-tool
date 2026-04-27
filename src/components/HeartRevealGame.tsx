import { useMemo, useState } from "react";

const NOTES = [
  { emoji: "💌", text: "you are my favorite notification 🩷" },
  { emoji: "🌸", text: "i'd choose you in every lifetime 🌷" },
  { emoji: "🧸", text: "meri pyari guriya, you are my safe place 🤍" },
  { emoji: "✨", text: "your smile is my whole world ✨" },
  { emoji: "🎀", text: "i'll never leave you — promise 🎀" },
  { emoji: "💗", text: "i love you more than i can ever say 💗" },
  { emoji: "🍓", text: "you are the cutest human ever 🥺" },
  { emoji: "🕊️", text: "forever yours, in every little way 🤍" },
  { emoji: "🌙", text: "good morning & good night, always you 🌙" },
];

const HEART_COLORS = [
  "bg-gradient-coral",
  "bg-gradient-burgundy",
  "bg-gradient-lavender",
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function HeartRevealGame() {
  const [seed, setSeed] = useState(0);
  const [opened, setOpened] = useState<Set<number>>(new Set());
  const [lastOpened, setLastOpened] = useState<number | null>(null);
  const [burst, setBurst] = useState(false);

  // shuffled order, regenerates on reset
  const order = useMemo(() => shuffle(NOTES.map((_, i) => i)), [seed]);

  const toggle = (slot: number) => {
    setOpened((prev) => {
      const next = new Set(prev);
      if (next.has(slot)) {
        next.delete(slot);
      } else {
        next.add(slot);
        setLastOpened(slot);
        if (next.size === NOTES.length) {
          setBurst(true);
          setTimeout(() => setBurst(false), 2400);
        }
      }
      return next;
    });
  };

  const reset = () => {
    setOpened(new Set());
    setLastOpened(null);
    setBurst(false);
    setSeed((s) => s + 1);
  };

  const progress = opened.size;
  const total = NOTES.length;
  const allOpen = progress === total;

  return (
    <div className="mx-auto max-w-3xl">
      <p className="mb-4 text-center font-script text-2xl text-lilac">
        tap each heart to reveal a little love note 💗
      </p>

      {/* Progress */}
      <div className="mx-auto mb-8 max-w-md">
        <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span>hearts opened</span>
          <span className="font-display text-base italic text-burgundy">
            {progress} / {total}
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-card/70 backdrop-blur-sm">
          <div
            className="h-full rounded-full bg-gradient-coral transition-all duration-500"
            style={{ width: `${(progress / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Grid */}
      <div className="relative grid grid-cols-3 gap-4 sm:gap-5">
        {order.map((noteIdx, slot) => {
          const isOpen = opened.has(slot);
          const note = NOTES[noteIdx];
          const heartBg = HEART_COLORS[slot % HEART_COLORS.length];
          const justOpened = lastOpened === slot && isOpen;
          return (
            <button
              key={`${seed}-${slot}`}
              onClick={() => toggle(slot)}
              className="group relative aspect-square w-full [perspective:1000px] focus:outline-none"
              aria-label={isOpen ? "Hide note" : "Reveal note"}
            >
              {/* sparkles on open */}
              {justOpened && (
                <>
                  <span className="pointer-events-none absolute -top-2 left-1/2 z-20 -translate-x-1/2 animate-fade-up text-xl">
                    ✨
                  </span>
                  <span
                    className="pointer-events-none absolute -right-2 top-1/3 z-20 animate-fade-up text-lg"
                    style={{ animationDelay: "0.1s" }}
                  >
                    💖
                  </span>
                  <span
                    className="pointer-events-none absolute -left-2 bottom-1/4 z-20 animate-fade-up text-lg"
                    style={{ animationDelay: "0.2s" }}
                  >
                    ✨
                  </span>
                </>
              )}

              <div
                className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  isOpen ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* FRONT — heart */}
                <div
                  className={`absolute inset-0 grid place-items-center rounded-3xl border border-coral/25 ${heartBg} text-primary-foreground shadow-petal [backface-visibility:hidden] transition-transform duration-300 group-hover:scale-[1.05] group-hover:-rotate-3 group-active:scale-95`}
                >
                  <span className="text-5xl drop-shadow-md transition-transform group-hover:scale-110 sm:text-6xl">
                    ♡
                  </span>
                  <span className="absolute right-2 top-2 text-[10px] font-medium uppercase tracking-widest text-primary-foreground/70">
                    {slot + 1}
                  </span>
                </div>
                {/* BACK — note */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-3xl border border-burgundy/20 bg-card/95 p-3 text-center shadow-soft backdrop-blur-sm [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-4">
                  <span className="animate-heart-beat text-2xl sm:text-3xl">
                    {note.emoji}
                  </span>
                  <p className="font-display text-xs italic leading-snug text-burgundy sm:text-sm">
                    {note.text}
                  </p>
                </div>
              </div>
            </button>
          );
        })}

        {/* Celebration burst overlay */}
        {burst && (
          <div className="pointer-events-none absolute inset-0 z-30 overflow-visible">
            {Array.from({ length: 18 }).map((_, i) => {
              const angle = (i / 18) * Math.PI * 2;
              const dist = 120 + (i % 3) * 40;
              const x = Math.cos(angle) * dist;
              const y = Math.sin(angle) * dist;
              const emojis = ["💗", "✨", "🎀", "🌸", "💐", "🤍"];
              return (
                <span
                  key={i}
                  className="absolute left-1/2 top-1/2 text-2xl"
                  style={{
                    animation: `heart-burst-${i} 2.2s ease-out forwards`,
                  }}
                >
                  <style>{`@keyframes heart-burst-${i} {
                    0% { transform: translate(-50%, -50%) scale(0.4); opacity: 0; }
                    20% { opacity: 1; }
                    100% { transform: translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1) rotate(${i * 30}deg); opacity: 0; }
                  }`}</style>
                  {emojis[i % emojis.length]}
                </span>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-8 flex flex-col items-center gap-3">
        {allOpen && (
          <p className="animate-fade-up text-center font-script text-2xl text-coral sm:text-3xl">
            you opened them all — just like you opened my heart 🥹💗
          </p>
        )}
        <button
          onClick={reset}
          className="rounded-full border border-coral/30 bg-card/70 px-5 py-2 text-xs uppercase tracking-[0.25em] text-burgundy backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-petal"
        >
          {allOpen ? "play again 🎀" : "shuffle & reset"}
        </button>
      </div>
    </div>
  );
}
