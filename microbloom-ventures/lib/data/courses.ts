export type Course = {
    id : string ;
    title : string ;
    duration : string ;
    fee : string ;
    excerpt?: string;
    curriculum?: string[];
} ;


export const courses: Course[] = [
  {
    id: 'microgreens-masterclass',
    title: 'Microgreens Farming Masterclass',
    duration: '4 weeks',
    fee: '₹9,999',
    excerpt: 'From setup to harvest — a hands-on masterclass for microgreens entrepreneurs.',
    curriculum: [
      'Introduction to microgreens',
      'Grow lab setup & lighting',
      'Seed selection & water management',
      'Harvesting & packaging',
      'Business planning & marketing'
    ]
  },
  {
    id: 'urban-farming-101',
    title: 'Urban Farming 101',
    duration: '3 weeks',
    fee: '₹6,999',
    excerpt: 'Practical urban farming methods for small spaces.',
    curriculum: ['Soil vs soilless', 'Vertical racks', 'Pest management', 'Monetization']
  },
  {
    id: 'nutrition-basics',
    title: 'Nutrition Basics Certification',
    duration: '2 weeks',
    fee: '₹4,999',
    excerpt: 'Diet & nutrition fundamentals for health-focused microgreens usage.',
    curriculum: ['Macros & micros', 'Diet plans', 'Food safety']
  }
];