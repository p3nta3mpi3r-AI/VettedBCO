import React from "react";
import { Star, Plus, Info, Check, Sparkles } from "lucide-react";
import { CoffeeProduct } from "../types";

interface OurCoffeeProps {
  products: CoffeeProduct[];
  onAddToCart: (product: CoffeeProduct) => void;
  onOpenDetailModal: (product: CoffeeProduct) => void;
}

const branchColors: Record<string, string> = {
  Army: "#324029",
  Navy: "#173550",
  "Air Force": "#6A879C",
  Marines: "#77553A",
};

export default function OurCoffee({
  products,
  onAddToCart,
  onOpenDetailModal,
}: OurCoffeeProps) {
  return (
    <section id="our-coffee" className="py-20 bg-coffee-dark/80 border-b border-white/5 relative overflow-hidden">
      {/* Emotional Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          
        </video>
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>
      </div>

      {/* Background visual highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-coffee-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 flex flex-col items-center text-center">
          <p className="text-white text-xs font-black uppercase tracking-[0.25em] mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-white animate-pulse" />
            OUR FOUR BRANCH BLENDS
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.95] uppercase text-white">
            Four branch blends.<br/>One unmistakable mission.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white font-normal leading-relaxed">
            Inspired by the visual rhythm of military precision, this lineup spotlights each branch of our armed forces with its own distinctive roast profile, tasting notes, and mission-fit use case. Explore every bag or click the details to route your donation.
          </p>
        </div>

        {/* Carousel / Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const bColor = branchColors[product.branch || "Army"] || "#324029";
              return (
                <article
                  key={product.id}
                  className="bg-coffee-card rounded-[2.5rem] border border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden group relative"
                >
                  {/* Mesh / Top visual panel */}
                  <div className="bg-coffee-light/50 p-6 flex flex-col justify-between relative min-h-[220px]">
                    <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "16px 16px" }}></div>
                    
                    <div className="flex items-center justify-between z-10">
                      <span
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full text-center text-[10px] font-black uppercase tracking-widest text-white shadow-md"
                        style={{ backgroundColor: bColor }}
                      >
                        {product.branch}
                      </span>
                      <span className="rounded-full border border-white/10 bg-coffee-card/80 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
                        {product.roast}
                      </span>
                    </div>

                    {/* Image representation of Coffee bean or packet */}
                    <div className="mx-auto mt-4 max-w-[150px] aspect-square relative z-10 transform group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={`${product.name} packaging`}
                        className="w-full h-full object-cover rounded-2xl shadow-md border border-white/5"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-2 right-2 bg-coffee-dark text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5 shadow-md">
                        <Star className="w-3 h-3 fill-coffee-accent stroke-coffee-accent" />
                        {product.rating}
                      </div>
                    </div>
                  </div>

                  {/* Description & metadata body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-coffee-medium">
                            {product.branch} BLEND
                          </p>
                          <h3 className="mt-1 text-2xl font-black uppercase leading-none text-white group-hover:text-coffee-accent transition-colors">
                            {product.name}
                          </h3>
                        </div>
                        <p className="text-xl font-black text-white">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>

                      <p className="text-xs text-coffee-medium leading-relaxed mb-4 min-h-[36px]">
                        {product.description}
                      </p>

                      {/* Tasting Notes */}
                      {product.tastingNotes && (
                        <div className="mb-4">
                          <p className="text-[9px] font-black uppercase tracking-widest text-coffee-card/60 mb-2">
                            TASTING PROFILE
                          </p>
                          <div className="flex flex-wrap gap-1">
                            {product.tastingNotes.map((note) => (
                              <span
                                key={note}
                                className="rounded-full border border-white/10 bg-coffee-light/40 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-coffee-card"
                              >
                                {note}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Intensity & Best For stats */}
                      <div className="space-y-1.5 pt-3 border-t border-white/10 mb-4 text-[11px] font-medium text-coffee-card/80">
                        <p className="flex justify-between">
                          <span className="text-coffee-medium/60 font-mono uppercase text-[9px]">INTENSITY:</span>
                          <span className="font-bold">{product.intensity || "Full Force"}</span>
                        </p>
                        <p className="flex justify-between gap-4">
                          <span className="text-coffee-medium/60 font-mono uppercase text-[9px]">BEST FOR:</span>
                          <span className="font-bold text-right leading-tight">{product.bestFor || "Daily Routine"}</span>
                        </p>
                      </div>
                    </div>

                    {/* Quick actions row */}
                    <div className="flex justify-center pt-3 w-full">
                      <button
                        onClick={() => onAddToCart(product)}
                        className="w-full px-8 py-3 bg-coffee-card bg-camo text-white border border-white hover:text-white hover:bg-coffee-dark rounded-full text-xs font-black uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                        title="Add to Basket"
                      >
                        <Plus className="w-4 h-4 stroke-[3] text-coffee-accent" />
                        <span>Order</span>
                      </button>
                    </div>

                  </div>
                </article>
              );
            })}
          </div>
      </div>
    </section>
  );
}
