import './style.css'
import { sims } from 'virtual:sims-manifest'
import { simMeta } from './sim-meta.js'

/* Sims and images live in public/, so they are served verbatim under the configured base. */
const asset = (file) => `${import.meta.env.BASE_URL}${file}`
const simUrl = (file) => asset(`sims/${file}`)

const escape = (value) =>
  String(value ?? '').replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c],
  )

/* Manifest data (from each sim's own <title>/<meta>) with src/sim-meta.js on top.
   Re-sorted after merging, since the manifest ordered by the sims' own titles. */
const catalog = sims
  .map((sim) => ({ ...sim, ...(simMeta[sim.id] ?? {}) }))
  .sort((a, b) => a.title.localeCompare(b.title))
const byId = new Map(catalog.map((sim) => [sim.id, sim]))

const ICON_LAUNCH = `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M7 5l6 5-6 5"/></svg>`
const ICON_EXTERNAL = `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M12 4h4v4"/><path d="M16 4l-7 7"/><path d="M14 12v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3"/></svg>`
const ICON_CLOSE = `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" class="h-4 w-4"><path d="M5 5l10 10M15 5L5 15"/></svg>`

function heroSection() {
  return `
    <header class="hero-backdrop relative overflow-hidden border-b border-ink-800">
      <div class="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent"></div>

      <nav class="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6">
        <div class="flex items-center gap-3">
          <img src="${asset('janyaa-logo.png')}" alt="Janyaa" class="h-9 w-auto" />
          <span class="text-sm font-semibold tracking-tight text-ink-100">Interactive</span>
        </div>
        <a href="#simulations"
           class="rounded-lg border border-ink-700 px-3.5 py-2 text-sm text-ink-300 transition hover:border-green-500 hover:text-green-400">
          Browse simulations
        </a>
      </nav>

      <div class="relative mx-auto max-w-6xl px-6 pb-20 pt-12 sm:pb-24 sm:pt-16">
        <h1 class="animate-fade-up text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Janyaa Interactive
        </h1>
        <p class="mt-4 max-w-2xl animate-fade-up text-lg leading-relaxed text-ink-300">
          Interactive STEM simulations for hands-on workshops.
        </p>
      </div>
    </header>`
}

function card(sim, index) {
  const number = String(index + 1).padStart(2, '0')
  const tags = (sim.tags ?? [])
    .map(
      (tag) =>
        `<span class="rounded-md border border-ink-700 bg-ink-800 px-2 py-0.5 text-[11px] font-medium text-ink-300">${escape(tag)}</span>`,
    )
    .join('')

  return `
    <article class="card-sheen group relative flex flex-col overflow-hidden rounded-2xl border border-ink-800 bg-ink-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-green-500/60 hover:shadow-glow">
      <div class="flex items-start justify-between gap-4">
        <span class="font-mono text-xs text-ink-600 transition group-hover:text-orange-500">${number}</span>
        <div class="flex flex-wrap justify-end gap-1.5">${tags}</div>
      </div>

      <h3 class="mt-4 text-lg font-semibold tracking-tight text-white">${escape(sim.title)}</h3>

      <p class="mt-2 flex-1 text-sm leading-relaxed text-ink-400">
        ${escape(sim.description) || 'No description provided.'}
      </p>

      <div class="mt-6 flex items-center gap-2">
        <button type="button" data-launch="${escape(sim.id)}"
                class="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-ink-800 px-4 py-2.5 text-sm font-semibold text-ink-100 transition group-hover:bg-green-500 group-hover:text-black">
          Launch ${ICON_LAUNCH}
        </button>
        <a href="${escape(simUrl(sim.file))}" target="_blank" rel="noopener"
           title="Open in a new tab"
           class="inline-flex items-center justify-center rounded-lg border border-ink-700 p-2.5 text-ink-400 transition hover:border-orange-500 hover:text-orange-400">
          ${ICON_EXTERNAL}<span class="sr-only">Open ${escape(sim.title)} in a new tab</span>
        </a>
      </div>
    </article>`
}

function emptyState() {
  const code = 'rounded bg-ink-800 px-1.5 py-0.5 font-mono text-xs text-green-400'
  return `
    <div class="rounded-2xl border border-dashed border-ink-700 bg-ink-900 p-10 text-center">
      <p class="text-base font-medium text-white">No simulations found</p>
      <p class="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-400">
        Add standalone HTML files to <code class="${code}">public/sims/</code>, either as
        <code class="${code}">name.html</code> or <code class="${code}">name/index.html</code>.
        Each file's <code class="${code}">&lt;title&gt;</code> and
        <code class="${code}">&lt;meta name="description"&gt;</code> become the card copy.
      </p>
    </div>`
}

function gridSection() {
  return `
    <main id="simulations" class="mx-auto max-w-6xl scroll-mt-8 px-6 py-16">
      <div class="flex flex-wrap items-end justify-between gap-4 border-b border-ink-800 pb-6">
        <h2 class="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Simulations</h2>
        <span class="font-mono text-xs text-ink-500">${String(catalog.length).padStart(2, '0')} available</span>
      </div>

      ${
        catalog.length
          ? `<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
               ${catalog.map(card).join('')}
             </div>`
          : `<div class="mt-10">${emptyState()}</div>`
      }
    </main>`
}

function footerSection() {
  return `
    <footer class="border-t border-ink-800">
      <div class="mx-auto max-w-6xl px-6 py-8 text-sm text-ink-400">
        <a href="https://janyaa.org/" target="_blank" rel="noopener"
           class="transition hover:text-orange-400">
          Developed by the Palo Alto Youth Chapter
        </a>
      </div>
    </footer>`
}

function modalMarkup() {
  return `
    <div id="sim-modal" class="fixed inset-0 z-50 hidden" role="dialog" aria-modal="true" aria-labelledby="sim-modal-title">
      <div data-close class="absolute inset-0 animate-fade-in bg-black/85 backdrop-blur-sm"></div>
      <div class="absolute inset-0 flex flex-col p-3 sm:p-6">
        <div class="relative flex min-h-0 flex-1 animate-fade-up flex-col overflow-hidden rounded-2xl border border-ink-700 bg-ink-900 shadow-2xl">
          <div class="flex items-center justify-between gap-4 border-b border-ink-800 px-5 py-3">
            <h2 id="sim-modal-title" class="truncate text-sm font-semibold text-white"></h2>
            <div class="flex shrink-0 items-center gap-2">
              <a id="sim-modal-open" href="#" target="_blank" rel="noopener"
                 class="inline-flex items-center gap-2 rounded-lg border border-ink-700 px-3 py-1.5 text-xs font-medium text-ink-300 transition hover:border-orange-500 hover:text-orange-400">
                ${ICON_EXTERNAL} New tab
              </a>
              <button type="button" data-close
                      class="inline-flex items-center gap-2 rounded-lg bg-ink-800 px-3 py-1.5 text-xs font-medium text-ink-100 transition hover:bg-green-500 hover:text-black">
                ${ICON_CLOSE} Close
              </button>
            </div>
          </div>
          <iframe id="sim-modal-frame" title="Simulation" class="min-h-0 w-full flex-1 bg-white"></iframe>
        </div>
      </div>
    </div>`
}

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-black">
    ${heroSection()}
    ${gridSection()}
    ${footerSection()}
  </div>
  ${modalMarkup()}
`

/* ---- Modal wiring ------------------------------------------------------- */

const modal = document.querySelector('#sim-modal')
const frame = document.querySelector('#sim-modal-frame')
const modalTitle = document.querySelector('#sim-modal-title')
const modalOpen = document.querySelector('#sim-modal-open')
let lastFocused = null

function openSim(id) {
  const sim = byId.get(id)
  if (!sim) return

  lastFocused = document.activeElement
  const url = simUrl(sim.file)
  modalTitle.textContent = sim.title
  modalOpen.href = url
  frame.src = url
  frame.title = sim.title
  modal.classList.remove('hidden')
  document.body.classList.add('overflow-hidden')
  modal.querySelector('[data-close]:not(div)')?.focus()
}

function closeSim() {
  modal.classList.add('hidden')
  frame.removeAttribute('src') // stop audio/animation loops in the sim
  document.body.classList.remove('overflow-hidden')
  lastFocused?.focus()
}

document.addEventListener('click', (event) => {
  const launcher = event.target.closest('[data-launch]')
  if (launcher) {
    openSim(launcher.dataset.launch)
    return
  }
  if (event.target.closest('[data-close]')) closeSim()
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) closeSim()
})
