import CourseCard from '@/components/CourseCard';
import { courses } from '@/lib/data/courses';

export default function CoursesPage() {
  return (
    <section className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Courses</h1>
        <p className="text-slate-600 mt-2">
          Choose from our certificate programs and masterclasses.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
