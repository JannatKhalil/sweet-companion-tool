import { useEffect, useState } from "react";

const PASSWORD = "iloveyou";
const STORAGE_KEY = "two-years-unlocked";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [opening, setOpening] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined" && sessionStorage.getItem(STORAGE_KEY) === "1") {
      setUnlocked(true);
    }
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim().toLowerCase() === PASSWORD) {
      setError(false);
      setOpening(true);
      setTimeout(() => {
        sessionStorage.setItem(STORAGE_KEY, "1");
        setUnlocked(true);
      }, 1100);
    } else {
      setError(true);
      setTimeout(() => setError(false), 800);
    }
  };

  if (!mounted) return null;
  if (unlocked) return <>{children}</>;

  return (
    <main className="relative grid min-h-screen place-items-center overflow-hidden px-6">
      {/* floating hearts bg */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-coral/40"
            style={{
              left: `${(i * 53) % 100}%`,
              bottom: "-40px",
              fontSize: `${14 + (i % 4) * 8}px`,
              animation: `float-up ${10 + (i % 5) * 2}s linear ${i * 0.6}s infinite`,
            }}
          >
            ♡
          </span>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-md text-center animate-fade-up">
        <p className="font-script text-2xl text-lilac sm:text-3xl">a little secret door</p>
        <h1 className="mt-2 font-display text-5xl font-semibold italic text-burgundy sm:text-6xl">
          enter the <em className="text-coral">password</em>
        </h1>
        <p className="mt-3 text-sm italic text-muted-foreground">
          hint: three little words, no spaces 💗
        </p>

        {/* Heart container */}
        <form onSubmit={submit} className="relative mx-auto mt-12 grid place-items-center">
          <div
            className={`relative h-72 w-72 transition-all duration-1000 sm:h-80 sm:w-80 ${
              opening ? "scale-150 opacity-0" : "scale-100 opacity-100"
            } ${error ? "animate-shake" : ""}`}
          >
            {/* Heart shape using two rotated rounded squares */}
            <div className="absolute inset-0">
              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[3rem] bg-gradient-coral shadow-soft sm:h-64 sm:w-64" />
              <div className="absolute left-[24%] top-[14%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-coral shadow-soft sm:h-48 sm:w-48" />
              <div className="absolute right-[24%] top-[14%] h-40 w-40 translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-coral shadow-soft sm:h-48 sm:w-48" />
            </div>
            {/* Shine */}
            <div className="absolute left-[28%] top-[20%] h-10 w-6 rotate-[-20deg] rounded-full bg-white/40 blur-sm" />

            {/* Input centered inside heart */}
            <div className="absolute left-1/2 top-[52%] z-10 w-[78%] -translate-x-1/2 -translate-y-1/2">
              <input
                type="password"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="• • • • • •"
                className="w-full rounded-full border-2 border-white/60 bg-white/30 px-4 py-3 text-center font-display text-xl tracking-[0.3em] text-white placeholder:text-white/70 backdrop-blur-md outline-none focus:border-white focus:bg-white/40"
                autoFocus
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={opening}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-burgundy px-8 py-3 font-script text-2xl text-primary-foreground shadow-soft transition-transform hover:scale-105 active:scale-95 disabled:opacity-60"
          >
            unlock my heart
            <span className="animate-heart-beat">♡</span>
          </button>

          {error && (
            <p className="mt-4 font-script text-xl text-burgundy">
              oops, try again my love 🥺
            </p>
          )}
          {opening && (
            <p className="mt-4 font-script text-2xl text-coral">opening… 💗</p>
          )}
        </form>
      </div>

      <style>{`
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-shake { animation: shake 0.4s ease-in-out 2; }
      `}</style>
    </main>
  );
}
