const fs = require('fs');
let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// Remove the HQ & Roastery from the bottom and the social icons / copyright text completely.
// Because the user said "delete that lower section where the text and social icon were."
content = content.replace(
  /\{\/\* HQ & Roastery Centered at Bottom \*\/\}[\s\S]*?(?=\s*<\/div>\s*<\/footer>)/g,
  ''
);

// Put HQ & Roastery back into Column 1, centered
content = content.replace(
  /<\/p>\s*<\/div>\s*\{\/\* Column 2 - Partner Charities \*\/\}/,
  `</p>\n            <div className="space-y-1 pt-2 text-center">\n              <p className="text-[11px] font-mono uppercase text-coffee-accent tracking-wider font-semibold">HQ & Roastery</p>\n              <p className="text-xs text-white font-bold leading-relaxed">\n                HYPROM3N3 LLC<br />\n                Coconut Creek, Florida\n              </p>\n            </div>\n          </div>\n          {/* Column 2 - Partner Charities */}`
);

fs.writeFileSync('src/components/Footer.tsx', content);
