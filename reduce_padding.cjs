const fs = require('fs');
let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// Reduce HQ margin
content = content.replace(
  /className="w-full flex flex-col items-center justify-center text-center mt-12 mb-4"/,
  'className="w-full flex flex-col items-center justify-center text-center mt-8"'
);

// Reduce Social margin
content = content.replace(
  /className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 pt-12 border-t border-white\/5 mt-8"/,
  'className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 pt-8 border-t border-white/5 mt-6"'
);

fs.writeFileSync('src/components/Footer.tsx', content);
