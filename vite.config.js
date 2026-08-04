import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const SIMS_DIR = fileURLToPath(new URL('./public/sims', import.meta.url))
const VIRTUAL_ID = 'virtual:sims-manifest'
const RESOLVED_ID = '\0' + VIRTUAL_ID

const titleOf = (html) => html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1].trim()
const descriptionOf = (html) =>
  html
    .match(/<meta[^>]+name=["']description["'][^>]*>/i)?.[0]
    .match(/content=["']([\s\S]*?)["']/i)?.[1]
    .trim()

const titleCase = (slug) =>
  slug
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim()

/**
 * Every sim is a standalone HTML file under public/sims/, either as
 * `public/sims/<slug>.html` or `public/sims/<slug>/index.html`. Card copy is
 * read from each file's <title> and <meta name="description">, so a sim only
 * needs to be dropped into the folder to show up on the hub. Anything you want
 * to say differently on the card goes in src/sim-meta.js.
 */
function readSims() {
  if (!fs.existsSync(SIMS_DIR)) return []

  return fs
    .readdirSync(SIMS_DIR, { withFileTypes: true })
    .flatMap((entry) => {
      if (entry.isDirectory()) {
        const index = path.join(SIMS_DIR, entry.name, 'index.html')
        return fs.existsSync(index)
          ? [{ id: entry.name, file: `${entry.name}/index.html`, abs: index }]
          : []
      }
      if (entry.isFile() && entry.name.toLowerCase().endsWith('.html')) {
        const id = entry.name.replace(/\.html$/i, '')
        return [{ id, file: entry.name, abs: path.join(SIMS_DIR, entry.name) }]
      }
      return []
    })
    .map(({ id, file, abs }) => {
      const head = fs.readFileSync(abs, 'utf8').slice(0, 16_384)
      return {
        id,
        file,
        title: titleOf(head) || titleCase(id),
        description: descriptionOf(head) || '',
      }
    })
    .sort((a, b) => a.title.localeCompare(b.title))
}

function simsManifest() {
  return {
    name: 'janyaa-sims-manifest',
    resolveId: (id) => (id === VIRTUAL_ID ? RESOLVED_ID : null),
    load: (id) =>
      id === RESOLVED_ID
        ? `export const sims = ${JSON.stringify(readSims(), null, 2)}`
        : null,
    configureServer(server) {
      const reload = (file) => {
        if (!file.startsWith(SIMS_DIR)) return
        const mod = server.moduleGraph.getModuleById(RESOLVED_ID)
        if (mod) server.moduleGraph.invalidateModule(mod)
        server.ws.send({ type: 'full-reload' })
      }
      server.watcher.on('add', reload)
      server.watcher.on('unlink', reload)
      server.watcher.on('change', reload)
    },
  }
}

export default defineConfig({
  base: '/janyaa-simulations/',
  plugins: [simsManifest()],
})
