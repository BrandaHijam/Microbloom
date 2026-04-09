export interface CourseResponseDTO {
  id: string;
  slug: string;
  title: string;
  description: string;
  curriculum: unknown | null;
  duration: number | null;
  fees: number | null;
  eligibility: string | null;
  createdAt: string;
}

export function toCourseDTO(course: any): CourseResponseDTO {
  return {
    id: course.id,
    slug: course.slug,
    title: course.title,
    description: course.description,
    curriculum: course.curriculum ?? null,
    duration: course.duration ?? null,
    fees: course.fees ?? null,
    eligibility: course.eligibility ?? null,
    createdAt: course.createdAt.toISOString(),
  };
}