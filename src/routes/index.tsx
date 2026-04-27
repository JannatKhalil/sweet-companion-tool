import { createFileRoute } from "@tanstack/react-router";
import { FloatingBalloons } from "@/components/FloatingBalloons";
import { Sparkles } from "@/components/Sparkles";
import { CountdownTogether } from "@/components/CountdownTogether";
import { SurpriseModal } from "@/components/SurpriseModal";
import { PhotoGallery } from "@/components/PhotoGallery";
import bouquetImg from "@/assets/bouquet.png";
import balloonsImg from "@/assets/balloons.png";
import peonyImg from "@/assets/peony.png";
import bowImg from "@/assets/bow.png";
import lavenderImg from "@/assets/lavender.png";
import batmanImg from "@/assets/batman.png";
import kittyImg from "@/assets/kitty.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const TIMELINE = [
  { date: "the beginning", title: "the day our eyes met", text: "everything in my world rearranged itself around you. quietly, completely.", color: "coral" },
  { date: "first chapter", title: "our first “i love you”", text: "spoken in a whisper, as if the world might break the spell. it didn’t. it bloomed.", color: "burgundy" },
  { date: "in between", title: "a thousand little moments", text: "morning coffee, lazy sundays, the way you laugh at your own jokes. all of it, my favorite.", color: "lavender" },
  { date: "two years in", title: "today, with you", text: "still choosing you. always choosing you. happy two years, my love.", color: "coral" },
];

const REASONS = [
  "the way you say my name",
  "your hand finding mine in the dark",
  "the songs you send me at 2am",
  "how safe you make me feel",
  "your laugh — my favorite sound",
  "the future i can see in your eyes",
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <FloatingBalloons />

      {/* HERO */}
      <section className="relative z-10 px-6 pb-20 pt-16 sm:pt-24">
        <Sparkles count={20} seed={1} />
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-script text-2xl text-coral animate-fade-up sm:text-3xl">
            to the one who holds my heart,
          </p>
          <h1
            className="mt-6 font-display text-6xl font-medium leading-[1.05] tracking-tight text-foreground animate-fade-up sm:text-8xl md:text-9xl"
            style={{ animationDelay: "0.15s" }}
          >
            two years
            <br />
            <em className="font-display italic text-burgundy">of us</em>
          </h1>
          <p
            className="mx-auto mt-6 max-w-xl text-lg italic leading-relaxed text-muted-foreground animate-fade-up sm:text-xl"
            style={{ animationDelay: "0.3s" }}
          >
            a little keepsake, made with all the love i couldn’t fit into a card.
          </p>

          <div className="relative mx-auto mt-12 flex justify-center animate-fade-up" style={{ animationDelay: "0.45s" }}>
            <img
              src={bouquetImg}
              alt="A coral bouquet of peonies and roses tied with a satin bow"
              className="animate-float-gentle h-72 w-auto drop-shadow-2xl sm:h-96"
              width={1024}
              height={1024}
            />
            <img
              src={balloonsImg}
              alt=""
              className="animate-sway absolute -right-4 top-0 h-40 w-auto opacity-90 sm:-right-12 sm:h-56"
              width={1024}
              height={1024}
              loading="lazy"
            />
            <img
              src={lavenderImg}
              alt=""
              className="animate-float-gentle absolute -left-4 -top-4 h-28 w-auto opacity-90 sm:-left-16 sm:h-40"
              style={{ animationDelay: "1.5s" }}
              width={1024}
              height={1024}
              loading="lazy"
            />
            {/* Cute stickers */}
            <img
              src={batmanImg}
              alt="Cute Batman sticker"
              className="animate-float-gentle absolute -bottom-4 -left-2 h-24 w-auto drop-shadow-lg sm:-left-10 sm:h-32"
              style={{ animationDelay: "0.8s" }}
              width={1024}
              height={1024}
              loading="lazy"
            />
            <img
              src={kittyImg}
              alt="Cute Hello Kitty sticker"
              className="animate-float-gentle absolute -bottom-2 -right-2 h-24 w-auto drop-shadow-lg sm:-right-10 sm:h-32"
              style={{ animationDelay: "1.2s" }}
              width={1024}
              height={1024}
              loading="lazy"
            />
          </div>

          <div className="mt-12 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              we have been loving each other for
            </p>
            <CountdownTogether />
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <p className="font-script text-2xl text-lilac">our little story</p>
            <h2 className="mt-2 font-display text-5xl italic text-burgundy sm:text-6xl">
              chapters of us
            </h2>
          </div>

          <ol className="relative space-y-12 border-l-2 border-dashed border-coral/30 pl-8 sm:space-y-16 sm:pl-12">
            {TIMELINE.map((c, i) => {
              const dot =
                c.color === "burgundy"
                  ? "bg-gradient-burgundy"
                  : c.color === "lavender"
                  ? "bg-gradient-lavender"
                  : "bg-gradient-coral";
              const titleColor =
                c.color === "burgundy" ? "text-burgundy" : c.color === "lavender" ? "text-lilac" : "text-coral";
              return (
                <li key={i} className="relative animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <span
                    className={`absolute -left-[42px] top-2 grid h-7 w-7 place-items-center rounded-full ${dot} text-sm text-primary-foreground shadow-petal sm:-left-[50px] sm:h-8 sm:w-8`}
                  >
                    ♡
                  </span>
                  <p className="font-script text-xl" style={{ color: "var(--rose-gold)" }}>
                    {c.date}
                  </p>
                  <h3 className={`mt-1 font-display text-3xl italic sm:text-4xl ${titleColor}`}>{c.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-foreground/80">{c.text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <div className="flex items-center justify-center gap-3">
              <img src={kittyImg} alt="" className="h-12 w-12 animate-sway" loading="lazy" width={1024} height={1024} />
              <p className="font-script text-2xl text-lilac">our little gallery</p>
              <img src={batmanImg} alt="" className="h-12 w-12 animate-sway" style={{ animationDelay: "1s" }} loading="lazy" width={1024} height={1024} />
            </div>
            <h2 className="mt-2 font-display text-5xl italic text-burgundy sm:text-6xl">
              moments, <em className="text-coral">framed</em>
            </h2>
            <p className="mt-3 text-sm italic text-muted-foreground">
              (tap any polaroid to see it bigger 💕)
            </p>
          </div>
          <PhotoGallery />
        </div>
      </section>

      {/* REASONS GRID */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <img src={peonyImg} alt="" className="mx-auto h-24 w-24 animate-float-gentle" loading="lazy" width={1024} height={1024} />
            <h2 className="mt-4 font-display text-5xl italic text-burgundy sm:text-6xl">
              all the reasons <em className="text-coral">why</em>
            </h2>
            <p className="mt-3 font-script text-2xl text-lilac">(a list i could write forever)</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((r, i) => {
              const accent = i % 3 === 0 ? "bg-gradient-coral" : i % 3 === 1 ? "bg-gradient-burgundy" : "bg-gradient-lavender";
              return (
                <div
                  key={i}
                  className="group relative rounded-3xl border border-coral/15 bg-card/80 p-7 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-soft animate-fade-up"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div
                    className={`absolute -top-3 -right-3 grid h-10 w-10 place-items-center rounded-full ${accent} text-primary-foreground shadow-petal`}
                  >
                    <span className="font-display italic">{i + 1}</span>
                  </div>
                  <p className="font-display text-2xl italic leading-snug text-foreground/90">
                    “{r}”
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LOVE LETTER */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <p className="font-script text-2xl text-lilac">a letter, from me to you</p>
            <h2 className="mt-2 font-display text-5xl italic text-burgundy sm:text-6xl">
              read me slowly
            </h2>
          </div>

          <div className="relative">
            <img
              src={bowImg}
              alt=""
              className="absolute -top-10 left-1/2 z-10 w-28 -translate-x-1/2 drop-shadow-lg"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <img
              src={kittyImg}
              alt=""
              className="absolute -left-8 -bottom-6 z-10 h-20 w-auto rotate-[-10deg] drop-shadow-lg sm:-left-16 sm:h-28"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <img
              src={batmanImg}
              alt=""
              className="absolute -right-8 -top-4 z-10 h-20 w-auto rotate-[10deg] drop-shadow-lg sm:-right-16 sm:h-28"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <article className="handwritten-card relative rounded-[2.5rem] p-10 shadow-soft sm:p-14">
              <p className="font-script text-4xl text-coral sm:text-5xl">my love,</p>
              <div className="mt-6 space-y-5 font-display text-xl italic leading-[1.9] text-foreground/85 sm:text-2xl">
                <p>
                  two years ago, i had no idea that a single hello could rewrite every quiet
                  corner of my heart. and yet, here we are.
                </p>
                <p>
                  you are my softest morning and my loudest laugh. you are the reason rainy
                  days feel cozy and ordinary tuesdays feel sacred.
                </p>
                <p>
                  thank you for choosing me, again and again — in the small ways, in the big
                  ways, in the in-between ways i don’t always notice but always feel.
                </p>
                <p>
                  i love you. today, tomorrow, and for every coral sunset to come.
                </p>
              </div>
              <p className="mt-10 text-right font-script text-3xl text-burgundy">
                always yours, <span className="text-coral">♡</span>
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SURPRISE GIFT */}
      <section className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Sparkles count={14} seed={7} />
          <h2 className="font-display text-5xl italic text-burgundy sm:text-6xl">
            one more <em className="text-coral">surprise</em>
          </h2>
          <p className="mt-4 font-script text-2xl text-lilac">just for you</p>
          <div className="mt-10">
            <SurpriseModal />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 px-6 pb-16 pt-8 text-center">
        <div className="mx-auto flex max-w-md flex-col items-center gap-4">
          <span className="text-3xl animate-heart-beat text-coral">♡</span>
          <p className="font-script text-3xl text-burgundy">happy two years, my love</p>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            made with every piece of my heart
          </p>
        </div>
      </footer>
    </main>
  );
}
