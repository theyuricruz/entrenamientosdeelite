import { useEffect, useState } from "react";

export function Countdown({ minutes = 15 }: { minutes?: number }) {
  const [remaining, setRemaining] = useState(minutes * 60);

  useEffect(() => {
    const t = setInterval(() => {
      setRemaining((r) => (r > 0 ? r - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const m = Math.floor(remaining / 60);
  const s = remaining % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");

  const Box = ({ value, label }: { value: string; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="min-w-[68px] rounded-xl bg-secondary px-4 py-3 text-center font-display text-3xl font-black tabular-nums text-white shadow-lg sm:min-w-[80px] sm:text-4xl">
        {value}
      </div>
      <span className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4">
      <Box value={pad(m)} label="Minutos" />
      <span className="pb-6 text-3xl font-black text-secondary sm:text-4xl">:</span>
      <Box value={pad(s)} label="Segundos" />
    </div>
  );
}
