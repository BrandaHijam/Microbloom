import CourseCard from '@/components/CourseCard';
import { CourseDTO } from '@/lib/data/courses';

async function getCourses(): Promise<CourseDTO[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/courses`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch courses');
  }

  const json = await res.json();

  // API contract: { ok: true, data: CourseDTO[] }
  return json.data as CourseDTO[];
}

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <section className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold">Courses</h1>
        <p className="mt-2 text-slate-600">
          Choose from our certificate programs and masterclasses.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
