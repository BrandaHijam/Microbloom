export type Course = {
  id: string;
  title: string;
  description: string;
};

export const courses: Course[] = [
  {
    id: 'microgreens',
    title: 'Microgreens Certification Program',
    description: 'Hands-on commercial microgreens training.',
  },
  {
    id: 'urban-farming',
    title: 'Urban Farming Masterclass',
    description: 'Sustainable food production for urban spaces.',
  },
  {
    id: 'nutrition',
    title: 'Nutrition & Diet Planning',
    description: 'Foundations of plant-based nutrition.',
  },
];
