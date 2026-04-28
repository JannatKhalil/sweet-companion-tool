import { createFileRoute } from "@tanstack/react-router";
import { FloatingBalloons } from "@/components/FloatingBalloons";
import { Sparkles } from "@/components/Sparkles";
import { CountdownTogether } from "@/components/CountdownTogether";
import { SurpriseModal } from "@/components/SurpriseModal";
import { HeartRevealGame } from "@/components/HeartRevealGame";
import { PasswordGate } from "@/components/PasswordGate";
import { MusicPlayer } from "@/components/MusicPlayer";
import bouquetImg from "@/assets/bouquet.png";
import balloonsImg from "@/assets/balloons.png";
import peonyImg from "@/assets/peony.png";
import bowImg from "@/assets/bow.png";
import kittyBatmanImg from "@/assets/kitty-batman.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const TIMELINE = [
  {
    date: "the beginning",
    title: "you walked into my life",
    text: "you suddenly came into my life and completed it. everything in my world rearranged itself around you — quietly, completely. 🌷✨",
    color: "coral",
  },
  {
    date: "my everything",
    title: "you became my world",
    text: "now you are my everything, my whole world. without you, i am nothing — i can't even imagine my life without you. 💗🧸",
    color: "burgundy",
  },
  {
    date: "only you",
    title: "no one could ever take your place",
    text: "koi bhi kabhi bhi meri zindagi mein aap ki jagah nahi le sakta. jitna khush main aap ke saath rehti hoon, kabhi kisi ke saath nahi rahi. 🥺💐",
    color: "lavender",
  },
  {
    date: "first & forever",
    title: "my first and last love",
    text: "aap meri pehli aur aakhri muhabbat ho — aur hamesha rahoge. agar saari duniya bhi aap ke khilaf ho jaye, tab bhi main aap ke saath hoongi. 🤍🕊️",
    color: "coral",
  },
  {
    date: "deep in my heart",
    title: "you live in the depth of my heart",
    text: "meri pyari guriya, apna bohot khayal rakha karo aur khush raha karo. apne baare mein kabhi bhi fazool mat socha karo. 🌸💕",
    color: "burgundy",
  },
  {
    date: "always here",
    title: "i'm always here for you",
    text: "jab bhi lage aap ka koi nahi hai — aap mere paas aa jana. main hamesha aap ke liye free hoon. i love you so much, itna jitna main khud se bhi nahi. 💌🤍✨",
    color: "lavender",
  },
  {
    date: "my one promise",
    title: "kabhi mujhe chhor ke na jana",
    text: "agar kahin meri ghalti bhi ho, to samjha dena — but please kabhi mujhe chhor ke na jana. aur bas aise hi hamesha mujhe pyar karna. 🤍🎀",
    color: "coral",
  },
];

function Index() {
  return (
    <PasswordGate>
      <main className="relative min-h-screen overflow-hidden">
        <FloatingBalloons />
        <MusicPlayer />

        {/* HERO — clean, no bouquet */}
        <section className="relative z-10 px-6 pb-16 pt-20 sm:pt-28">
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

            {/* Cute kitty + batman duo */}
            <div className="relative mx-auto mt-12 flex justify-center animate-fade-up" style={{ animationDelay: "0.45s" }}>
              <img
                src={kittyBatmanImg}
                alt="A cute Hello Kitty and Batman standing together"
                className="animate-float-gentle h-64 w-auto drop-shadow-2xl sm:h-80"
                width={1024}
                height={1024}
              />
              <img
                src={balloonsImg}
                alt=""
                className="animate-sway absolute -right-2 top-0 h-32 w-auto opacity-90 sm:-right-10 sm:h-44"
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
              <h2 className="mt-2 font-display text-6xl font-bold italic text-burgundy drop-shadow-sm sm:text-7xl">
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
                    <h3 className={`mt-1 font-display text-4xl font-bold italic sm:text-5xl ${titleColor}`}>{c.title}</h3>
                    <p className="mt-3 text-lg leading-relaxed text-foreground/80">{c.text}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* LOVE GAME */}
        <section className="relative z-10 px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <img src={peonyImg} alt="" className="mx-auto h-24 w-24 animate-float-gentle" loading="lazy" width={1024} height={1024} />
              <h2 className="mt-4 font-display text-5xl font-bold italic text-burgundy sm:text-6xl">
                a little <em className="text-coral">love game</em>
              </h2>
              <p className="mt-3 font-script text-2xl text-lilac">just for you, my baby 🎀</p>
            </div>

            <HeartRevealGame />
          </div>
        </section>

        {/* LOVE LETTER — prettier */}
        <section className="relative z-10 px-6 py-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <p className="font-script text-2xl text-lilac">a letter, from me to you 💌</p>
              <h2 className="mt-2 font-display text-5xl font-bold italic text-burgundy sm:text-6xl">
                read me <em className="text-coral">slowly</em> 🤍
              </h2>
              <div className="mt-3 flex justify-center gap-2 text-xl">
                <span className="animate-heart-beat">🌸</span>
                <span className="animate-heart-beat" style={{ animationDelay: "0.2s" }}>💗</span>
                <span className="animate-heart-beat" style={{ animationDelay: "0.4s" }}>🎀</span>
              </div>
            </div>

            <div className="relative">
              {/* Decorative wax-seal style hearts */}
              <div className="absolute -left-3 -top-3 z-10 grid h-16 w-16 place-items-center rounded-full bg-gradient-burgundy text-2xl text-primary-foreground shadow-soft rotate-[-12deg] sm:-left-6 sm:-top-6 sm:h-20 sm:w-20 sm:text-3xl">
                💌
              </div>
              <div className="absolute -right-3 -bottom-3 z-10 grid h-14 w-14 place-items-center rounded-full bg-gradient-coral text-2xl text-primary-foreground shadow-soft rotate-[12deg] sm:-right-6 sm:-bottom-6 sm:h-16 sm:w-16">
                🌷
              </div>
              <img
                src={bowImg}
                alt=""
                className="absolute -top-12 left-1/2 z-10 w-32 -translate-x-1/2 drop-shadow-lg animate-float-gentle"
                loading="lazy"
                width={1024}
                height={1024}
              />

              <article className="handwritten-card relative rounded-[2.5rem] border border-coral/20 p-10 shadow-soft sm:p-14">
                <p className="font-script text-5xl text-coral sm:text-6xl">my love, 💗</p>
                <div className="mt-6 space-y-5 font-display text-xl italic leading-[1.95] text-foreground/85 sm:text-2xl">
                  <p>
                    🌸 two years ago, i had no idea that a single hello could rewrite every quiet
                    corner of my heart. and yet, here we are. ✨
                  </p>
                  <p>
                    🎀 i want to make you feel the most special person in the world, because
                    for me you are my babygurl, cutue pyara bcha. 🥺💕
                  </p>
                  <p>
                    🤍 thank you for choosing me, again and again — in the small ways, in the big
                    ways, in the in-between ways i don’t always notice but always feel. 🌷
                  </p>
                  <p>
                    💐 i love you. today, tomorrow, and for every coral sunset to come. 🌅💗
                  </p>
                </div>
                <p className="mt-10 text-right font-script text-4xl text-burgundy">
                  always yours, <span className="animate-heart-beat inline-block text-coral">♡</span>
                </p>

                {/* tiny scattered hearts */}
                <span className="absolute left-6 bottom-6 text-lg text-coral/50">♡</span>
                <span className="absolute right-12 top-10 text-sm text-burgundy/40">♡</span>
                <span className="absolute left-12 top-20 text-base text-lilac/50">♡</span>
              </article>
            </div>
          </div>
        </section>

        {/* SURPRISE GIFT + HAPPY TWO YEARS combined */}
        <section className="relative z-10 px-6 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Sparkles count={18} seed={7} />

            {/* Bouquet moved here, presented as the gift */}
            <div className="relative mx-auto mb-8 flex justify-center">
              <img
                src={bouquetImg}
                alt="A coral bouquet of peonies and roses tied with a satin bow — your gift"
                className="animate-float-gentle h-64 w-auto drop-shadow-2xl sm:h-80"
                width={1024}
                height={1024}
                loading="lazy"
              />
              <img
                src={bowImg}
                alt=""
                className="absolute -top-6 left-1/2 w-24 -translate-x-1/2 drop-shadow-lg sm:w-32"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>

            <p className="font-script text-2xl text-lilac">a little gift, just for you 🎁</p>
            <h2 className="mt-2 font-display text-5xl font-bold italic text-burgundy sm:text-6xl">
              one more <em className="text-coral">surprise</em>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base italic text-muted-foreground sm:text-lg">
              a tiny bouquet, a tiny note — wrapped in everything i feel for you. 💐💗
            </p>

            <div className="mt-10">
              <SurpriseModal />
            </div>

            {/* Merged Happy Two Years celebration */}
            <div className="mt-20 flex flex-col items-center gap-4 border-t border-coral/20 pt-12">
              <div className="flex gap-2 text-3xl">
                <span className="animate-heart-beat text-coral">♡</span>
                <span className="animate-heart-beat text-burgundy" style={{ animationDelay: "0.2s" }}>♡</span>
                <span className="animate-heart-beat text-lilac" style={{ animationDelay: "0.4s" }}>♡</span>
              </div>
              <p className="font-script text-5xl text-burgundy sm:text-6xl">
                happy two years, my love 🎀
              </p>
              <p className="font-display text-lg italic text-foreground/70 sm:text-xl">
                here’s to forever, and a little bit longer. 🤍✨
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                made with every piece of my heart
              </p>
            </div>
          </div>
        </section>
      </main>
    </PasswordGate>
  );
}
