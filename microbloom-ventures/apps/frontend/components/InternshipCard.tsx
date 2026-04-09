import Link from "next/link";

export default function InternshipCard({ internship }: any) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#fcfdfc] shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
      {/* Accent top line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-500 to-lime-400" />

      {/* subtle hover background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col justify-between p-8">
        <div>
          {/* Tags */}
          <div className="mb-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-700">
              {internship.department || "General"}
            </span>

            <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
              Internship
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold leading-tight tracking-tight text-slate-900 transition group-hover:text-green-700">
            {internship.title}
          </h3>

          {/* Description */}
          <p className="mt-4 line-clamp-4 text-[15px] leading-8 text-slate-600">
            {internship.description ||
              "Join us for a hands-on internship experience and work on meaningful projects that help you grow."}
          </p>

          {/* Meta */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              📍 {internship.location || "Remote"}
            </span>

            <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
              🎓 Internship
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <Link
            href={`/internships/${internship.id}`}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-600"
          >
            View Internship
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}