import Navbar from "@/components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Microbloom",
  description: "Microgreens · Training · Consultancy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}