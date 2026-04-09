import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white">
      {/* subtle glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-green-100/40 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-lime-100/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_0.7fr_0.8fr]">
          {/* Brand */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700">
              Microbloom Ventures
            </p>

            <h3 className="mt-4 max-w-md text-3xl font-black leading-tight tracking-[-0.03em] text-slate-950">
              Building India’s next generation of microgreens entrepreneurs.
            </h3>

            <p className="mt-5 max-w-lg text-sm leading-8 text-slate-600">
              Premium training, consultancy, and sustainable agribusiness solutions
              for ambitious founders and future-focused institutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Navigation
            </p>

            <div className="mt-6 flex flex-col gap-4 text-sm font-medium text-slate-700">
              <Link href="/" className="transition hover:translate-x-1 hover:text-green-700">
                Home
              </Link>
              <Link href="/courses" className="transition hover:translate-x-1 hover:text-green-700">
                Courses
              </Link>
              <Link href="/consultancy" className="transition hover:translate-x-1 hover:text-green-700">
                Consultancy
              </Link>
              <Link href="/products" className="transition hover:translate-x-1 hover:text-green-700">
                Products
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Contact
            </p>

            <div className="mt-6 space-y-4 text-sm text-slate-700">
              <p>hello@microbloom.com</p>
              <p>+91 90000 00000</p>
              <p>India</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Microbloom Ventures Pvt Ltd. All rights reserved.</p>

          <div className="flex flex-wrap gap-6">
            <Link href="/privacy" className="transition hover:text-green-700">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-green-700">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}