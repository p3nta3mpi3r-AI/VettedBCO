const fs = require('fs');
let content = fs.readFileSync('src/components/FAQ.tsx', 'utf8');

content = content.replace(
  /        \{\/\* Help banner \*\/\}/g,
  `        {/* Social Icons & Copyright */}
        <div className="mt-16 flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-4">
            {[
              { icon: Facebook, href: "https://facebook.com" },
              { icon: Instagram, href: "https://instagram.com" },
              { icon: Twitter, href: "https://twitter.com" },
              { icon: Mail, href: "mailto:helpme@vettedbrewco.com" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-coffee-card/5 hover:bg-coffee-accent hover:text-white text-white flex items-center justify-center transition-all duration-300 border border-white/10"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <div className="flex flex-col items-center gap-2 text-xs text-white/80 font-bold uppercase tracking-wider text-center">
            <p>© {new Date().getFullYear()} VETTED BREW CO. ALL RIGHTS RESERVED.</p>
            <p>Sourced with honor & roasted in the USA 🇺🇸</p>
          </div>
        </div>

        {/* Help banner */}`
);

// We need to import the icons if they are not already imported.
if (!content.includes('Facebook')) {
  content = content.replace(
    /import \{ Plus, Minus, HelpCircle \} from "lucide-react";/,
    'import { Plus, Minus, HelpCircle, Facebook, Instagram, Twitter, Mail } from "lucide-react";'
  );
}

fs.writeFileSync('src/components/FAQ.tsx', content);
