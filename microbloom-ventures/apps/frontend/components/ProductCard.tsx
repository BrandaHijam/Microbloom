import Link from "next/link";

type Product = {
  id: string;
  name: string;
  slug: string;
  tagline?: string;
  imageUrl?: string;
  featured?: boolean;
  category?: string;
  benefits?: string[];
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`}>
      <div className="group relative h-[400px] overflow-hidden rounded-[28px] shadow-lg cursor-pointer">
        {/* Background Image */}
        <img
          src={product.imageUrl || "/placeholder.jpg"}
          alt={product.name}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

        {/* Featured Badge */}
        {product.featured && (
          <span className="absolute left-4 top-4 z-20 rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-medium text-white border border-white/20">
            Featured
          </span>
        )}

        {/* Default content */}
        <div className="absolute bottom-0 z-10 w-full p-6 text-white transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-6">
          {product.category && (
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-green-300">
              {product.category}
            </p>
          )}

          <h3 className="text-2xl font-semibold">{product.name}</h3>

          {product.tagline && (
            <p className="mt-2 text-sm text-gray-200 line-clamp-2">
              {product.tagline}
            </p>
          )}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end bg-black/45 p-6 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
          <div className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-green-300">
              Key Benefits
            </p>

            <ul className="space-y-2 text-sm text-white">
              {(product.benefits?.slice(0, 3) || []).map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-green-400" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 inline-flex items-center rounded-full bg-green-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-green-600 transition">
              Explore Product →
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}