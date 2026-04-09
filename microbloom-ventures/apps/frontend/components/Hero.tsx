import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7faf7]">
      {/* Premium layered background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-8rem] top-[-8rem] h-[28rem] w-[28rem] rounded-full bg-emerald-300/25 blur-3xl" />
        <div className="absolute right-[-10rem] top-[6rem] h-[32rem] w-[32rem] rounded-full bg-lime-200/25 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-green-100/40 blur-3xl" />

        {/* subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:56px_56px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2 md:py-32">
        {/* LEFT */}
        <div className="relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Microgreens · Training · Consultancy
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-black leading-[0.95] tracking-[-0.04em] text-slate-950 md:text-7xl">
            Build the
            <span className="block">Future of</span>
            <span className="block bg-gradient-to-r from-green-800 via-emerald-600 to-lime-500 bg-clip-text text-transparent">
              Smart Farming
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
            Premium consultancy, practical training, and nutrition-led agribusiness
            systems for the next generation of microgreens entrepreneurs in India.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/consultancy"
              className="group inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-sm font-semibold text-white shadow-[0_14px_40px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.22)]"
            >
              Get Consultancy
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/courses"
              className="group inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-8 py-4 text-sm font-semibold text-slate-800 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-white hover:shadow-lg"
            >
              Join a Course
            </Link>
          </div>

          {/* Micro trust line */}
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-500">
            <span>Practical programs</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>Startup guidance</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span>Nutrition-focused solutions</span>
          </div>
        </div>

        {/* RIGHT VISUAL PANEL */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-5 shadow-[0_25px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl">
            {/* big card */}
            <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#0f172a] via-[#16351d] to-[#1f7a3d] p-8 text-white md:p-10">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-lime-300/20 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-emerald-300/10 blur-2xl" />

              <p className="text-sm font-medium uppercase tracking-[0.25em] text-green-100/80">
                Sustainable Agribusiness
              </p>

              <h2 className="mt-6 max-w-sm text-3xl font-bold leading-tight md:text-4xl">
                Learn. Launch. Scale.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-green-50/80 md:text-base">
                Build a profitable and modern microgreens business with guidance
                designed for real-world execution.
              </p>

              {/* mini cards */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                  <p className="text-2xl font-bold">01</p>
                  <p className="mt-2 text-sm text-green-50/80">Expert-led training</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                  <p className="text-2xl font-bold">02</p>
                  <p className="mt-2 text-sm text-green-50/80">Business consultancy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating stat */}
          <div className="absolute -bottom-6 -left-6 hidden rounded-[1.5rem] border border-white/70 bg-white/90 p-5 shadow-2xl backdrop-blur md:block">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Growth Focused
            </p>
            <p className="mt-2 text-3xl font-black tracking-tight text-slate-950">
              Startup Ready
            </p>
            <p className="mt-1 text-sm text-slate-600">
              From learning to launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}