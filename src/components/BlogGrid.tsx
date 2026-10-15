"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlogCard from "./BlogCard";
import { BLOG_CATEGORIES, blogPosts } from "@/data/blogPosts";

export default function BlogGrid() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const featured = blogPosts.find((post) => post.featured);
  const showFeatured = activeTab === "All" && featured;
  const posts = blogPosts.filter(
    (post) => (activeTab === "All" ? post !== featured : post.category === activeTab)
  );

  return (
    <section className="relative w-full overflow-x-clip bg-[#f8fafc] py-12 text-[#0f1729] lg:py-16">
      <div className="pointer-events-none absolute left-1/4 top-10 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 h-[500px] w-[500px] rounded-full bg-sky-100/50 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {BLOG_CATEGORIES.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-full border px-5 py-2.5 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                  isActive
                    ? "scale-[1.03] border-black bg-[#050b16] text-white shadow-md"
                    : "border-slate-300/60 bg-slate-200/70 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {showFeatured && (
            <motion.div
              key="featured"
              initial={{ opacity: 0, y: 30, rotateX: 12 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10 [perspective:1200px]"
            >
              <BlogCard post={featured} featured />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div layout className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 40, rotateX: 25, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformPerspective: 1200 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {posts.length === 0 && !showFeatured && (
          <p className="py-16 text-center text-slate-500">New articles in this topic are coming soon.</p>
        )}
      </div>
    </section>
  );
}
