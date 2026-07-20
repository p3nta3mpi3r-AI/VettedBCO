import React, { useState } from "react";
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
