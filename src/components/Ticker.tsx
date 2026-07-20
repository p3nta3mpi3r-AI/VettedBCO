import React from "react";

interface TickerProps {
  items: string[];
  bgClass?: string;
  textClass?: string;
}

export default function Ticker({
  items,
  bgClass = "bg-coffee-dark border-y border-white/5 py-4 overflow-hidden shadow-inner",
  textClass = "text-white/90 font-display font-semibold uppercase tracking-[0.24em] text-xs sm:text-sm"
}: TickerProps) {
  // Triple the items to ensure seamless endless looping without voids
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`relative ${bgClass}`}>
      <div className="flex w-full overflow-hidden select-none">
        <div className="animate-ticker flex whitespace-nowrap gap-12 pl-12">
          {repeatedItems.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-12">
              <span className={textClass}>{item.includes("30%") ? (<>{item.split("30%")[0]}<span className="text-coffee-accent animate-pulse font-black drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">30%</span>{item.split("30%")[1]}</>) : (item)}</span>
              <span className="text-coffee-accent font-serif italic text-base select-none">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
