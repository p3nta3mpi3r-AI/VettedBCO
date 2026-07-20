const fs = require('fs');
let content = fs.readFileSync('src/components/FAQ.tsx', 'utf8');

// We remove it from before the help banner
content = content.replace(
  /        \{\/\* Social Icons & Copyright \*\/\}[\s\S]*?(?=\s*\{\/\* Help banner \*\/)/g,
  ''
);

// We add it after the help banner
content = content.replace(
  /          <\/a>\n        <\/div>\n      <\/div>\n    <\/section>\n  \);\n\}/g,
  `          </a>
        </div>

        {/* Social Icons & Copyright Centered */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col items-center justify-center gap-6">
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
      </div>
    </section>
  );
}`
);

fs.writeFileSync('src/components/FAQ.tsx', content);
