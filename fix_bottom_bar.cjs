const fs = require('fs');
let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');

const regexToRemove = /\{\/\* Bottom Bar \*\/\}\s*<div className="pt-6 mt-4 border-t border-white\/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-white font-bold">\s*<p>© \{currentYear\} VETTED BREW CO\. ALL RIGHTS RESERVED\.<\/p>\s*<p className="flex items-center gap-1\.5 justify-center">\s*<span>Sourced with honor & roasted in the USA 🇺🇸<\/span>\s*<\/p>\s*<\/div>/;

content = content.replace(regexToRemove, '');
fs.writeFileSync('src/components/Footer.tsx', content);
