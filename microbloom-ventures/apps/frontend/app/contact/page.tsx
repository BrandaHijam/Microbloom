'use client'

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/30 to-white text-slate-900">
      {/* Soft background effects */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.14),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.08),_transparent_28%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-emerald-100/30 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-white/80 backdrop-blur px-4 py-1.5 text-sm font-medium text-emerald-700 shadow-sm">
            Contact Microbloom Ventures
          </span>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Let’s connect and
            <span className="block bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              grow together
            </span>
          </h1>

          <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed">
            Whether you’re looking for product information, business partnerships,
            collaborations, or support, we’d love to hear from you.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-stretch">
          {/* Left Side */}
          <div className="rounded-[32px] border border-white/50 bg-white/80 backdrop-blur-xl shadow-[0_20px_70px_rgba(15,23,42,0.08)] p-8 md:p-10">
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">
                Get in Touch
              </p>
              <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-slate-900">
                We’re always open to meaningful conversations
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Reach out to discuss our products, wellness solutions, custom
                requirements, partnerships, or anything else related to Microbloom Ventures.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="group rounded-3xl border border-slate-200 bg-slate-50/80 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="text-3xl mb-4">📍</div>
                <p className="text-sm font-medium text-slate-500">Address</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">
                  Bangalore, India
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Available for business discussions, product inquiries, and collaborations.
                </p>
              </div>

              <div className="group rounded-3xl border border-slate-200 bg-slate-50/80 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="text-3xl mb-4">📧</div>
                <p className="text-sm font-medium text-slate-500">Email</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900 break-words">
                  contact@microbloomventures.com
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Best for support, product inquiries, and partnership requests.
                </p>
              </div>

              <div className="group rounded-3xl border border-slate-200 bg-slate-50/80 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="text-3xl mb-4">🤝</div>
                <p className="text-sm font-medium text-slate-500">Collaborations</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">
                  Business Partnerships
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Open to wellness, nutrition, retail, and B2B collaborations.
                </p>
              </div>

              <div className="group rounded-3xl border border-slate-200 bg-slate-50/80 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="text-3xl mb-4">⏰</div>
                <p className="text-sm font-medium text-slate-500">Availability</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">
                  Monday – Saturday
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  We usually respond within 24–48 business hours.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:contact@microbloomventures.com?subject=Inquiry%20from%20Website&body=Hello%20Microbloom%20Ventures,%0D%0A%0D%0AI%20would%20like%20to%20know%20more%20about..."
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:scale-[1.02] hover:bg-emerald-700"
              >
                Email Us
              </a>

              <a
                href="https://maps.google.com/?q=12.9716,77.5946"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 hover:scale-[1.02]"
              >
                Open in Maps
              </a>

              {/* Optional phone button */}
              {/* Replace with your actual number */}
              <a
                href="tel:+919999999999"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:bg-slate-50 hover:scale-[1.02]"
              >
                Call Us
              </a>
            </div>
          </div>

          {/* Right Side - Map + Glass Card */}
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-[32px] border border-white/50 bg-white/80 backdrop-blur-xl shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
              <div className="px-6 py-5 border-b border-slate-200 bg-slate-50/80">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Visit Us
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                  Bangalore, India
                </h3>
              </div>

              <div className="w-full h-[420px]">
                <iframe
                  src="https://www.google.com/maps?q=12.9716,77.5946&z=14&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Microbloom Ventures Location"
                />
              </div>
            </div>

            <div className="rounded-[32px] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-[0_20px_60px_rgba(16,185,129,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Let’s Work Together
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                Building healthier, smarter wellness solutions
              </h3>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We’re passionate about quality, innovation, and meaningful collaborations
                in the wellness and nutrition space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}