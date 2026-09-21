import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export const metadata = {
  title: "Thank You — NeoSoftix",
  description: "Thanks for reaching out to NeoSoftix. We've received your message and will get back to you soon.",
  alternates: {
    canonical: "/thank-you",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#050b16] flex flex-col">
      <Header />
      <section className="relative flex-1 flex items-center justify-center overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#050b16] via-[#081329] to-[#040914]" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[160px]" />

        <div className="relative mx-auto w-full max-w-2xl px-6 sm:px-10 text-center z-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-sky-400/30 bg-sky-500/10 text-sky-400">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Thank You!
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Your message has been sent successfully. Our team will get back to you within 1 business day.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <Button href="/" variant="accent" size="lg" showArrow>
              Back to Home
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
