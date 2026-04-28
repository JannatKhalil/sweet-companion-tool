import { useEffect, useRef, useState } from "react";

// Famous love song — "Perfect" by Ed Sheeran (official YouTube audio embed)
const YOUTUBE_ID = "2Vv-BfVoq4g";

export function MusicPlayer() {
  const [playing, setPlaying] = useState(true);
  const [mounted, setMounted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => setMounted(true), []);

  const toggle = () => {
    if (!iframeRef.current) return;
    const action = playing ? "pauseVideo" : "playVideo";
    iframeRef.current.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func: action, args: [] }),
      "*"
    );
    setPlaying((p) => !p);
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-card/85 px-4 py-2 shadow-soft backdrop-blur-md border border-coral/30">
      <button
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play love song"}
        className="grid h-10 w-10 place-items-center rounded-full bg-gradient-coral text-primary-foreground transition-transform hover:scale-110 active:scale-95"
      >
        {playing ? (
          <span className="text-base">❚❚</span>
        ) : (
          <span className="ml-0.5 text-base">▶</span>
        )}
      </button>
      <div className="hidden flex-col leading-tight sm:flex">
        <span className="font-script text-base text-burgundy">our song</span>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
          perfect 🎀
        </span>
      </div>
      {playing && (
        <div className="flex items-end gap-0.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-1 rounded-full bg-coral"
              style={{
                height: "14px",
                animation: `eq 0.9s ease-in-out ${i * 0.15}s infinite`,
              }}
            />
          ))}
        </div>
      )}
      <iframe
        ref={iframeRef}
        title="our song"
        src={`https://www.youtube.com/embed/${YOUTUBE_ID}?enablejsapi=1&autoplay=1&loop=1&playlist=${YOUTUBE_ID}&controls=0&modestbranding=1`}
        allow="autoplay; encrypted-media"
        className="absolute h-0 w-0 opacity-0"
      />
      <style>{`
        @keyframes eq {
          0%,100% { height: 6px; }
          50% { height: 18px; }
        }
      `}</style>
    </div>
  );
}
