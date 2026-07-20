const fs = require('fs');
let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// We need to make sure the copyright text is at the bottom, centered, as they requested earlier.
// And no social icons.

// First, check if copyright is already there. It's not, we just verified Footer.tsx ends with the grid.
content = content.replace(
  /        <\/div>\s*<\/div>\s*<\/footer>/,
  `        </div>
        
        {/* Bottom Text */}
        <div className="flex flex-col items-center gap-2 pt-8 mt-8 border-t border-white/5 text-xs text-white/80 font-bold uppercase tracking-wider text-center">
          <p>© {new Date().getFullYear()} VETTED BREW CO. ALL RIGHTS RESERVED.</p>
          <p>Sourced with honor & roasted in the USA 🇺🇸</p>
        </div>
      </div>
    </footer>`
);

fs.writeFileSync('src/components/Footer.tsx', content);
