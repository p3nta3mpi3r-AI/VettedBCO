const fs = require('fs');
let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// Remove HQ & Roastery from Column 1
content = content.replace(
  /<div className="space-y-1 pt-2 text-center">\s*<p className="text-\[11px\] font-mono uppercase text-coffee-accent tracking-wider font-semibold">HQ & Roastery<\/p>\s*<p className="text-xs text-white font-bold leading-relaxed">\s*HYPROM3N3 LLC<br \/>\s*Coconut Creek, Florida\s*<\/p>\s*<\/div>/g,
  ''
);

// Add it to the bottom, perfectly centered
content = content.replace(
  /\{\/\* Social Icons & Bottom Text Centered Across \*\/\}/g,
  `{/* HQ & Roastery Centered at Bottom */}
        <div className="flex flex-col items-center justify-center text-center pt-12 mt-8 border-t border-white/5 space-y-2">
          <p className="text-[11px] font-mono uppercase text-coffee-accent tracking-wider font-semibold">HQ & Roastery</p>
          <p className="text-xs text-white font-bold leading-relaxed">
            HYPROM3N3 LLC<br />
            Coconut Creek, Florida
          </p>
        </div>

        {/* Social Icons & Bottom Text Centered Across */}`
);

// Change the border-t on the social icons wrapper since we added it above
content = content.replace(
  /className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 pt-12 border-t border-white\/5 mt-8"/g,
  `className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 pt-8"`
);

// The user also mentioned: 
// "I said to move the text up, but you deleted them.
// © 2026 VETTED BREW CO. ALL RIGHTS RESERVED.
// Sourced with honor & roasted in the USA 🇺🇸
// center at the bottom"
// Let's ensure these are perfectly centered at the bottom.
content = content.replace(
  /<div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs text-white\/80 font-bold uppercase tracking-wider text-center">\s*<p>© \{new Date\(\)\.getFullYear\(\)\} VETTED BREW CO\. ALL RIGHTS RESERVED\.<\/p>\s*<p>Sourced with honor & roasted in the USA 🇺🇸<\/p>\s*<\/div>/g,
  `<div className="flex flex-col items-center gap-2 text-xs text-white/80 font-bold uppercase tracking-wider text-center w-full pb-8">
            <p>© {new Date().getFullYear()} VETTED BREW CO. ALL RIGHTS RESERVED.</p>
            <p>Sourced with honor & roasted in the USA 🇺🇸</p>
          </div>`
);

// We need to also wrap the social icons and copyright correctly so it is centered.
// Currently they are in a flex-row with gap-6 md:gap-10. Let's make it flex-col so everything is strictly stacked and centered.
content = content.replace(
  /className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 pt-8"/g,
  `className="flex flex-col items-center justify-center gap-8 pt-8"`
);

fs.writeFileSync('src/components/Footer.tsx', content);
