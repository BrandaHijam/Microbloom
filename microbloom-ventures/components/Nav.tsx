'use client';
import Link from 'next/link';
import React from 'react';

export default function Nav() {
  return (
    <nav className="bg-white border-b">
      <div className="mx-auto" style={{ maxWidth: 1200 }}>
        <div className="flex items-center justify-between px-4 py-4">
          <Link href="/" className="font-semibold text-lg">Microbloom Ventures</Link>
          <div className="hidden md:flex gap-6 items-center text-sm">
            <Link href="/services" className="hover:underline">Services</Link>
            <Link href="/courses" className="hover:underline">Courses</Link>
            <Link href="/careers" className="hover:underline">Careers</Link>
            <Link href="/dietician" className="hover:underline">Dietician</Link>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="rounded-md px-3 py-1 bg-green-600 text-white">Contact</Link>
          </div>

          <div className="md:hidden">
            <Link href="/contact" className="rounded-md px-3 py-1 bg-green-600 text-white text-sm">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
