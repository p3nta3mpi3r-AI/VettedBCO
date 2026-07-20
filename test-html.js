import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  const heroHtml = await page.evaluate(() => {
    return document.getElementById('hero')?.outerHTML;
  });
  
  console.log("Hero HTML:", heroHtml.substring(0, 500));
  await browser.close();
})();
