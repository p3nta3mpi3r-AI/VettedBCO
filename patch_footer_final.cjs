const fs = require('fs');
let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// Remove from column 1
content = content.replace(
  /<div className="space-y-1 pt-2 text-center">\s*<p className="text-\[11px\] font-mono uppercase text-coffee-accent tracking-wider font-semibold">HQ & Roastery<\/p>\s*<p className="text-xs text-white font-bold leading-relaxed">\s*HYPROM3N3 LLC<br \/>\s*Coconut Creek, Florida\s*<\/p>\s*<\/div>/g,
  ''
);

// Add to the bottom of the footer (before the closing </div> of max-w-7xl)
content = content.replace(
  /        <\/div>\s*<\/div>\s*<\/footer>/,
  `        </div>
        
        {/* HQ & Roastery Centered at Bottom */}
        <div className="flex flex-col items-center justify-center text-center mt-12 w-full">
          <p className="text-[11px] font-mono uppercase text-coffee-accent tracking-wider font-semibold">HQ & Roastery</p>
          <p className="text-xs text-white font-bold leading-relaxed mt-1">
            HYPROM3N3 LLC<br />
            Coconut Creek, Florida
          </p>
        </div>
      </div>
    </footer>`
);

fs.writeFileSync('src/components/Footer.tsx', content);
