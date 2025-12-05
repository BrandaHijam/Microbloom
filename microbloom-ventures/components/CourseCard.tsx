// components/CourseCard.tsx
import Link from 'next/link';
import React from 'react';

type Course = {
  id: string;
  title: string;
  duration: string;
  fee: string;
  excerpt?: string;
};

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="bg-white border rounded-lg p-4 shadow-sm h-full flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <p className="text-sm text-slate-600 mt-2">{course.excerpt}</p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-slate-600">
          <div>{course.duration}</div>
          <div className="font-medium">{course.fee}</div>
        </div>
        <Link href={`/courses/${course.id}`} className="ml-4">
          <button className="px-3 py-1 rounded-md border text-sm">View</button>
        </Link>
      </div>
    </article>
  );
}
