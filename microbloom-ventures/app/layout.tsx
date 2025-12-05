import './globals.css';
import React, { ReactNode } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Microbloom Ventures',
  description: "Building India's Next-Gen Microgreens Entrepreneurs",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white">
        <Nav />
        <main className="flex-1 w-full" style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
