import { useState } from "react";
import bowImg from "@/assets/bow.png";
import bouquetImg from "@/assets/bouquet.png";

export function SurpriseModal() {
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);

  return (
    <>
      <button
        onClick={() => { setOpen(true); setOpened(true); }}
        className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-coral px-8 py-4 font-script text-2xl text-primary-foreground shadow-soft transition-transform hover:scale-105 active:scale-95"
      >
        <span>{opened ? "open me again" : "tap to open your gift"}</span>
        <span className="text-2xl animate-heart-beat">♡</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm animate-fade-up"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-lg overflow-visible rounded-[2rem] bg-card px-8 pb-8 pt-6 text-center shadow-soft sm:px-12 sm:pb-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouquet inside the card, fully visible */}
            <div className="relative mx-auto mb-2 flex items-end justify-center">
              <img
                src={bouquetImg}
                alt="A coral bouquet tied with a satin bow"
                className="h-56 w-auto animate-float-gentle drop-shadow-2xl sm:h-64"
                width={1024}
                height={1024}
              />
              <img
                src={bowImg}
                alt=""
                className="absolute -top-2 left-1/2 w-16 -translate-x-1/2 drop-shadow-lg sm:w-20"
              />
            </div>
            <div>
              <p className="font-script text-4xl text-coral sm:text-5xl">my dearest love,</p>
              <p className="mt-6 font-display text-lg italic leading-relaxed text-foreground/80 sm:text-xl">
                If I had to choose between loving you and breathing,<br />
                I would use my last breath to say <em>“I love you.”</em>
              </p>
              <p className="mt-4 font-display text-lg italic leading-relaxed text-foreground/80 sm:text-xl">
                i am always here for you nd im super proud of u mri jan muwah my baby ilysmm
              </p>
              <p dir="rtl" lang="ar" className="mt-4 font-display text-xl leading-relaxed text-burgundy sm:text-2xl">
                أحبك أكثر مما يستطيع أي شخص فعله🎀💐✨💗
              </p>
              <div className="mt-6 flex justify-center gap-2 text-2xl">
                <span className="animate-heart-beat" style={{ animationDelay: "0s" }}>♡</span>
                <span className="animate-heart-beat" style={{ animationDelay: "0.2s" }}>♡</span>
                <span className="animate-heart-beat" style={{ animationDelay: "0.4s" }}>♡</span>
              </div>
              <p className="mt-6 font-script text-2xl text-rose-gold" style={{ color: "var(--rose-gold)" }}>
                forever yours
              </p>
              <button
                onClick={() => setOpen(false)}
                className="mt-8 rounded-full border border-coral/30 px-6 py-2 text-sm uppercase tracking-widest text-coral transition-colors hover:bg-secondary"
              >
                close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
