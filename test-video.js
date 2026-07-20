import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  const videoDetails = await page.evaluate(() => {
    const video = document.querySelector('video');
    if (!video) return null;
    return {
      src: video.currentSrc,
      readyState: video.readyState,
      networkState: video.networkState,
      error: video.error ? video.error.message : null,
      videoWidth: video.videoWidth,
      videoHeight: video.videoHeight,
      paused: video.paused,
      muted: video.muted,
      autoplay: video.autoplay,
    };
  });
  
  console.log("Video:", videoDetails);
  await browser.close();
})();
