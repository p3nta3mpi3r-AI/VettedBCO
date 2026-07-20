const fs = require('fs');
let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// Remove from bottom
content = content.replace(
  /        \{\/\* HQ & Roastery Centered at Bottom \*\/\}[\s\S]*?(?=\s*<\/div>\s*<\/footer>)/g,
  ''
);

// Add to column 1, centered
content = content.replace(
  /directly committed to veteran charity support\.\s*<\/p>\s*<\/div>/g,
  `directly committed to veteran charity support.
            </p>
            <div className="space-y-1 pt-2 text-center">
              <p className="text-[11px] font-mono uppercase text-coffee-accent tracking-wider font-semibold">HQ & Roastery</p>
              <p className="text-xs text-white font-bold leading-relaxed">
                HYPROM3N3 LLC<br />
                Coconut Creek, Florida
              </p>
            </div>
          </div>`
);

fs.writeFileSync('src/components/Footer.tsx', content);
