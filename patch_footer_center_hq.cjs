const fs = require('fs');
let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// Remove from column 1
content = content.replace(
  /\s*<div className="space-y-1 pt-2 text-center w-full">\s*<p className="text-\[11px\] font-mono uppercase text-coffee-accent tracking-wider font-semibold">HQ & Roastery<\/p>\s*<p className="text-xs text-white font-bold leading-relaxed">\s*HYPROM3N3 LLC<br \/>\s*Coconut Creek, Florida\s*<\/p>\s*<\/div>/,
  ''
);

// Add it perfectly centered between grid and social icons
content = content.replace(
  /\{\/\* Social Icons & Bottom Text Centered Across \*\/\}/,
  `{/* Centered HQ & Roastery text (Requested by user) */}
        <div className="w-full flex flex-col items-center justify-center text-center mt-12 mb-4">
          <div className="space-y-1">
            <p className="text-[11px] font-mono uppercase text-coffee-accent tracking-wider font-semibold">HQ & Roastery</p>
            <p className="text-xs text-white font-bold leading-relaxed">
              HYPROM3N3 LLC<br />
              Coconut Creek, Florida
            </p>
          </div>
        </div>

        {/* Social Icons & Bottom Text Centered Across */}`
);

fs.writeFileSync('src/components/Footer.tsx', content);
