import React from "react";
import { Search, Sparkles, Check, Star } from "lucide-react";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {

  return (
    <section id="hero" className="relative py-12 md:py-20 overflow-hidden bg-black">
      {/* Emotional Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          
          {/* Slogans, main title, search bar, badges, list cards */}
          <div className="flex flex-col gap-6">
            
            <p className="text-white text-xs md:text-sm font-black uppercase tracking-[0.2em] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-white animate-spin" style={{ animationDuration: '3s' }} />
              MILITARY COFFEE. FIRST RESPONDER GRIT. PATRIOTIC PURPOSE.
            </p>

            <h1 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[5.5rem] font-black uppercase leading-[0.85] tracking-[-0.05em] text-white">
              Brew for the<br/>
              <span className="text-white font-serif italic normal-case tracking-normal">mission.</span>
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-white max-w-2xl font-normal">
              Vetted Brew Co. is a military and first responder coffee brand built for Americans who want their daily ritual to mean something. Four branch-inspired roasts. One hard-charging identity. A standing <strong className="text-coffee-accent animate-pulse font-black">30% give-back mission</strong> supporting veteran and service-family charities.
            </p>

            {/* Badges row */}
            <div className="flex flex-wrap gap-2 text-xs font-bold text-white">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-coffee-card bg-camo text-white px-4 py-2 shadow-xs">
                <Check className="w-3.5 h-3.5 text-coffee-accent" /> Veteran-forward brand
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-coffee-card bg-camo text-white px-4 py-2 shadow-xs">
                <Check className="w-3.5 h-3.5 text-coffee-accent" /> Branch-inspired blends
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-coffee-card bg-camo text-white px-4 py-2 shadow-xs">
                <Check className="w-3.5 h-3.5 text-coffee-accent" /> <span className="text-coffee-accent animate-pulse font-black">30%</span> donated to partners
              </span>
            </div>

            {/* CTA Buttons & Search */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center mt-2">
              <button
                onClick={() => onScrollToSection("our-coffee")}
                className="bg-coffee-card bg-camo text-white border border-white hover:bg-coffee-dark hover:text-white px-8 py-4 text-xs font-black uppercase tracking-widest shadow-xl rounded-full transition-all duration-300 cursor-pointer text-center"
              >
                Shop Branch Blends
              </button>
              
              <button
                onClick={() => onScrollToSection("charity-factor")}
                className="border-2 border-white text-white hover:bg-coffee-card hover:text-white px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 cursor-pointer text-center"
              >
                The Charity Factor
              </button>
            </div>

            {/* Core highlight cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <div className="bg-coffee-card bg-camo p-5 rounded-2xl border border-white/5 shadow-xs text-white">
                <p className="text-[10px] font-black uppercase tracking-widest text-coffee-accent mb-1">WHY IT WINS</p>
                <h4 className="text-base font-black uppercase text-white">Duty-grade flavor</h4>
                <p className="text-xs sm:text-sm text-white font-black leading-relaxed mt-2 drop-shadow-md">
                  Serious roast profiles for early call times, overnight shifts, and disciplined routines.
                </p>
              </div>
              <div className="bg-coffee-card bg-camo p-5 rounded-2xl border border-white/5 shadow-xs text-white">
                <p className="text-[10px] font-black uppercase tracking-widest text-coffee-accent mb-1">CHARITY FEATURE</p>
                <h4 className="text-base font-black uppercase text-white"><span className="text-coffee-accent animate-pulse font-black">30%</span> gives back</h4>
                <p className="text-xs sm:text-sm text-white font-black leading-relaxed mt-2 drop-shadow-md">
                  Support families in treatment, wounded veteran recovery, and broad hero programs.
                </p>
              </div>
              <div className="bg-coffee-card bg-camo p-5 rounded-2xl border border-white/5 shadow-xs text-white">
                <p className="text-[10px] font-black uppercase tracking-widest text-coffee-accent mb-1">BUILT WITH PURPOSE</p>
                <h4 className="text-base font-black uppercase text-white">Programmatic Trust</h4>
                <p className="text-xs sm:text-sm text-white font-black leading-relaxed mt-2 drop-shadow-md">
                  Every order contributes to our certified charity partners instantly upon purchase.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
