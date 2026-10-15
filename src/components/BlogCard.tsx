"use client";

import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { type BlogPost, formatPostDate } from "@/data/blogPosts";
import { ArrowRightIcon } from "./icons";

/** Card that tilts toward the cursor in 3D, with a moving glare highlight. */
export function TiltCard({ children, className = "", max = 12 }: { children: ReactNode; className?: string; max?: number }) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 200, damping: 18 };
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), spring);
  const glareX = useTransform(px, (v) => `${v * 100}%`);
  const glareY = useTransform(py, (v) => `${v * 100}%`);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.22), transparent 55%)`;

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div className="[perspective:1200px]">
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`group relative ${className}`}
      >
        {children}
        <motion.div
          aria-hidden
          style={{ background: glare }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </motion.div>
    </div>
  );
}

/** Gradient cover with layered, depth-shifted shapes and the post icon floating above. */
export function BlogCover({ post, large = false }: { post: BlogPost; large?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${post.cover} ${large ? "aspect-[16/10] lg:aspect-auto lg:h-full" : "aspect-[16/10]"}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <motion.span
        className="absolute -right-6 -top-6 h-28 w-28 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm"
        animate={{ y: [0, 10, 0], rotate: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute bottom-6 left-6 h-12 w-12 rotate-12 rounded-xl border border-white/30 bg-white/15 backdrop-blur-sm"
        animate={{ y: [0, -8, 0], rotate: [12, -8, 12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "translateZ(60px)" }}>
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className={`flex items-center justify-center rounded-3xl border border-white/40 bg-white/20 text-white shadow-[0_25px_50px_rgba(0,0,0,0.3)] backdrop-blur-md ${
            large ? "h-28 w-28 sm:h-32 sm:w-32" : "h-20 w-20"
          }`}
        >
          <svg width={large ? 52 : 36} height={large ? 52 : 36} viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d={post.iconPath} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>

      <span
        className="absolute left-4 top-4 rounded-full bg-black/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md"
        style={{ transform: "translateZ(40px)" }}
      >
        {post.category}
      </span>
    </div>
  );
}

function PostMeta({ post }: { post: BlogPost }) {
  return (
    <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
      <span>{formatPostDate(post.date)}</span>
      <span className="h-1 w-1 rounded-full bg-slate-300" />
      <span>{post.readTime}</span>
    </div>
  );
}

export default function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <TiltCard
      max={featured ? 6 : 10}
      className="h-full rounded-3xl border border-slate-200/80 bg-white shadow-[0_20px_50px_-20px_rgba(15,23,42,0.18)] transition-shadow duration-300 hover:shadow-[0_35px_70px_-25px_rgba(37,99,235,0.35)]"
    >
      <Link
        href={`/blog/${post.slug}`}
        className={`flex h-full p-4 sm:p-5 ${featured ? "flex-col gap-6 lg:grid lg:grid-cols-[1.1fr_1fr] lg:items-stretch lg:gap-10" : "flex-col gap-5"}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <BlogCover post={post} large={featured} />

        <div
          className={`flex flex-1 flex-col ${featured ? "justify-center lg:py-6 lg:pr-6" : ""}`}
          style={{ transform: "translateZ(30px)" }}
        >
          {featured && (
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-600">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600" />
              Featured
            </span>
          )}
          <PostMeta post={post} />
          <h3
            className={`mt-3 font-bold leading-snug text-[#0f1729] transition-colors group-hover:text-blue-600 ${
              featured ? "text-2xl sm:text-3xl lg:text-4xl" : "text-lg sm:text-xl"
            }`}
          >
            {post.title}
          </h3>
          <p className={`mt-3 normal-case leading-relaxed text-slate-600 ${featured ? "text-base sm:text-lg" : "text-sm sm:text-base"}`}>
            {post.excerpt}
          </p>
          <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-blue-600">
            Read Article
            <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </TiltCard>
  );
}
