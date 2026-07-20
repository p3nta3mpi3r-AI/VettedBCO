import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
  console.log("Screenshot saved!");
  await browser.close();
})();
