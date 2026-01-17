export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="section text-center">
        <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-green-700">
          Microgreens · Training · Consultancy
        </span>

        <h1 className="mt-8 text-4xl font-extrabold md:text-6xl">
          Building India’s Next-Gen
          <span className="block text-green-700">
            Microgreens Entrepreneurs
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg">
          Consultancy, training & nutrition-driven agribusiness
          solutions for individuals, institutions, and startups.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="btn-primary">
            Get Consultancy →
          </button>
          <button className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold hover:bg-slate-100">
            Join a Course
          </button>
        </div>
      </div>
    </section>
  );
}
