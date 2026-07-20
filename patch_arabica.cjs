const fs = require('fs');

let faqContent = fs.readFileSync('src/components/FAQ.tsx', 'utf8');
const faqTarget = `          <p className="text-coffee-accent text-sm sm:text-base font-black uppercase tracking-widest mt-4">\n            100% Arabica Sitewide\n          </p>`;
faqContent = faqContent.replace(faqTarget, '');
fs.writeFileSync('src/components/FAQ.tsx', faqContent);

let dataContent = fs.readFileSync('src/data.ts', 'utf8');
const dataTarget = `  "100% PREMIUM ARABICA ✦"`;
dataContent = dataContent.replace(dataTarget, '');
// Handle trailing comma if it was last, but in the array it looks like it was last without a comma, let's just do a regex replace to clean up empty strings or trailing commas
dataContent = dataContent.replace(/,\s*"100% PREMIUM ARABICA ✦"/, '');
dataContent = dataContent.replace(/"100% PREMIUM ARABICA ✦",\s*/, '');
dataContent = dataContent.replace(/"100% PREMIUM ARABICA ✦"/, '');
fs.writeFileSync('src/data.ts', dataContent);
