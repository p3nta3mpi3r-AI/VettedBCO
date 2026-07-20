const fs = require('fs');

const footerContent = `import React from "react";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  return (
    <footer className="relative bg-coffee-dark text-white font-bold border-t border-white/5 py-8 md:py-12 overflow-hidden">
      {/* Emotional Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/branch-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 ">
          
          {/* Column 1 - Brand Info */}
          <div className="lg:col-span-1.5 space-y-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => onScrollToSection("hero")}>
              <div className="w-8 h-8 bg-coffee-card flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rotate-45"></div>
              </div>
              <span className="font-display font-black tracking-widest text-xl text-white uppercase leading-none">
                VETTED BREW CO.
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white font-bold leading-relaxed">
              Military blend coffee. First responder grit. Sourced with absolute integrity, roasted to order in Florida, with <span className="text-coffee-accent animate-pulse font-black">30%</span> directly committed to veteran charity support.
            </p>

            <div className="space-y-1 pt-2 text-center w-full">
              <p className="text-[11px] font-mono uppercase text-coffee-accent tracking-wider font-semibold">HQ & Roastery</p>
              <p className="text-xs text-white font-bold leading-relaxed">
                HYPROM3N3 LLC<br />
                Coconut Creek, Florida
              </p>
            </div>
          </div>

          {/* Column 2 - Partner Charities */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-coffee-accent">
              Vetted Charities
            </h3>
            <div className="space-y-2 text-xs text-white font-bold">
              <button onClick={() => onScrollToSection("charity-factor")} className="block hover:text-coffee-accent hover:underline text-left">
                Fisher House Foundation
              </button>
              <button onClick={() => onScrollToSection("charity-factor")} className="block hover:text-coffee-accent hover:underline text-left">
                Semper Fi & America's Fund
              </button>
              <button onClick={() => onScrollToSection("charity-factor")} className="block hover:text-coffee-accent hover:underline text-left">
                Gary Sinise Foundation
              </button>
              <div className="pt-2 text-[10px] text-coffee-accent/70 uppercase font-black">
                <span className="text-coffee-accent animate-pulse font-black">★ 30% Direct Routing</span>
              </div>
            </div>
          </div>

          {/* Column 3 - Branch Blends */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-coffee-accent">
              Branch Blends
            </h3>
            <div className="space-y-2 text-xs text-white font-bold">
              <button onClick={() => onScrollToSection("our-coffee")} className="block hover:text-coffee-accent hover:underline text-left">
                Army Ranger Roast (Dark)
              </button>
              <button onClick={() => onScrollToSection("our-coffee")} className="block hover:text-coffee-accent hover:underline text-left">
                Navy Midwatch (Medium-Dark)
              </button>
              <button onClick={() => onScrollToSection("our-coffee")} className="block hover:text-coffee-accent hover:underline text-left">
                Air Force Altitude (Medium)
              </button>
              <button onClick={() => onScrollToSection("our-coffee")} className="block hover:text-coffee-accent hover:underline text-left">
                Marine Frontline (Double Dark)
              </button>
            </div>
          </div>

          {/* Column 4 - Mission Details */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-coffee-accent">
              Our Mission
            </h3>
            <ul className="space-y-2 text-xs text-white font-bold">
              {["Support Programs", "Founder Story", "Hero Discounts", "Feedback Hub"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onScrollToSection("roasting")}
                    className="hover:text-coffee-accent hover:underline transition-all duration-200 text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 - Programmatic Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-coffee-accent">
              Resources
            </h3>
            <ul className="space-y-2 text-xs text-white font-bold">
              {["Corporate Gifting", "Wholesale Inquiries", "Tax Exemption Receipts", "FAQ"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => onScrollToSection("faq")}
                    className="hover:text-coffee-accent hover:underline transition-all duration-200 text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Social Icons & Bottom Text Centered Across */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 pt-12 border-t border-white/5 mt-8">
          <div className="flex items-center gap-4">
            {[
              { icon: Facebook, href: "https://facebook.com" },
              { icon: Instagram, href: "https://instagram.com" },
              { icon: Twitter, href: "https://twitter.com" },
              { icon: Mail, href: "mailto:helpme@vettedbrewco.com" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-coffee-card/5 hover:bg-coffee-accent hover:text-white text-white flex items-center justify-center transition-all duration-300 border border-white/10"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs text-white/80 font-bold uppercase tracking-wider text-center">
            <p>© {new Date().getFullYear()} VETTED BREW CO. ALL RIGHTS RESERVED.</p>
            <p>Sourced with honor & roasted in the USA 🇺🇸</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
`;

fs.writeFileSync('src/components/Footer.tsx', footerContent);

const faqContent = `import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

export default function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-coffee-dark/60 border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase leading-none text-white flex items-center justify-center gap-3">
            <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-coffee-accent animate-bounce" />
            COMMON QUESTIONS
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base text-coffee-medium font-normal leading-relaxed">
            Everything you need to know about our blends, our sourcing rigor, and how our 30% give-back routing works.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-coffee-card rounded-[2rem] border border-white/10 overflow-hidden shadow-xs hover:border-white/20 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 sm:p-8 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-display font-black text-base sm:text-lg text-white uppercase tracking-wide leading-tight">
                    {faq.question}
                  </span>
                  <div className={"p-2 rounded-full transition-all duration-300 " + (isOpen ? "bg-coffee-dark text-coffee-cream" : "bg-coffee-light text-white")}>
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[3]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[3]" />
                    )}
                  </div>
                </button>
                <div
                  className={"transition-all duration-300 ease-in-out overflow-hidden " + (isOpen ? "max-h-[500px] border-t border-white/5" : "max-h-0")}
                >
                  <div className="p-6 sm:p-8 text-sm sm:text-base text-coffee-medium leading-relaxed font-normal bg-coffee-dark/10">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Help banner */}
        <div className="mt-12 text-center text-xs text-coffee-medium/70 uppercase tracking-widest">
          Have more inquiries? Reach out to command center at{" "}
          <a href="mailto:helpme@vettedbrewco.com" className="text-coffee-accent font-black underline underline-offset-2 hover:text-white transition-colors">
            helpme@vettedbrewco.com
          </a>
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('src/components/FAQ.tsx', faqContent);
