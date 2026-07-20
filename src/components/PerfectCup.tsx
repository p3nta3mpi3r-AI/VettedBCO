import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface PerfectCupProps {
  onOrderNowClick: () => void;
}

export default function PerfectCup({ onOrderNowClick }: PerfectCupProps) {
  return (
    <section className="py-12 sm:py-16 bg-coffee-dark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-coffee-card/80 border border-white/10 rounded-[3rem] overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Text Column */}
          <div className="relative p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-start overflow-hidden bg-coffee-dark">
            <div className="absolute inset-0 z-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                
              </video>
              <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
            </div>
            
            <div className="relative z-10 flex flex-col items-start justify-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-coffee-card/70 backdrop-blur-sm border border-white/10 rounded-full text-[10px] font-mono tracking-widest text-white/80 mb-6 uppercase">
                <Sparkles className="w-3.5 h-3.5 text-coffee-accent" />
                SMALL-BATCH HEROIC ROASTS
              </div>

              <h2 className="font-display font-black text-[2.5rem] sm:text-[3.2rem] leading-none uppercase text-white mb-6">
                Your perfect cup should support the right cause.
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-white font-medium mb-8 max-w-md">
                Whether you are shopping by branch identity, roast strength, or charity fit, every single package is roasted to order and guarantees a <span className="text-coffee-accent animate-pulse font-black">30%</span> direct-donation route.
              </p>

              <button
                onClick={onOrderNowClick}
                className="px-8 py-4 bg-coffee-card bg-camo text-white border border-white hover:text-white hover:bg-coffee-dark text-xs font-black uppercase tracking-widest rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:translate-y-[-2px] flex items-center gap-3 cursor-pointer group"
              >
                <span>Order Yours Today</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-coffee-accent" />
              </button>
            </div>
          </div>

          {/* Right Geometric Grid / Mosaic Column */}
          <div className="relative p-8 lg:p-12 bg-coffee-card bg-camo flex items-center justify-center border-t lg:border-t-0 lg:border-l border-white/10 min-h-[360px] lg:min-h-[460px]">
            {/* 4 Image Grid Layout */}
            <div className="grid grid-cols-2 gap-4 max-w-[400px] w-full">
              
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-sm relative group">
                <img
                  src="/cause-1.png"
                  alt="Delicious Coffee Extract"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-sm relative group translate-y-4">
                <img
                  src="/cause-2.png"
                  alt="Rich dark beans"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-sm relative group -translate-y-4">
                <img
                  src="/cause-3.png"
                  alt="Roastery machines"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-sm relative group">
                <img
                  src="/cause-4.png"
                  alt="Steaming fresh cup"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
