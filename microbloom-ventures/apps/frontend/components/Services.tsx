export default function Services() {
  const services = [
    {
      title: 'Grow Lab Setup',
      desc: 'Design and execution of home, school, and commercial microgreens labs.',
      icon: '🌱',
    },
    {
      title: 'Business Consultancy',
      desc: 'DPRs, SOPs, branding strategy, certifications, and compliance guidance.',
      icon: '📈',
    },
    {
      title: 'Training & Courses',
      desc: 'Structured beginner-to-advanced programs with practical mentoring.',
      icon: '🎓',
    },
  ];

  return (
    <section className="bg-slate-50">
      <div className="section">
        <div className="mb-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
            Our Expertise
          </p>
          <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
            End-to-End Microgreens Solutions
          </h2>
          <p className="mx-auto mt-6 max-w-2xl">
            We help individuals, institutions, and businesses build
            profitable and sustainable microgreens ecosystems.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {services.map((item, i) => (
            <div
              key={item.title}
              className={`card ${i === 1 ? 'md:-translate-y-6' : ''}`}
            >
              <div className="mb-6 text-3xl">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-4">{item.desc}</p>
              <span className="mt-6 inline-block text-sm font-semibold text-green-700">
                Learn more →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
