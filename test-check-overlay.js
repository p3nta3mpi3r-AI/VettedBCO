import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  const elementAtCenter = await page.evaluate(() => {
    const el = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
    return {
      tagName: el ? el.tagName : 'NONE',
      className: el ? el.className : 'NONE',
      id: el ? el.id : 'NONE'
    };
  });
  console.log("Element at center:", elementAtCenter);
  
  const bodyDimensions = await page.evaluate(() => {
    return {
      w: document.body.clientWidth,
      h: document.body.clientHeight
    };
  });
  console.log("Body dimensions:", bodyDimensions);
  
  await browser.close();
})();
