import Hero from "@/components/Hero";
import ProductsPreview from "@/components/ProductsPreview";
import BlogPreview from "@/components/BlogPreview";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Link from "next/link";

const stats = [
  { value: "20+", label: "Projects Delivered" },
  { value: "10+", label: "Industry Solutions" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support & Guidance" },
];

const whyChooseUs = [
  {
    title: "Business-first thinking",
    desc: "Every feature, workflow, and decision is aligned with real business goals instead of just technical output.",
  },
  {
    title: "Modern technology stack",
    desc: "We build with scalable, maintainable technologies that support long-term product quality and growth.",
  },
  {
    title: "Fast execution",
    desc: "From idea to deployment, we focus on shipping efficiently without sacrificing clarity, quality, or performance.",
  },
  {
    title: "Long-term support",
    desc: "We stay involved beyond launch to help you improve, adapt, and scale with confidence.",
  },
];

export default function Page() {
  return (
    <main className="relative overflow-hidden bg-white text-slate-900">
      {/* =========================
          GLOBAL BACKGROUND
      ========================== */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-240px] h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-emerald-200/30 blur-3xl" />
        <div className="absolute left-[-140px] top-[20%] h-[320px] w-[320px] rounded-full bg-green-100/40 blur-3xl" />
        <div className="absolute bottom-[12%] right-[-140px] h-[340px] w-[340px] rounded-full bg-lime-100/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.04),transparent_35%)]" />
      </div>

      {/* HERO */}
      <section className="relative pt-0">
        <div className="mx-auto max-w-7xl px-6 pb-20 md:px-8 md:pb-24 lg:px-12">
          <Hero />
        </div>
      </section>

      {/* STATS */}
      <section className="relative border-y border-slate-200/80 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-10 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-[0_10px_40px_rgba(2,6,23,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(16,185,129,0.10)]"
              >
                <p className="text-3xl font-bold tracking-tight md:text-4xl">
                  {item.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="relative py-24 md:py-28">
        <div className="absolute right-10 top-16 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700">
                Featured Products
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                Built to solve real business needs
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg">
                Explore our featured solutions and products designed to improve efficiency, growth, and digital performance.
              </p>
            </div>

            <div>
              <Link
                href="/products"
                className="inline-flex items-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-emerald-600"
              >
                View all products
              </Link>
            </div>
          </div>

          <ProductsPreview />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(132,204,22,0.12),transparent_30%)]" />
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm font-medium text-emerald-300">
                Why Choose Us
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                We don’t just build products — we build outcomes
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 md:text-lg">
                Our process combines strategy, engineering, and design to create scalable digital experiences that actually move businesses forward.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {whyChooseUs.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.07]"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="relative py-24 md:py-28">
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-green-100/40 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <BlogPreview />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-28">
        <div className="absolute inset-x-0 bottom-0 mx-auto h-72 max-w-4xl rounded-full bg-emerald-200/25 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 md:px-8 lg:px-12">
          <div className="overflow-hidden rounded-[2rem] border border-emerald-100/80 bg-gradient-to-br from-emerald-50 via-white to-lime-50 p-6 shadow-[0_20px_100px_rgba(16,185,129,0.10)] md:p-10">
            <CTA />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/10 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:px-12">
          <Footer />
        </div>
      </footer>
    </main>
  );
}