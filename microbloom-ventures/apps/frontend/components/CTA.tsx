import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* dramatic background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-8rem] top-[-8rem] h-[24rem] w-[24rem] rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute right-[-8rem] bottom-[-8rem] h-[24rem] w-[24rem] rounded-full bg-lime-300/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.18),transparent_40%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl md:p-16">
          <div className="grid items-center gap-12 md:grid-cols-[1.4fr_0.8fr]">
            {/* LEFT */}
            <div>
              <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-200">
                Build with confidence
              </div>

              <h2 className="mt-6 text-4xl font-black leading-tight tracking-[-0.03em] md:text-6xl">
                Ready to launch your
                <span className="block bg-gradient-to-r from-white via-emerald-200 to-lime-200 bg-clip-text text-transparent">
                  microgreens venture?
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                Get expert support, practical training, and a clear roadmap to
                build a modern, scalable, and profitable microgreens business.
              </p>
            </div>

            {/* RIGHT */}
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="space-y-4">
                <Link
                  href="/courses"
                  className="group flex w-full items-center justify-between rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <span>Join a Course</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

                <Link
                  href="/consultancy"
                  className="group flex w-full items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                >
                  <span>Talk to an Expert</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-400">
                Designed for founders, institutions, and aspiring agribusiness entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}