const fs = require('fs');
let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');

const end_str = `          </div>
        {/* Bottom Bar */}
        <div className="pt-6 mt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-white font-bold">
          <p>© {currentYear} VETTED BREW CO. ALL RIGHTS RESERVED.</p>
          <p className="flex items-center gap-1.5 justify-center">
            <span>Sourced with honor & roasted in the USA 🇺🇸</span>
          </p>
        </div>
      </div>
    </footer>
  );
}`;

const replacement_str = `          </div>
        </div>
        {/* Bottom Bar */}
        <div className="pt-6 mt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-white font-bold">
          <p>© {currentYear} VETTED BREW CO. ALL RIGHTS RESERVED.</p>
          <p className="flex items-center gap-1.5 justify-center">
            <span>Sourced with honor & roasted in the USA 🇺🇸</span>
          </p>
        </div>
      </div>
    </footer>
  );
}`;

content = content.replace(end_str, replacement_str);
fs.writeFileSync('src/components/Footer.tsx', content);
