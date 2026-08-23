import './style.css'
import { sims } from 'virtual:sims-manifest'
import { simMeta } from './sim-meta.js'

/* Sims live in public/, so URLs must include Vite's configured Pages base. */
const asset = (file) => `${import.meta.env.BASE_URL}${file}`
const simUrl = (file) => asset(`sims/${file}`)

const escape = (value) =>
  String(value ?? '').replace(
    /[&<>"']/g,
    (character) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        character
      ],
  )

/* Manifest data (from each sim's own metadata) with intentional catalog copy on top. */
const catalog = sims
  .map((sim) => ({ ...sim, ...(simMeta[sim.id] ?? {}) }))
  .sort((a, b) => a.title.localeCompare(b.title))
const byId = new Map(catalog.map((sim) => [sim.id, sim]))

const FILTERS = ['All', 'Computers', 'Electronics', 'Physics', 'Math']
const trackLabel = (tag) => (tag === 'Maths' ? 'Math' : tag)
const hasTrack = (sim, track) =>
  track === 'All' || (sim.tags ?? []).some((tag) => trackLabel(tag) === track)

const ICON_LAUNCH = `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true"><path d="M7 5l6 5-6 5"/></svg>`
const ICON_EXTERNAL = `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true"><path d="M12 4h4v4"/><path d="M16 4l-7 7"/><path d="M14 12v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3"/></svg>`
const ICON_CLOSE = `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" class="h-4 w-4" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15"/></svg>`

function headerSection() {
  return `
    <header>
      <nav class="site-nav" aria-label="Primary navigation">
        <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" class="brand-lockup" aria-label="PRISM home">
            <span class="prism-mark" aria-hidden="true">P</span>
            <span>
              <span class="block text-sm font-bold tracking-[0.16em] text-ink">PRISM</span>
              <span class="hidden text-[11px] text-dim sm:block">Interactive STEM mechanisms</span>
            </span>
          </a>
          <div class="flex items-center gap-1 sm:gap-2">
            <a class="nav-link" href="#simulations">Simulations</a>
            <a class="nav-link hidden sm:inline-flex" href="#how-it-works">How it works</a>
            <a class="nav-link hidden md:inline-flex" href="#built-to-grow">Built to grow</a>
            <a class="nav-link hidden lg:inline-flex" href="#about">About</a>
          </div>
        </div>
      </nav>

      <div id="top" class="mx-auto max-w-7xl scroll-mt-24 px-4 pb-8 pt-5 sm:px-6 sm:pb-12 sm:pt-8 lg:px-8">
        <div class="hero-card hero-backdrop relative overflow-hidden rounded-[2rem] border border-border">
          <div class="relative grid gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[minmax(0,1.75fr)_minmax(16rem,0.75fr)] lg:gap-14 lg:px-14 lg:py-16">
            <div class="animate-fade-up">
              <p class="eyebrow">Open source <span aria-hidden="true">·</span> Hands-on + interactive</p>
              <h1 class="mt-5 text-5xl font-bold tracking-[-0.055em] text-ink sm:text-6xl lg:text-7xl">PRISM</h1>
              <p class="mt-3 max-w-2xl text-sm font-semibold leading-relaxed text-dim sm:text-base">
                Predictive Reasoning through Interactive Simulation of Mechanisms
              </p>
              <p class="mt-8 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Making hidden STEM mechanisms visible.
              </p>
              <p class="mt-4 max-w-2xl text-base leading-relaxed text-dim sm:text-lg">
                PRISM pairs hands-on STEM workshops with targeted interactive simulations for mechanisms that physical activities cannot show directly. Students predict, manipulate the relevant variable, observe the result, and explain why it happened.
              </p>
              <div class="mt-7 flex flex-wrap gap-3">
                <a href="#simulations" class="button-primary">Explore simulations ${ICON_LAUNCH}</a>
                <a href="#how-it-works" class="button-secondary">How PRISM works</a>
              </div>
            </div>

            <aside class="hero-stats animate-fade-up" aria-label="PRISM at a glance">
              <div class="stat-block">
                <strong>${catalog.length}</strong>
                <span>live simulations</span>
              </div>
              <div class="stat-block">
                <strong>4</strong>
                <span>STEM tracks</span>
              </div>
              <div class="stat-block">
                <strong class="text-[1.65rem] sm:text-3xl">Open source</strong>
                <span>browser-based <span aria-hidden="true">·</span> no login</span>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </header>`
}

function howSection() {
  const steps = [
    ['01', 'Predict', 'Commit to a mental model before seeing the result.'],
    [
      '02',
      'Interact',
      'Manipulate the causal variable the hands-on activity cannot expose directly.',
    ],
    ['03', 'Explain', 'Observe what changes and explain the mechanism behind the result.'],
  ]

  return `
    <section id="how-it-works" class="section-shell scroll-mt-24" aria-labelledby="how-title">
      <div class="section-heading">
        <p class="eyebrow">A focused learning loop</p>
        <h2 id="how-title">How PRISM works</h2>
        <p>PRISM supplements the physical activity by exposing the causal mechanism that may otherwise remain hidden.</p>
      </div>
      <div class="mt-8 grid gap-4 md:grid-cols-3">
        ${steps
          .map(
            ([number, title, copy]) => `
              <article class="method-card">
                <span class="method-number" aria-hidden="true">${number}</span>
                <h3>${title}</h3>
                <p>${copy}</p>
              </article>`,
          )
          .join('')}
      </div>
    </section>`
}

function card(sim, index) {
  const number = String(index + 1).padStart(2, '0')
  const question = sim.question || 'What hidden mechanism can this simulation help reveal?'
  const tags = (sim.tags ?? [])
    .map((tag) => `<span class="track-pill">${escape(trackLabel(tag))}</span>`)
    .join('')

  return `
    <article class="simulation-card group">
      <div class="flex items-start justify-between gap-4">
        <span class="font-mono text-xs text-dim" aria-hidden="true">${number}</span>
        <div class="flex flex-wrap justify-end gap-1.5">${tags}</div>
      </div>
      <h3>${escape(sim.title)}</h3>
      <p class="card-question">${escape(question)}</p>
      <p class="card-description">${escape(sim.description) || 'No description provided.'}</p>
      <div class="mt-5 flex items-center gap-2">
        <button type="button" data-launch="${escape(sim.id)}" class="launch-button">
          Launch simulation ${ICON_LAUNCH}
        </button>
        <a href="${escape(simUrl(sim.file))}" target="_blank" rel="noopener"
           title="Open ${escape(sim.title)} in a new tab" class="external-button">
          ${ICON_EXTERNAL}<span class="sr-only">Open ${escape(sim.title)} in a new tab</span>
        </a>
      </div>
    </article>`
}

function cardsMarkup(filter = 'All') {
  return catalog.filter((sim) => hasTrack(sim, filter)).map(card).join('')
}

function emptyState() {
  return `
    <div class="col-span-full rounded-2xl border border-dashed border-green/30 bg-panel p-10 text-center">
      <p class="font-medium text-ink">No simulations match this track yet.</p>
    </div>`
}

function librarySection() {
  return `
    <section id="simulations" class="library-section scroll-mt-20" aria-labelledby="simulations-title">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div class="section-heading">
          <p class="eyebrow">Working library</p>
          <h2 id="simulations-title">Explore the simulations</h2>
          <p>${catalog.length} working simulations across computing, electronics, physics, and math.</p>
        </div>

        <div class="mt-8 flex flex-col gap-4 border-b border-green/20 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div class="flex flex-wrap gap-2" role="group" aria-label="Filter simulations by STEM track">
            ${FILTERS.map(
              (filter) => `
                <button type="button" class="filter-button" data-filter="${filter}"
                        aria-pressed="${filter === 'All'}" aria-controls="simulation-grid">
                  ${filter}
                </button>`,
            ).join('')}
          </div>
          <p id="simulation-count" class="shrink-0 font-mono text-xs text-dim" aria-live="polite">
            ${catalog.length} simulations
          </p>
        </div>

        <div id="simulation-grid" class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          ${cardsMarkup() || emptyState()}
        </div>
      </div>
    </section>`
}

function builtToGrowSection() {
  const steps = [
    [
      '01',
      'Specify',
      'Define the workshop question, hidden mechanism, technical model, meaningful variables, assumptions, simplifications, and intended takeaway.',
    ],
    [
      '02',
      'Build',
      'Use AI-assisted software development to accelerate interface implementation, visualization, and iteration.',
    ],
    [
      '03',
      'Verify',
      'Human review checks the mathematics or technical model, assumptions, simplifications, and resulting simulation behavior.',
    ],
    [
      '04',
      'Publish',
      'Add the verified simulation to the shared open-source library.',
    ],
  ]

  return `
    <section id="built-to-grow" class="section-shell scroll-mt-24" aria-labelledby="grow-title">
      <div class="section-heading">
        <p class="eyebrow">A repeatable authoring process</p>
        <h2 id="grow-title">Built to grow</h2>
        <p>The ${catalog.length} simulations are a working proof of concept for a repeatable authoring process, not a fixed endpoint.</p>
      </div>

      <div class="process-track mt-9">
        ${steps
          .map(
            ([number, title, copy], index) => `
              <article class="process-step">
                <span aria-hidden="true">${number}</span>
                <h3>${title}</h3>
                <p>${copy}</p>
              </article>
              ${index < steps.length - 1 ? '<span class="process-arrow" aria-hidden="true"></span>' : ''}`,
          )
          .join('')}
      </div>

      <p class="verification-principle">
        <span>Human verification stays central.</span>
        AI reduces implementation friction; it does not replace technical verification.
      </p>
    </section>`
}

function aboutSection() {
  return `
    <section id="about" class="mx-auto max-w-7xl scroll-mt-24 px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8" aria-labelledby="about-title">
      <div class="about-card">
        <div>
          <p class="eyebrow">Complement, not replacement</p>
          <h2 id="about-title">Built for the invisible layer of hands-on STEM</h2>
        </div>
        <div class="space-y-4 text-base leading-relaxed text-dim">
          <p>Hands-on workshops provide the real system and physical context.</p>
          <p>Some important mechanisms, however, are too small, too fast, abstract, internal, or distributed to observe directly. PRISM is designed to expose those mechanisms interactively rather than replace the physical experience.</p>
          <p class="status-note"><strong>Current status:</strong> ${catalog.length} functioning simulations demonstrate the method across several STEM areas. Educational-impact validation is a future, local evaluation step.</p>
        </div>
      </div>
    </section>`
}

function footerSection() {
  return `
    <footer class="border-t border-green/20 bg-panel/60">
      <div class="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p class="font-bold tracking-[0.14em] text-ink">PRISM</p>
          <p class="mt-1 text-dim">Open-source interactive STEM simulations</p>
        </div>
        <div class="flex flex-wrap gap-x-5 gap-y-2 text-dim">
          <a href="https://janyaa.org/" target="_blank" rel="noopener" class="footer-link">
            Developed by the Palo Alto Youth Chapter
          </a>
          <a href="https://github.com/JayKumar0104/janyaa-simulations" target="_blank" rel="noopener" class="footer-link">
            View source
          </a>
        </div>
      </div>
    </footer>`
}

function modalMarkup() {
  return `
    <div id="sim-modal" class="fixed inset-0 z-50 hidden" role="dialog" aria-modal="true"
         aria-labelledby="sim-modal-title" aria-hidden="true">
      <div data-close class="absolute inset-0 animate-fade-in bg-ink/70 backdrop-blur-sm"></div>
      <div class="pointer-events-none absolute inset-0 flex flex-col p-2 sm:p-6">
        <div class="pointer-events-auto relative flex min-h-0 flex-1 animate-fade-up flex-col overflow-hidden rounded-2xl border border-border bg-panel shadow-2xl">
          <div class="flex items-center justify-between gap-3 border-b border-border px-3 py-3 sm:px-5">
            <h2 id="sim-modal-title" class="min-w-0 truncate text-sm font-semibold text-ink"></h2>
            <div class="flex shrink-0 items-center gap-2">
              <a id="sim-modal-open" href="#" target="_blank" rel="noopener" class="modal-action">
                ${ICON_EXTERNAL} <span class="hidden sm:inline">New tab</span><span class="sr-only">Open simulation in a new tab</span>
              </a>
              <button type="button" data-close class="modal-close">
                ${ICON_CLOSE} <span class="hidden sm:inline">Close</span><span class="sr-only sm:hidden">Close simulation</span>
              </button>
            </div>
          </div>
          <iframe id="sim-modal-frame" title="Interactive simulation" class="min-h-0 w-full flex-1 bg-paper"></iframe>
        </div>
      </div>
    </div>`
}

document.querySelector('#app').innerHTML = `
  <div id="site-shell" class="min-h-screen bg-paper">
    ${headerSection()}
    <main>
      ${howSection()}
      ${librarySection()}
      ${builtToGrowSection()}
      ${aboutSection()}
    </main>
    ${footerSection()}
  </div>
  ${modalMarkup()}
`

/* ---- Catalog filtering ------------------------------------------------- */

const grid = document.querySelector('#simulation-grid')
const count = document.querySelector('#simulation-count')
const filterButtons = [...document.querySelectorAll('[data-filter]')]

function applyFilter(filter) {
  const visible = catalog.filter((sim) => hasTrack(sim, filter))
  grid.innerHTML = visible.length ? visible.map(card).join('') : emptyState()
  count.textContent = `${visible.length} simulation${visible.length === 1 ? '' : 's'}${filter === 'All' ? '' : ` · ${filter}`}`

  filterButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.filter === filter))
  })
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => applyFilter(button.dataset.filter))
})

/* ---- Modal wiring ------------------------------------------------------ */

const modal = document.querySelector('#sim-modal')
const siteShell = document.querySelector('#site-shell')
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
  modalOpen.setAttribute('aria-label', `Open ${sim.title} in a new tab`)
  frame.src = url
  frame.title = `${sim.title} interactive simulation`
  modal.classList.remove('hidden')
  modal.setAttribute('aria-hidden', 'false')
  siteShell.inert = true
  siteShell.setAttribute('aria-hidden', 'true')
  document.body.classList.add('overflow-hidden')
  modal.querySelector('button[data-close]')?.focus()
}

function closeSim() {
  if (modal.classList.contains('hidden')) return
  modal.classList.add('hidden')
  modal.setAttribute('aria-hidden', 'true')
  siteShell.inert = false
  siteShell.removeAttribute('aria-hidden')
  frame.removeAttribute('src') // Stop audio and animation loops in the simulation.
  document.body.classList.remove('overflow-hidden')
  if (lastFocused?.isConnected) lastFocused.focus()
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
  if (modal.classList.contains('hidden')) return

  if (event.key === 'Escape') {
    event.preventDefault()
    closeSim()
    return
  }

  if (event.key !== 'Tab') return
  const focusable = [...modal.querySelectorAll('a[href], button:not([disabled]), iframe')]
  const first = focusable[0]
  const last = focusable.at(-1)

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last?.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first?.focus()
  }
})

document.addEventListener('focusin', (event) => {
  if (!modal.classList.contains('hidden') && !modal.contains(event.target)) {
    modal.querySelector('button[data-close]')?.focus()
  }
})
