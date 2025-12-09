import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-12">
      {/* HERO SECTION */}
      <div className="bg-linear-to-r from-green-50 to-white p-10 border rounded-lg shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold max-w-2xl">
          Building India’s Next-Gen Microgreens Entrepreneurs
        </h1>

        <p className="mt-4 text-slate-600 max-w-xl">
          Consultancy, training, dietician services and turnkey grow lab 
          solutions for schools, restaurants and enterprises.
        </p>

        <div className="mt-6 flex gap-4">
          <Link href="/services" className="px-4 py-2 bg-green-600 text-white rounded-md">
            Get Consultancy
          </Link>

          <Link href="/courses" className="px-4 py-2 border rounded-md">
            Join a Course
          </Link>
        </div>
      </div>

      {/* FEATURE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6 shadow-sm">
          <h3 className="font-semibold">Grow Lab Setup</h3>
          <p className="text-sm text-slate-600 mt-2">
            Turnkey microgreens and urban farm setups.
          </p>
        </div>

        <div className="border rounded-lg p-6 shadow-sm">
          <h3 className="font-semibold">Training & Internships</h3>
          <p className="text-sm text-slate-600 mt-2">
            Certificate programs, hands-on training and workshops.
          </p>
        </div>

        <div className="border rounded-lg p-6 shadow-sm">
          <h3 className="font-semibold">Dietician Consulting</h3>
          <p className="text-sm text-slate-600 mt-2">
            Personalized diet plans and consultations.
          </p>
        </div>
      </div>
    </section>
  );
}
