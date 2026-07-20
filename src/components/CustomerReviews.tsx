import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Review } from "../types";

interface CustomerReviewsProps {
  reviews: Review[];
}

export default function CustomerReviews({ reviews }: CustomerReviewsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="reviews" className="py-20 bg-coffee-dark border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <p className="text-coffee-accent text-xs font-black uppercase tracking-[0.25em] mb-2">
              CUSTOMER REVIEWS
            </p>
            <h2 className="font-display font-black text-4xl sm:text-5xl tracking-tight leading-none uppercase text-white">
              Trusted by veterans, shift workers, and everyday patriots.
            </h2>
            <p className="mt-4 max-w-xl text-base text-coffee-medium font-normal leading-relaxed">
              Our coffee is designed to pull its weight. Here is what real active duty service members, spouses, and veterans say.
            </p>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-coffee-dark hover:text-coffee-cream hover:border-white transition-all duration-300 cursor-pointer text-white"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-coffee-dark hover:text-coffee-cream hover:border-white transition-all duration-300 cursor-pointer text-white"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Reviews Row */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {reviews.map((review) => (
            <article
              key={review.id}
              className="flex-shrink-0 w-full md:w-[500px] snap-start bg-coffee-card/65 backdrop-blur-md rounded-[2rem] p-6 sm:p-8 border border-white/10 shadow-sm flex flex-col sm:flex-row gap-6 items-start sm:items-center group hover:bg-coffee-card hover:border-white/20 hover:shadow-md transition-all duration-300"
            >
              {/* Reviewer portrait with frame */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-[1.5rem] overflow-hidden border border-white/15 flex-shrink-0 shadow-inner">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Review Content */}
              <div className="flex-1">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-coffee-accent mb-3">
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <Star key={idx} className="w-3.5 h-3.5 fill-coffee-accent stroke-coffee-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-white/85 leading-relaxed font-serif italic mb-4">
                  "{review.quote}"
                </p>

                {/* Meta details */}
                <div className="pt-3 border-t border-white/10">
                  <h4 className="font-display font-black text-sm tracking-widest text-white uppercase">
                    {review.name}
                  </h4>
                  <p className="text-xs text-coffee-medium font-bold uppercase mt-0.5">
                    {review.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
