import { useState } from "react";

// 💕 Replace these src values with your own photo imports/URLs!
// To add a photo: drop the image into src/assets/ then `import myPic from "@/assets/myPic.jpg";`
// and put { src: myPic, caption: "..." } in this list.
const PHOTOS: { src: string; caption: string; rotate: string }[] = [
  { src: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800&q=80", caption: "the day you stole my heart", rotate: "-rotate-3" },
  { src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80", caption: "our first little adventure", rotate: "rotate-2" },
  { src: "https://images.unsplash.com/photo-1525361938948-9a4b3a32d4f8?w=800&q=80", caption: "lazy sundays with you", rotate: "-rotate-2" },
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80", caption: "sunsets always remind me of us", rotate: "rotate-3" },
  { src: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=800&q=80", caption: "every laugh, my favorite", rotate: "-rotate-1" },
  { src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80", caption: "forever feels like us", rotate: "rotate-2" },
];

export function PhotoGallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8">
        {PHOTOS.map((p, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            className={`group relative ${p.rotate} transition-transform hover:rotate-0 hover:scale-105 focus:outline-none`}
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            {/* Polaroid */}
            <div className="relative bg-white p-3 pb-12 shadow-soft">
              {/* Tape */}
              <div
                className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 rotate-3 opacity-80"
                style={{ background: "oklch(0.85 0.07 305 / 0.7)" }}
              />
              <div className="aspect-square overflow-hidden bg-secondary">
                <img
                  src={p.src}
                  alt={p.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <p className="absolute bottom-3 left-0 right-0 px-3 text-center font-script text-lg text-burgundy">
                {p.caption}
              </p>
            </div>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 p-6 backdrop-blur-sm animate-fade-up"
          onClick={() => setOpen(null)}
        >
          <div className="relative max-h-[85vh] max-w-3xl bg-white p-4 pb-14 shadow-soft" onClick={(e) => e.stopPropagation()}>
            <img src={PHOTOS[open].src} alt={PHOTOS[open].caption} className="max-h-[70vh] w-auto object-contain" />
            <p className="absolute bottom-3 left-0 right-0 px-4 text-center font-script text-2xl text-burgundy">
              {PHOTOS[open].caption}
            </p>
            <button
              onClick={() => setOpen(null)}
              className="absolute -right-3 -top-3 grid h-9 w-9 place-items-center rounded-full bg-gradient-burgundy text-primary-foreground shadow-petal"
              aria-label="close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
