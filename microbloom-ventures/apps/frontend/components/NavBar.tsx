import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold text-green-700">
          Microbloom
        </Link>

        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link href="/services">Services</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact" className="text-green-700">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
