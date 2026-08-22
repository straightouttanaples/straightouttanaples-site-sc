import puppeteer from 'puppeteer'
import { spawn } from 'child_process'
import fs from 'fs'
import path from 'path'

const routes = ['/', '/about', '/menu', '/order', '/bookings', '/catering']
const PORT = 4173
const DIST = path.resolve('dist')

// Start `vite preview` as a child process to serve the built dist folder
const previewServer = spawn('npx', ['vite', 'preview', '--port', PORT, '--strictPort'], {
  shell: true,
  stdio: 'ignore',
})

// Give it a moment to boot up
await new Promise((resolve) => setTimeout(resolve, 2000))

const browser = await puppeteer.launch()
const page = await browser.newPage()

for (const route of routes) {
  await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0' })
  const html = await page.content()

  const outDir = route === '/' ? DIST : path.join(DIST, route)
  fs.mkdirSync(outDir, { recursive: true })
  fs.writeFileSync(path.join(outDir, 'index.html'), html)
  console.log(`Prerendered ${route} -> ${outDir}/index.html`)
}

await browser.close()
previewServer.kill()
process.exit(0)