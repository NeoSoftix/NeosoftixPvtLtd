import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCard, { BlogCover, TiltCard } from "@/components/BlogCard";
import ReadingProgress from "@/components/ReadingProgress";
import Contact from "@/components/Contact";
import { blogPosts, formatPostDate, getPost } from "@/data/blogPosts";
import { playfair } from "@/lib/fonts";

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return { title: "Article Not Found — NeoSoftix" };
  }
  return {
    title: `${post.title} — NeoSoftix Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const related = [
    ...blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category),
    ...blogPosts.filter((p) => p.slug !== post.slug && p.category !== post.category),
  ].slice(0, 3);

  return (
    <main className="min-h-screen bg-[#050b16]">
      <ReadingProgress />

      {/* Article hero */}
      <section className="relative w-full overflow-hidden bg-[#050b16] pb-16 pt-32 text-white lg:pt-36">
        <div className="pointer-events-none absolute left-1/4 top-1/3 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[160px]" />
        <div className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] rounded-full bg-sky-400/10 blur-[130px]" />

        <div className="relative mx-auto grid w-full max-w-[1300px] items-center gap-12 px-6 sm:px-10 lg:grid-cols-[1.1fr_1fr] lg:px-16">
          <div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 transition-colors hover:text-white"
            >
              <span aria-hidden>←</span> Back to Blog
            </Link>
            <span className="mt-6 block w-fit rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-sky-400">
              {post.category}
            </span>
            <h1
              className={`${playfair.className} mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl`}
            >
              {post.title}
            </h1>
            <p className="mt-5 max-w-xl text-base normal-case leading-relaxed text-slate-300 sm:text-lg">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span className="font-semibold text-white">NeoSoftix Team</span>
              <span className="h-1 w-1 rounded-full bg-slate-500" />
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              <span className="h-1 w-1 rounded-full bg-slate-500" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <TiltCard max={10} className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-[0_40px_80px_-30px_rgba(37,99,235,0.6)]">
            <BlogCover post={post} />
          </TiltCard>
        </div>
      </section>

      {/* Article body */}
      <section className="relative w-full bg-[#f8fafc] py-14 lg:py-20">
        <article className="mx-auto w-full max-w-3xl px-6 sm:px-10">
          {post.sections.map((section, i) => (
            <div key={section.heading} className={i > 0 ? "mt-12" : ""}>
              <h2 className={`${playfair.className} flex items-baseline gap-4 text-2xl font-bold text-[#0f1729] sm:text-3xl`}>
                <span className="text-base font-bold text-blue-600">{String(i + 1).padStart(2, "0")}</span>
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="mt-4 text-base normal-case leading-8 text-slate-700 sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          <div className="mt-14 rounded-3xl bg-gradient-to-br from-[#050b16] via-[#0b1a3a] to-blue-900 p-8 text-white shadow-[0_30px_60px_-25px_rgba(37,99,235,0.6)] sm:p-10">
            <h3 className={`${playfair.className} text-2xl font-bold sm:text-3xl`}>Need help putting this into practice?</h3>
            <p className="mt-3 normal-case text-slate-300">
              Our team builds websites, apps and growth campaigns for businesses like yours. Let&apos;s talk about your
              next project.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#050b16] transition-colors hover:bg-blue-600 hover:text-white"
            >
              Talk to Our Team <span aria-hidden>→</span>
            </Link>
          </div>
        </article>
      </section>

      {/* Related posts */}
      <section className="relative w-full bg-[#f8fafc] pb-16 lg:pb-24">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16 xl:px-20">
          <h2 className={`${playfair.className} mb-8 text-center text-3xl font-bold text-[#0f1729] sm:text-4xl`}>
            Keep <span className="italic text-blue-600">Reading</span>
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
