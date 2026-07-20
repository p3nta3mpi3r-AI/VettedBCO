import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  const h2Style = await page.evaluate(() => {
    const h2 = document.querySelector('h2');
    if (!h2) return null;
    return {
      text: h2.innerText,
      color: window.getComputedStyle(h2).color,
      className: h2.className
    };
  });
  
  console.log("H2:", h2Style);
  await browser.close();
})();
