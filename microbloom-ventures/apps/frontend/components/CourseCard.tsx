import { Course } from '@/lib/data/courses';

type Props = {
  course: Course;
};

export default function CourseCard({ course }: Props) {
  return (
    <div className="rounded-xl border p-5 hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{course.title}</h3>
      <p className="text-slate-600 mt-2">{course.description}</p>
    </div>
  );
}
