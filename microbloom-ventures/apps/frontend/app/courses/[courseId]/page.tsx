// app/courses/[courseId]/page.tsx
import React from 'react';
import { courses } from '@/server/lib/data/courses';
import { notFound } from 'next/navigation';

type Props = { params: { courseId: string } };

export default function CoursePage({ params }: Props) {
  const course = courses.find(c => c.id === params.courseId);
  if (!course) return notFound();

  return (
    <section className="space-y-6">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-2xl font-bold">{course.title}</h1>
          <p className="text-slate-600 mt-2">{course.duration} • {course.fee}</p>
        </div>
        <div>
          <button className="px-4 py-2 rounded-md bg-green-600 text-white">Enroll</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h3 className="font-semibold">Curriculum</h3>
          <ul className="list-disc ml-5 mt-3 text-slate-700">
            {course.curriculum?.map((t, i) => (
              <li key={i} className="mb-2">{t}</li>
            ))}
          </ul>
        </div>

        <aside>
          <div className="bg-slate-50 border rounded p-4">
            <h4 className="font-semibold">Course Info</h4>
            <div className="mt-2 text-sm text-slate-600">
              <div>Duration: {course.duration}</div>
              <div>Fee: {course.fee}</div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
