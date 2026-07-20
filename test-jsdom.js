import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
  const html = fs.readFileSync(path.join(__dirname, 'dist', 'index.html'), 'utf-8');
  const dom = new JSDOM(html, {
    url: 'http://localhost:3000',
    runScripts: "dangerously",
    resources: "usable"
  });

  dom.window.addEventListener('error', (event) => {
    console.error('JSDOM ERROR:', event.message, event.error);
  });
  
  dom.window.console.error = (...args) => {
    console.error('JSDOM CONSOLE.ERROR:', ...args);
  };
  
  await new Promise(resolve => setTimeout(resolve, 5000));
}

run();
