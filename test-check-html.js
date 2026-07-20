import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  const overlays = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('*')).filter(el => {
      const style = window.getComputedStyle(el);
      return style.position === 'fixed' || style.position === 'absolute';
    }).map(el => ({
      tagName: el.tagName,
      className: el.className,
      w: el.clientWidth,
      h: el.clientHeight,
      position: window.getComputedStyle(el).position,
      zIndex: window.getComputedStyle(el).zIndex
    }));
  });
  
  console.log("Absolute/Fixed elements:", overlays.filter(o => o.w > 500 && o.h > 500));
  
  await browser.close();
})();
