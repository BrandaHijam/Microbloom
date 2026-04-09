'use client';

import { useState } from 'react';
import { CourseDTO } from '@/lib/data/courses';

type Props = {
  course: CourseDTO;
};

export default function CourseCard({ course }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="
        group relative overflow-hidden
        rounded-2xl border border-slate-200
        bg-white p-6
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        dark:border-slate-800 dark:bg-slate-900
      "
    >
      {/* Gradient hover overlay */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        "
      />

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
          {course.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {course.description}
        </p>

        {/* Expanded content */}
        <div
          className={`
            overflow-hidden transition-all duration-300
            ${expanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
            {course.duration !== null && course.duration !== undefined && (
              <p>
                <span className="font-medium text-slate-900 dark:text-white">
                  Duration:
                </span>{' '}
                {course.duration} weeks
              </p>
            )}

            {course.fees !== null && course.fees !== undefined && (
              <p>
                <span className="font-medium text-slate-900 dark:text-white">
                  Fees:
                </span>{' '}
                ₹{course.fees}
              </p>
            )}

            {course.eligibility && (
              <p>
                <span className="font-medium text-slate-900 dark:text-white">
                  Eligibility:
                </span>{' '}
                {course.eligibility}
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-end">
          <button
            onClick={() => setExpanded((prev) => !prev)}
            className="
              text-sm font-medium text-indigo-600
              transition-colors duration-200
              hover:text-indigo-700
              dark:text-indigo-400
              dark:hover:text-indigo-300
            "
          >
            {expanded ? 'Hide ↑' : 'View details →'}
          </button>
        </div>
      </div>
    </div>
  );
}
