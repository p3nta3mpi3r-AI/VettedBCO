import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  const clickableElements = await page.evaluate(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const results = [];
    
    // Sample a grid of points
    for (let x = 10; x < w; x += 100) {
      for (let y = 10; y < h; y += 100) {
        const el = document.elementFromPoint(x, y);
        if (el) {
          results.push({
            tagName: el.tagName,
            id: el.id,
            className: el.className,
            x, y
          });
        }
      }
    }
    return results;
  });
  
  const counts = {};
  clickableElements.forEach(el => {
    const key = `${el.tagName}.${el.className}`;
    counts[key] = (counts[key] || 0) + 1;
  });
  
  console.log("Top intercepting elements:");
  Object.entries(counts).sort((a,b) => b[1] - a[1]).slice(0, 10).forEach(([k,v]) => console.log(v, k));
  
  await browser.close();
})();
