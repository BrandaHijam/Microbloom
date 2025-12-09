import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t mt-12">
      <div className="mx-auto px-4 py-8" style={{ maxWidth: 1200 }}>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="font-semibold">Microbloom Ventures</h3>
            <p className="text-sm text-slate-600">Building India’s next-gen microgreens entrepreneurs.</p>
          </div>
          <div className="text-sm text-slate-600">
            <div>Contact: hello@microbloom.com</div>
            <div>Phone: +91 90000 00000</div>
          </div>
        </div>

        <div className="mt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Microbloom Ventures Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
