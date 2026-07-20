const fs = require('fs');
let content = fs.readFileSync('src/components/CharityFactor.tsx', 'utf8');

const regex = /\{\/\* Mission commitment quote card \*\/\}(.|\n)*?<\/div>(\s)*<\/div>(\s)*<\/div>/m;

const replacement = `{/* Mission commitment quote card */}
        <div className="mx-auto mt-12 bg-coffee-card bg-camo p-8 rounded-[2.5rem] border border-coffee-dark shadow-lg text-white flex flex-col md:flex-row items-center justify-between gap-8 max-w-[1133px] md:h-[333px] overflow-visible relative">
          <div className="max-w-xl z-10">
            <p className="text-[10px] font-black uppercase tracking-widest text-coffee-accent mb-2">Programmatic Giving Pledge</p>
            <h4 className="text-xl font-black uppercase mb-2">Every single purchase contributes directly</h4>
            <p className="text-sm text-white font-black leading-relaxed drop-shadow-md">
              When finalizing your order in your shopping basket, you can select which of our three partner foundations you would like your specific <span className="text-coffee-accent animate-pulse font-black">30%</span> donation routed to. We report and deliver these donations programmatic-style quarterly.
            </p>
          </div>
          <div className="flex-shrink-0 animate-pulse hover:scale-105 transition-all duration-300 cursor-pointer flex items-center justify-center z-10 md:mr-8 md:h-[300px]">
            <img src="/250-year.png" alt="250 Year 1776-2026" className="w-[250px] md:w-auto h-auto md:h-[350px] object-contain drop-shadow-2xl hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-500 scale-110 md:scale-125 origin-center md:origin-right transform md:-translate-y-4" />
          </div>
        </div>`;

content = content.replace(regex, replacement);
fs.writeFileSync('src/components/CharityFactor.tsx', content);
