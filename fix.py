with open('src/components/Footer.tsx', 'r') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    new_lines.append(line)

# Let's just find the end of the file and replace it safely
content = "".join(lines)
end_str = """          </div>
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
}"""

replacement_str = """          </div>
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
}"""

content = content.replace(end_str, replacement_str)
with open('src/components/Footer.tsx', 'w') as f:
    f.write(content)
