import { useEffect, useState } from "react";
import teddyGateImg from "@/assets/teddy-gate.png";

// Accept multiple natural formats of the same date: 29 April 2024
const VALID_PASSWORDS = [
  "29/4/24",
  "29/04/24",
  "29/4/2024",
  "29/04/2024",
  "29-4-24",
  "29-04-24",
  "29-4-2024",
  "29-04-2024",
  "29.4.24",
  "29.04.24",
  "29.4.2024",
  "29.04.2024",
];
const STORAGE_KEY = "two-years-unlocked";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [unlocked, setUnlocked] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [opening, setOpening] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Always show the gate on each visit — no auto-unlock
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = value.trim().replace(/\s+/g, "");
    if (VALID_PASSWORDS.includes(cleaned)) {
      setError(false);
      setOpening(true);
      setTimeout(() => {
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
    <main className="relative grid min-h-screen place-items-center overflow-hidden px-6 py-10">
      {/* floating hearts bg */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="absolute text-coral/40"
            style={{
              left: `${(i * 53) % 100}%`,
              bottom: "-40px",
              fontSize: `${14 + (i % 4) * 10}px`,
              animation: `float-up ${10 + (i % 5) * 2}s linear ${i * 0.6}s infinite`,
            }}
          >
            ♡
          </span>
        ))}
      </div>

      <div
        className={`relative z-10 w-full max-w-lg text-center animate-fade-up transition-all duration-1000 ${
          opening ? "scale-110 opacity-0 blur-sm" : "scale-100 opacity-100"
        }`}
      >
        <p className="font-script text-2xl text-lilac sm:text-3xl">
          welcome to our little world
        </p>
        <h1 className="mt-1 font-display text-4xl font-semibold italic text-burgundy sm:text-5xl">
          knock knock 🌷
        </h1>

        {/* Teddy couple at the gate */}
        <div className={`relative mx-auto mt-4 w-full max-w-sm ${error ? "animate-shake" : ""}`}>
          <img
            src={teddyGateImg}
            alt="cute teddy bear couple standing at a flower gate"
            width={1024}
            height={1024}
            className="mx-auto h-auto w-full drop-shadow-[0_10px_30px_rgba(255,150,170,0.35)]"
          />
          {/* speech bubble */}
          <div className="absolute -top-2 right-2 max-w-[70%] rounded-2xl rounded-br-sm bg-white/90 px-4 py-2 text-left shadow-soft backdrop-blur-sm sm:right-6 sm:max-w-[60%]">
            <p className="font-script text-base leading-tight text-burgundy sm:text-lg">
              psst… password btao phir andar ana 💗
            </p>
            <span className="absolute -bottom-1 right-6 h-3 w-3 rotate-45 bg-white/90" />
          </div>
        </div>

        <form onSubmit={submit} className="mx-auto mt-6 w-full max-w-sm">
          <div className="rounded-3xl border border-coral/30 bg-card/80 p-5 shadow-soft backdrop-blur-md">
            <label
              htmlFor="pw"
              className="block font-script text-xl text-coral"
            >
              the secret date 🌹
            </label>
            <input
              id="pw"
              type="text"
              inputMode="numeric"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="dd/mm/yy"
              className="mt-3 w-full rounded-full border-2 border-coral/40 bg-white/70 px-5 py-3 text-center font-display text-xl tracking-[0.2em] text-burgundy placeholder:text-burgundy/30 outline-none focus:border-burgundy focus:bg-white"
              autoFocus
              autoComplete="off"
            />
            <p className="mt-3 px-2 text-xs italic leading-relaxed text-muted-foreground">
              💡 hint: woh khoobsurat din jab humari kahaani shuru hui…
              <br />
              <span className="text-burgundy/70">(the date we became us — dd/mm/yy)</span>
            </p>

            <button
              type="submit"
              disabled={opening}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-coral px-8 py-3 font-script text-2xl text-primary-foreground shadow-soft transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-60"
            >
              open the gate
              <span className="animate-heart-beat">♡</span>
            </button>
          </div>

          {error && (
            <p className="mt-4 font-script text-xl text-burgundy">
              hmm, that's not it… try again my jaan 🥺💗
            </p>
          )}
          {opening && (
            <p className="mt-4 font-script text-2xl text-coral">
              gate khul raha hai… 🌸✨
            </p>
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
