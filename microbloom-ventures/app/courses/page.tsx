// app/courses/page.tsx
import React from 'react';
import CourseCard from '@/components/CourseCard';
import { courses } from '@/lib/data/courses';

export default function CoursesPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Courses</h1>
        <p className="text-slate-600 mt-2">Choose from our certificate programs and masterclasses.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map(c => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </section>
  );
}
