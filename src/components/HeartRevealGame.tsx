import { useState } from "react";

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

export function HeartRevealGame() {
  const [opened, setOpened] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setOpened((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const reset = () => setOpened(new Set());
  const allOpen = opened.size === NOTES.length;

  return (
    <div className="mx-auto max-w-3xl">
      <p className="mb-8 text-center font-script text-2xl text-lilac">
        tap each heart to reveal a little love note 💗
      </p>

      <div className="grid grid-cols-3 gap-4 sm:gap-5">
        {NOTES.map((n, i) => {
          const isOpen = opened.has(i);
          return (
            <button
              key={i}
              onClick={() => toggle(i)}
              className="group relative aspect-square w-full [perspective:1000px] focus:outline-none"
              aria-label={isOpen ? "Hide note" : "Reveal note"}
            >
              <div
                className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  isOpen ? "[transform:rotateY(180deg)]" : ""
                }`}
              >
                {/* FRONT — heart */}
                <div className="absolute inset-0 grid place-items-center rounded-3xl border border-coral/25 bg-gradient-coral text-primary-foreground shadow-petal [backface-visibility:hidden] transition-transform group-hover:scale-[1.03] group-active:scale-95">
                  <span className="text-5xl drop-shadow-md sm:text-6xl">♡</span>
                </div>
                {/* BACK — note */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-3xl border border-burgundy/20 bg-card/95 p-3 text-center shadow-soft backdrop-blur-sm [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-4">
                  <span className="text-2xl sm:text-3xl">{n.emoji}</span>
                  <p className="font-display text-xs italic leading-snug text-burgundy sm:text-sm">
                    {n.text}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex flex-col items-center gap-3">
        {allOpen && (
          <p className="animate-fade-up font-script text-2xl text-coral">
            you opened them all — just like you opened my heart 🥹💗
          </p>
        )}
        <button
          onClick={reset}
          className="rounded-full border border-coral/30 bg-card/70 px-5 py-2 text-xs uppercase tracking-[0.25em] text-burgundy backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-petal"
        >
          reset hearts
        </button>
      </div>
    </div>
  );
}
