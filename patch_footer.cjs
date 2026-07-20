const fs = require('fs');
let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');
content = content.replace(
  '        </div>\n      </div>\n    </footer>\n  );\n}',
  `        </div>
        
        {/* Social Icons & Bottom Text Centered Across */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 pt-12 border-t border-white/5 mt-8">
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

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs text-white/80 font-bold uppercase tracking-wider text-center">
            <p>© {new Date().getFullYear()} VETTED BREW CO. ALL RIGHTS RESERVED.</p>
            <p>Sourced with honor & roasted in the USA 🇺🇸</p>
          </div>
        </div>
      </div>
    </footer>
  );
}`
);
fs.writeFileSync('src/components/Footer.tsx', content);
