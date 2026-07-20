const fs = require('fs');
let content = fs.readFileSync('src/components/FAQ.tsx', 'utf8');

const target = `        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-coffee-accent text-xs font-black uppercase tracking-[0.25em] mb-3 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-coffee-accent animate-bounce" />
            COMMON QUESTIONS
          </p>
          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase leading-none text-coffee-dark">
            Operational intelligence.
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base text-coffee-medium font-normal leading-relaxed">
            Everything you need to know about our blends, our sourcing rigor, and how our 30% give-back routing works.
          </p>
        </div>`;

const replacement = `        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-4xl sm:text-5xl uppercase leading-none text-coffee-dark flex items-center justify-center gap-3">
            <HelpCircle className="w-8 h-8 sm:w-10 sm:h-10 text-coffee-accent animate-bounce" />
            COMMON QUESTIONS
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-base text-coffee-medium font-normal leading-relaxed">
            Everything you need to know about our blends, our sourcing rigor, and how our 30% give-back routing works.
          </p>
          <p className="text-coffee-accent text-sm sm:text-base font-black uppercase tracking-widest mt-4">
            100% Arabica Sitewide
          </p>
        </div>`;

content = content.replace(target, replacement);

const targetBoxes = `        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {`;

const replacementBoxes = `        {/* FAQ Accordion List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
          {faqs.map((faq, index) => {`;

content = content.replace(targetBoxes, replacementBoxes);

const targetEmail = `          <a href="mailto:hello@vettedbrewco.com" className="text-coffee-accent font-black underline underline-offset-2 hover:text-coffee-dark transition-colors">
            hello@vettedbrewco.com
          </a>`;

const replacementEmail = `          <a href="mailto:helpme@vettedbrewco.com" className="text-coffee-accent font-black underline underline-offset-2 hover:text-coffee-dark transition-colors">
            helpme@vettedbrewco.com
          </a>`;

content = content.replace(targetEmail, replacementEmail);

fs.writeFileSync('src/components/FAQ.tsx', content);
