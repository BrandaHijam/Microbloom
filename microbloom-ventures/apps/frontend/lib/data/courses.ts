export type CourseDTO = {
  id: string;
  slug: string;
  title: string;
  description: string;
  duration?: number | null;
  fees?: number | null;
  eligibility?: string | null;
};
