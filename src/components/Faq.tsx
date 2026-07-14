import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function Faq({
  items,
  variant = "light",
}: {
  items: { q: string; a: string }[];
  variant?: "light" | "dark";
}) {
  const [open, setOpen] = useState<number | null>(0);
  const isDark = variant === "dark";

  return (
    <div className="space-y-3">
      {items.map((it, idx) => {
        const isOpen = open === idx;
        return (
          <div
            key={idx}
            className={`overflow-hidden transition ${
              isDark
                ? isOpen
                  ? "rounded-r-2xl border-l-4 border-primary bg-secondary/80 shadow-lg"
                  : "rounded-2xl border border-white/10 bg-secondary/50 hover:bg-secondary/80"
                : "rounded-2xl border border-border bg-card transition hover:border-primary/40"
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : idx)}
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              aria-expanded={isOpen}
            >
              <span
                className={`font-display text-base font-bold sm:text-lg ${
                  isDark
                    ? isOpen
                      ? "text-white"
                      : "text-white/85"
                    : "text-secondary"
                }`}
              >
                {it.q}
              </span>
              <span
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition ${
                  isOpen
                    ? "rotate-180 bg-primary text-white"
                    : isDark
                      ? "border border-primary/30 bg-secondary/50 text-primary"
                      : "bg-muted text-secondary"
                }`}
              >
                {isOpen ? (
                  <Minus className="h-4 w-4" />
                ) : (
                  <Plus className="h-4 w-4" />
                )}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className={`px-5 pb-6 sm:px-6 ${
                    isDark ? "text-white/70" : "text-muted-foreground"
                  }`}
                >
                  {it.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
