const fs = require('fs');
let content = fs.readFileSync('src/components/CharityFactor.tsx', 'utf8');

const target = `        {/* Mission commitment quote card */}
        <div className="mx-auto mt-12 bg-coffee-card bg-camo p-8 sm:p-12 rounded-[2.5rem] border border-coffee-dark shadow-lg text-white flex flex-col md:flex-row items-center gap-8 md:gap-16 justify-between w-full max-w-[1133px] min-h-[333px]">
          <div className="max-w-2xl">
            <p className="text-[10px] font-black uppercase tracking-widest text-coffee-accent mb-2">Programmatic Giving Pledge</p>
            <h4 className="text-xl font-black uppercase mb-2">Every single purchase contributes directly</h4>
            <p className="text-sm sm:text-base text-white font-black leading-relaxed drop-shadow-md">
              When finalizing your order in your shopping basket, you can select which of our three partner foundations you would like your specific <span className="text-coffee-accent animate-pulse font-black">30%</span> donation routed to. We report and deliver these donations programmatic-style quarterly.
            </p>
          </div>
          <div className="flex-shrink-0 animate-pulse hover:scale-105 transition-all duration-300 cursor-pointer">
            <img src="/250-year.png" alt="250 Year 1776-2026" className="w-[300px] md:w-[450px] lg:w-[500px] h-auto object-contain drop-shadow-2xl hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-500" />
          </div>           
        </div>`;

const replacement = `        {/* Mission commitment quote card */}
        <div className="mx-auto mt-12 bg-coffee-card bg-camo p-6 md:p-10 rounded-[2.5rem] border border-coffee-dark shadow-lg text-white flex flex-col md:flex-row items-center justify-between w-full max-w-[1133px] md:h-[333px] gap-6 overflow-hidden">
          <div className="max-w-[600px]">
            <p className="text-[10px] font-black uppercase tracking-widest text-coffee-accent mb-2">Programmatic Giving Pledge</p>
            <h4 className="text-lg md:text-xl font-black uppercase mb-2">Every single purchase contributes directly</h4>
            <p className="text-xs md:text-sm text-white font-bold leading-relaxed drop-shadow-md">
              When finalizing your order in your shopping basket, you can select which of our three partner foundations you would like your specific <span className="text-coffee-accent animate-pulse font-black">30%</span> donation routed to. We report and deliver these donations programmatic-style quarterly.
            </p>
          </div>
          <div className="flex-shrink-0 animate-pulse hover:scale-105 transition-all duration-300 cursor-pointer h-[150px] md:h-[280px] flex items-center justify-center">
            <img src="/250-year.png" alt="250 Year 1776-2026" className="h-full w-auto object-contain drop-shadow-2xl hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-500" />
          </div>           
        </div>`;

content = content.replace(target, replacement);
fs.writeFileSync('src/components/CharityFactor.tsx', content);
