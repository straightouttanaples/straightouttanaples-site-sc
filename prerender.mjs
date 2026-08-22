import puppeteer from 'puppeteer';
import { createServer } from 'http';
import handler from 'serve-handler';
import fs from 'fs';
import path from 'path';

const routes = ['/', '/about', '/menu', '/Bookings', '/Catering'];
const DIST_DIR = path.resolve('dist');
const PORT = 5005;

async function run() {
  const server = createServer((req, res) => handler(req, res, { public: DIST_DIR }));
  await new Promise((resolve) => server.listen(PORT, resolve));

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const route of routes) {
    const url = `http://localhost:${PORT}${route}`;
    console.log(`Prerendering ${url} ...`);
    await page.goto(url, { waitUntil: 'networkidle0' });
    const html = await page.content();

    const outDir = route === '/' ? DIST_DIR : path.join(DIST_DIR, route);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
    console.log(`Saved ${path.join(outDir, 'index.html')}`);
  }

  await browser.close();
  server.close();
  console.log('Prerendering complete.');
}

run();