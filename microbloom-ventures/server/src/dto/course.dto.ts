export type CourseDTO = {
  id: string
  slug: string
  title: string
  description: string
  curriculum: string[]
  duration?: number | null
  fees?: number | null
  eligibility?: string | null
}

export function toCourseDTO(course: any): CourseDTO {
  return {
    id: course.id,
    slug: course.slug,
    title: course.title,
    description: course.description,

    curriculum: Array.isArray(course.curriculum)
      ? course.curriculum
      : [],

    duration: course.duration ?? null,
    fees: course.fees ?? null,
    eligibility: course.eligibility ?? null
  }
}