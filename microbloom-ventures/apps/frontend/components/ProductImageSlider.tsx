"use client";

import { useMemo, useRef, useState } from "react";

type Props = {
  mainImage: string;
  images?: string[];
  alt: string;
};

export default function ProductImageSlider({
  mainImage,
  images = [],
  alt,
}: Props) {
  const [current, setCurrent] = useState(0);
  const [imageError, setImageError] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Always include main image first, then extra images, remove duplicates
  const allImages = useMemo(() => {
    return [mainImage, ...images].filter(
      (img, index, arr) => img && arr.indexOf(img) === index
    );
  }, [mainImage, images]);

  const hasMultiple = allImages.length > 1;

  const goTo = (index: number) => {
    setCurrent(index);
    setImageError(false);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % allImages.length);
    setImageError(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + allImages.length) % allImages.length);
    setImageError(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;

    if (
      touchStartX.current !== null &&
      touchEndX.current !== null &&
      hasMultiple
    ) {
      const diff = touchStartX.current - touchEndX.current;

      if (diff > 50) next();
      if (diff < -50) prev();
    }
  };

  return (
    <div className="relative w-full">
      {/* Main Image */}
      <div
        className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white group"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {!imageError ? (
          <img
            src={allImages[current]}
            alt={alt}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-400 text-sm">
            Image not available
          </div>
        )}

        {hasMultiple && (
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/75 backdrop-blur-md shadow-md text-gray-800 hover:bg-white transition flex items-center justify-center"
            aria-label="Previous image"
          >
            ‹
          </button>
        )}

        {hasMultiple && (
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white/75 backdrop-blur-md shadow-md text-gray-800 hover:bg-white transition flex items-center justify-center"
            aria-label="Next image"
          >
            ›
          </button>
        )}

        {hasMultiple && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 rounded-full bg-black/20 backdrop-blur-md px-3 py-2">
            {allImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  current === index
                    ? "bg-white scale-110"
                    : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {allImages.length > 0 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
          {allImages.map((img, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 bg-white transition ${
                current === index
                  ? "border-[#3d5a40] shadow-md"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <img
                src={img}
                alt={`${alt} ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}