import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export const metadata = {
  title: "Page Not Found — NeoSoftix",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050b16] flex flex-col">
      <Header />
      <section className="relative flex-1 flex items-center justify-center overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#050b16] via-[#081329] to-[#040914]" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[160px]" />

        <div className="relative mx-auto w-full max-w-2xl px-6 sm:px-10 text-center z-10">
          <span className="block text-7xl sm:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
            404
          </span>
          <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            The page you're looking for doesn't exist or may have been moved. Let's get you back on track.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <Button href="/" variant="accent" size="lg" showArrow>
              Back to Home
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
