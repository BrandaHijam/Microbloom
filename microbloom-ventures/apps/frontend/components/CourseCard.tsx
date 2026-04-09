import Link from "next/link";

type Course = {
  id: string;
  title: string;
  description: string;
  curriculum?: string[];
  duration?: string | number | null;
  fees?: string | number | null;
  eligibility?: string | null;
};

export default function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.id}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:ring-emerald-200"
    >
      {/* subtle top glow */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-50/70 to-transparent pointer-events-none" />

      {/* top accent */}
      <div className="relative mb-5 h-1 w-14 rounded-full bg-gradient-to-r from-emerald-500 to-lime-400" />

      {/* title */}
      <h2 className="relative text-xl md:text-2xl font-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-emerald-700">
        {course.title}
      </h2>

      {/* description */}
      <p className="relative mt-4 line-clamp-4 text-sm leading-7 text-slate-600">
        {course.description}
      </p>

      {/* tags */}
      <div className="relative mt-6 flex flex-wrap gap-2">
        {course.duration && (
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            {course.duration}
          </span>
        )}

        {course.fees && (
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
            ₹{course.fees}
          </span>
        )}

        {course.curriculum?.length ? (
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            {course.curriculum.length} modules
          </span>
        ) : null}
      </div>

      {/* footer */}
      <div className="relative mt-auto pt-8">
        <div className="flex items-center justify-between border-t border-slate-100 pt-5">
          <span className="text-sm font-medium text-slate-500 transition-colors duration-300 group-hover:text-slate-700">
            View details
          </span>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all duration-300 group-hover:bg-emerald-100 group-hover:text-emerald-700 group-hover:translate-x-1">
            →
          </div>
        </div>
      </div>
    </Link>
  );
}