import React, { useState } from "react";
import { Heart, Sparkles, Shield, MapPin, Gift, ExternalLink, X } from "lucide-react";

interface Charity {
  slug: string;
  name: string;
  badge: string;
  priority: string;
  whyItFits: string;
  supportAreas: string[];
  url?: string;
}

interface CharityFactorProps {
  charities: Charity[];
}

export default function CharityFactor({ charities }: CharityFactorProps) {
  const [activeIframeUrl, setActiveIframeUrl] = useState<string | null>(null);

  return (
    <section id="charity-factor" className="py-20 bg-coffee-dark relative overflow-hidden border-t border-b border-white/5">
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
        <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
      </div>

      {/* Visual background decorations */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-coffee-accent opacity-[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-coffee-card opacity-[0.03] rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title block */}
        <div className="max-w-3xl mx-auto mb-16 flex flex-col items-center text-center">
          <p className="text-white text-xs font-black uppercase tracking-[0.25em] mb-3 flex items-center justify-center gap-2">
            <Heart className="w-4 h-4 text-white fill-current" />
            <span className="text-coffee-accent animate-pulse font-black">30%</span> DIRECT GIVE-BACK COMMITMENT
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[0.95] uppercase text-white">
            <span className="text-coffee-accent animate-pulse font-black">30%</span> of every order<br/>answers the call.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white font-normal leading-relaxed">
            This is not just a patriotic aesthetic. The mission is built into the product. Every single order supports vetted, highly rated organizations that help military families, wounded veterans, and the broader hero community. If you drink coffee daily, let's make it pull real weight.
          </p>
        </div>

        {/* Charity Partner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {charities.map((charity, idx) => {
            // Icon assignment based on charity type
            let IconComponent = Shield;
            if (charity.slug === "fisher-house") IconComponent = MapPin;
            if (charity.slug === "gary-sinise-foundation") IconComponent = Gift;

            return (
              <article 
                key={charity.slug} 
                className="bg-coffee-card rounded-[2.5rem] p-6 sm:p-8 border border-white/10 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="rounded-full bg-coffee-card bg-camo px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white border border-white shadow-sm">
                      {charity.badge}</span><div className="w-10 h-10 rounded-full bg-coffee-accent/10 flex items-center justify-center text-coffee-accent">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black uppercase leading-tight text-white mb-1">
                    {charity.name}
                  </h3>
                  
                  <p className="text-[11px] font-black uppercase tracking-widest text-coffee-accent mb-4">
                    {charity.priority}
                  </p>

                  <p className="text-sm text-coffee-medium leading-relaxed mb-6">
                    {charity.whyItFits}
                  </p>

                  {/* support areas */}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-[9px] font-black uppercase tracking-widest text-coffee-medium mb-3">
                      KEY IMPACT AREAS:
                    </p>
                    <ul className="space-y-2.5">
                      {charity.supportAreas.map((area, sIdx) => (
                        <li key={sIdx} className="flex gap-2.5 items-start">
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-coffee-accent shrink-0"></span>
                          <span className="text-xs text-coffee-card/80 leading-snug font-medium">
                            {area}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex justify-end">
                  <button 
                    onClick={() => charity.url && setActiveIframeUrl(charity.url)}
                    className="flex items-center gap-1.5 text-xs font-black uppercase text-coffee-accent tracking-widest hover:underline cursor-pointer transition-colors hover:text-white"
                  >
                    Verified charity, #{idx + 1}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Mission commitment quote card */}
        <div className="mx-auto mt-12 bg-coffee-card bg-camo p-8 rounded-[2.5rem] border border-white shadow-lg text-white flex flex-col md:flex-row items-center justify-between gap-8 max-w-[1133px] md:h-[333px] overflow-visible relative">
          <div className="max-w-xl z-10">
            <p className="text-[10px] font-black uppercase tracking-widest text-coffee-accent mb-2">Programmatic Giving Pledge</p>
            <h4 className="text-xl font-black uppercase mb-2">Every single purchase contributes directly</h4>
            <p className="text-sm text-white font-black leading-relaxed drop-shadow-md">
              When finalizing your order in your shopping basket, you can select which of our three partner foundations you would like your specific <span className="text-coffee-accent animate-pulse font-black">30%</span> donation routed to. We report and deliver these donations programmatic-style quarterly.
            </p>
          </div>
          <div className="flex-shrink-0 animate-pulse hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center z-10 md:mr-8 md:h-[300px]">
            <img src="/250-year.png" alt="250 Year 1776-2026" className="w-[250px] md:w-auto h-auto md:h-[350px] object-contain drop-shadow-2xl hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-500 scale-110 md:scale-125 origin-center md:origin-right transform md:-translate-y-4" />
          </div>
        </div>

      </div>
      {/* Iframe Modal */}
      {activeIframeUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-coffee-card w-full max-w-6xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col relative">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-coffee-dark">
              <span className="text-xs font-black uppercase tracking-widest text-white flex items-center gap-2">
                <Shield className="w-4 h-4 text-coffee-accent" />
                Verified Charity Explorer</span><button
                onClick={() => setActiveIframeUrl(null)}
                className="p-2 hover:bg-black/5 rounded-full transition-colors text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Iframe content */}
            <div className="flex-1 bg-coffee-card relative">
              <iframe
                src={activeIframeUrl}
                className="absolute inset-0 w-full h-full border-0"
                title="Charity Website"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
