import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Carousel({ images }: { images: { src: string; alt: string }[] }) {
  const [i, setI] = useState(0);
  const prev = () => setI((v) => (v - 1 + images.length) % images.length);
  const next = () => setI((v) => (v + 1) % images.length);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${i * 100}%)` }}
        >
          {images.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={1200}
              height={800}
              className="aspect-[3/2] w-full flex-shrink-0 object-cover"
            />
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-2 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/95 text-secondary shadow-lg transition hover:scale-110 sm:left-4 sm:h-12 sm:w-12"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        aria-label="Siguiente"
        className="absolute right-2 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/95 text-secondary shadow-lg transition hover:scale-110 sm:right-4 sm:h-12 sm:w-12"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-5 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Ir a slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === i ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
