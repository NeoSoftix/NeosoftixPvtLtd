"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { serifAccent } from "@/lib/fonts";
import { ArrowUpRightIcon } from "./icons";

const BRAND = "NeoSoftix";

const headingLines = [
  [{ text: "Turning Concepts Into" }],
  [
    { text: "Impactful", accent: true },
    { text: " Digital Experiences" },
  ],
];

const ease = [0.22, 1, 0.36, 1] as const;

function Loader({ progress }: { progress: number }) {
  return (
    <motion.div
      key="hero-loader"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050b16]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease }}
    >
      <motion.div
        className="relative flex aspect-square w-[min(72vw,440px)] items-center justify-center"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 4, opacity: 0 }}
        transition={{ duration: 0.9, ease }}
      >
        <Image
          src="/hero/sphere.webp"
          alt=""
          fill
          preload
          sizes="440px"
          className="object-contain"
        />
        <span className="relative flex font-sans text-4xl font-medium normal-case tracking-tight text-white sm:text-5xl">
          {BRAND.split("").map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.2 + i * 0.16, duration: 0.6, ease }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      </motion.div>

      <span className="absolute bottom-[12vh] left-1/2 -translate-x-1/2 text-sm font-medium tabular-nums tracking-widest text-blue-200/80">
        {progress}%
      </span>
    </motion.div>
  );
}

function SwirlLayer({
  spin,
  className,
  animateExtra,
  duration,
}: {
  spin: 1 | -1;
  className?: string;
  animateExtra?: Record<string, number[]>;
  duration: number;
}) {
  return (
    <motion.div
      className={`absolute inset-0 ${className ?? ""}`}
      animate={{ rotate: spin * 360, ...animateExtra }}
      transition={{
        rotate: { duration, repeat: Infinity, ease: "linear" },
        default: { duration: duration / 3, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      <Image
        src="/hero/swirl.webp"
        alt=""
        fill
        preload
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="object-contain"
      />
    </motion.div>
  );
}

function Swirl({ ready, reduceMotion }: { ready: boolean; reduceMotion: boolean }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 40, damping: 20 });
  const y = useSpring(my, { stiffness: 40, damping: 20 });

  // Swirl drifts upward as the page scrolls down
  const { scrollY } = useScroll();
  const scrollShift = useTransform(scrollY, [0, 900], [0, reduceMotion ? 0 : -380]);

  useEffect(() => {
    if (reduceMotion) return;
    const onMove = (e: MouseEvent) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 40);
      my.set((e.clientY / window.innerHeight - 0.5) * 40);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduceMotion]);

  return (
    <motion.div
      style={{ y: scrollShift }}
      className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.35] sm:opacity-[0.45] lg:opacity-[0.55]"
    >
      <motion.div
        style={{
          x,
          y,
          maskImage: "radial-gradient(circle, #000 42%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle, #000 42%, transparent 70%)",
        }}
        className="relative aspect-square w-[115%] max-w-[640px] sm:w-[85%] lg:w-[70%] lg:max-w-[920px]"
        initial={{ scale: 2.2, opacity: 0, filter: "blur(30px)" }}
        animate={ready ? { scale: 1, opacity: 1, filter: "blur(0px)" } : undefined}
        transition={{ duration: 1.8, ease }}
      >
        {/* Glow behind the swirl */}
        <motion.div
          className="absolute inset-[12%] rounded-full bg-blue-600/20 blur-[110px]"
          animate={reduceMotion ? undefined : { opacity: [0.6, 1, 0.6], scale: [0.95, 1.08, 0.95] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {reduceMotion ? (
          <SwirlLayer spin={1} duration={1e9} />
        ) : (
          <>
            {/* Soft, slow counter-rotating haze gives the morphing feel */}
            <SwirlLayer
              spin={-1}
              duration={70}
              className="blur-[14px]"
              animateExtra={{ scale: [1.18, 1.3, 1.18], opacity: [0.35, 0.6, 0.35] }}
            />
            {/* Main swirl */}
            <SwirlLayer
              spin={1}
              duration={45}
              animateExtra={{ scale: [1, 1.08, 1], opacity: [0.95, 0.75, 0.95] }}
            />
            {/* Faster inner vortex */}
            <SwirlLayer
              spin={1}
              duration={22}
              className="blur-[4px]"
              animateExtra={{ scale: [0.5, 0.58, 0.5], opacity: [0.25, 0.45, 0.25] }}
            />
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Loader runs on every page load; only skipped for reduced-motion users
    const skip = !!reduceMotion;
    const root = document.documentElement;
    if (!skip) root.style.overflow = "hidden";

    const controls = animate(0, 100, {
      duration: skip ? 0 : 2.6,
      ease: "easeInOut",
      onUpdate: (v) => setProgress(Math.round(v)),
      onComplete: () => {
        root.style.overflow = "";
        setReady(true);
      },
    });

    return () => {
      controls.stop();
      root.style.overflow = "";
    };
  }, [reduceMotion]);

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: ready ? { opacity: 1, y: 0 } : undefined,
    transition: { delay, duration: 0.8, ease },
  });

  return (
    <>
      <AnimatePresence>{!ready && <Loader progress={progress} />}</AnimatePresence>

      <section className="relative w-full overflow-hidden bg-[#050b16] pt-24 font-sans lg:pt-28">
        {/* Decorative curves around the frame */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden
        >
          <circle cx="260" cy="-40" r="330" stroke="rgba(59,130,246,0.14)" />
          <circle cx="1260" cy="980" r="360" stroke="rgba(59,130,246,0.14)" />
          <circle cx="-60" cy="620" r="260" stroke="rgba(59,130,246,0.1)" />
        </svg>

        <div className="relative mx-auto flex min-h-[calc(100svh-6rem)] w-full max-w-[1440px] lg:min-h-[calc(100svh-7rem)]">
          {/* Main area */}
          <div className="relative flex flex-1 flex-col justify-between gap-10 px-6 py-8 md:px-10 lg:px-16 lg:py-12">
            <Swirl ready={ready} reduceMotion={!!reduceMotion} />

            {/* Top-right tagline */}
            <motion.p
              {...reveal(0.5)}
              className="relative z-10 hidden self-end text-right text-xs leading-relaxed text-blue-100/60 sm:block"
            >
              Ideas To Impact,
              <br />
              Code That Scales:
              <br />
              <span className="text-blue-300">Your Digital Growth Partner.</span>
            </motion.p>

            {/* Headline block */}
            <div className="relative z-10 mx-auto max-w-6xl text-center">
              <motion.div {...reveal(0.2)} className="flex flex-wrap items-center justify-center gap-3">
                <Button href="#contact" variant="primary" size="sm">
                  Get Started
                </Button>
                <Button href="#services" variant="outline" size="sm">
                  Explore
                </Button>
              </motion.div>

              <h1 className="mt-7 text-[40px] font-semibold leading-[1.02] tracking-[-0.035em] text-white drop-shadow-[0_4px_30px_rgba(5,11,22,0.6)] sm:text-6xl lg:text-7xl xl:text-[78px]">
                {headingLines.map((line, i) => (
                  <span key={i} className="block overflow-hidden pb-2">
                    <motion.span
                      className="block"
                      initial={{ y: "110%" }}
                      animate={ready ? { y: "0%" } : undefined}
                      transition={{ delay: 0.3 + i * 0.16, duration: 0.9, ease }}
                    >
                      {line.map((part) =>
                        part.accent ? (
                          <span
                            key={part.text}
                            className={`${serifAccent.className} bg-gradient-to-r from-sky-300 via-blue-400 to-blue-500 bg-clip-text pr-2 text-[1.12em] font-normal tracking-normal text-transparent`}
                          >
                            {part.text}
                          </span>
                        ) : (
                          <span
                            key={part.text}
                            className="bg-gradient-to-b from-white to-blue-100/80 bg-clip-text text-transparent"
                          >
                            {part.text}
                          </span>
                        ),
                      )}
                    </motion.span>
                  </span>
                ))}
              </h1>

              <motion.p
                {...reveal(0.75)}
                className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300/90 sm:text-lg"
              >
                Empowering global brands with custom software, mobile apps, and
                high-performance digital marketing solutions.
              </motion.p>
            </div>

            {/* Bottom row */}
            <div className="relative z-10 flex justify-center">
              <motion.div {...reveal(0.9)} className="flex flex-col items-center gap-4">
                <div className="flex gap-3">
                  <Link
                    href="/work"
                    className="group flex w-40 flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl transition-colors hover:border-blue-500/50"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-medium leading-snug text-blue-50">
                        Explore
                        <br />
                        Our Work
                      </span>
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white transition-transform group-hover:rotate-[-45deg]">
                        <ArrowUpRightIcon size={12} />
                      </span>
                    </div>
                    <div className="mt-4 flex h-12 items-end gap-2">
                      {[0.55, 0.9, 0.4, 0.75, 0.6].map((h, i) => (
                        <motion.span
                          key={i}
                          className="w-1.5 origin-bottom rounded-full bg-gradient-to-t from-blue-700 to-sky-300"
                          style={{ height: "100%" }}
                          initial={{ scaleY: 0.2 }}
                          animate={
                            ready && !reduceMotion
                              ? { scaleY: [h, h * 0.45, h] }
                              : { scaleY: h }
                          }
                          transition={{ duration: 2.4, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                        />
                      ))}
                    </div>
                  </Link>

                  <a
                    href="#services"
                    aria-label="Explore our services"
                    className="group relative hidden h-[116px] w-32 overflow-hidden rounded-3xl border border-white/10 sm:block"
                  >
                    <Image
                      src="/hero/2.webp"
                      alt=""
                      fill
                      sizes="128px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="absolute bottom-2.5 right-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#050b16]/80 text-white">
                      <ArrowUpRightIcon size={12} />
                    </span>
                  </a>
                </div>

                <a
                  href="#contact"
                  className="inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-1.5 pr-4 text-xs font-medium text-blue-50 backdrop-blur-xl transition-colors hover:border-blue-500/50"
                >
                  <span className="relative h-7 w-7 overflow-hidden rounded-full">
                    <Image src="/hero/sphere.webp" alt="" fill sizes="28px" className="object-cover" />
                  </span>
                  Book A Free Consultation
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
                </a>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
