import Link from "next/link";

type Service = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image?: string | null;
  featured?: boolean;
  order?: number;
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-100">
        {service.image ? (
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-slate-400 text-sm">
            No image available
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
          {service.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600 line-clamp-3">
          {service.shortDescription}
        </p>

        <div className="mt-6 inline-flex items-center text-sm font-medium text-emerald-700">
          Learn more
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}