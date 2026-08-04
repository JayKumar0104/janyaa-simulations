(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`Metal_vs_Wood`,file:`Metal_vs_Wood.html`,title:`Metal is not colder than wood — Janyaa Interactive`,description:``},{id:`Memory_Hierarchy`,file:`Memory_Hierarchy.html`,title:`Where your data lives — Janyaa Interactive`,description:``},{id:`SSD_vs_HDD`,file:`SSD_vs_HDD.html`,title:`Why a bump kills a hard drive — Janyaa Interactive`,description:``},{id:`CPU_vs_GPU`,file:`CPU_vs_GPU.html`,title:`Why AI trains on a GPU — Janyaa Interactive`,description:``},{id:`PC_Bottleneck`,file:`PC_Bottleneck.html`,title:`Why the expensive upgrade did nothing — Janyaa Interactive`,description:``},{id:`Square_Cube_Law`,file:`Square_Cube_Law.html`,title:`Why there are no giant ants — Janyaa Interactive`,description:``}],t={CPU_vs_GPU:{title:`CPU vs GPU`,description:`Sends one instruction to a 4-unit CPU and a 128-unit GPU of the same chip size, comparing them on repeated identical arithmetic and on work where each item needs its own decision.`,tags:[`Computers`]},Memory_Hierarchy:{title:`Memory Hierarchy`,description:`Times a CPU fetch from L1 cache down to a hard drive, restated at one second per nanosecond, with a cache hit-rate slider that recalculates the average wait per lookup.`,tags:[`Computers`]},Metal_vs_Wood:{title:`Metal vs Wood`,description:`Holds a wood block and a steel, aluminium, stone, or foam block at the same set temperature, then reports the thermometer reading and the rate each one draws heat from a hand.`,tags:[`Physics`]},PC_Bottleneck:{title:`PC Bottleneck`,description:`Pairs a CPU that prepares 45 frames per second with a GPU that draws 120, and recalculates the final frame rate as either component is upgraded by 50%.`,tags:[`Computers`]},Square_Cube_Law:{title:`Square-Cube Law`,description:`Scales a cube's edge length with a slider and tracks surface area rising with the square while volume rises with the cube, applied to leg stress and to melting ice.`,tags:[`Maths`,`Physics`]},SSD_vs_HDD:{title:`SSD vs HDD`,description:`Applies a desk nudge, a knock off a chair, and a waist-height drop to a powered hard drive and an SSD, comparing a head flying 5 nm above the platter with a drive that has no moving parts.`,tags:[`Computers`]}},n=e=>`/janyaa-simulations/${e}`,r=e=>n(`sims/${e}`),i=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),a=e.map(e=>({...e,...t[e.id]??{}})).sort((e,t)=>e.title.localeCompare(t.title)),o=new Map(a.map(e=>[e.id,e])),s=`<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M7 5l6 5-6 5"/></svg>`,c=`<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M12 4h4v4"/><path d="M16 4l-7 7"/><path d="M14 12v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3"/></svg>`,l=`<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" class="h-4 w-4"><path d="M5 5l10 10M15 5L5 15"/></svg>`;function u(){return`
    <header class="hero-backdrop relative overflow-hidden border-b border-ink-800">
      <div class="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent"></div>

      <nav class="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6">
        <div class="flex items-center gap-3">
          <img src="${n(`janyaa-mark.png`)}" alt="" class="h-9 w-auto" />
          <span class="text-sm font-semibold tracking-tight text-ink-100">Janyaa Interactive</span>
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
    </header>`}function d(e,t){return`
    <article class="card-sheen group relative flex flex-col overflow-hidden rounded-2xl border border-ink-800 bg-ink-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-green-500/60 hover:shadow-glow">
      <div class="flex items-start justify-between gap-4">
        <span class="font-mono text-xs text-ink-600 transition group-hover:text-orange-500">${String(t+1).padStart(2,`0`)}</span>
        <div class="flex flex-wrap justify-end gap-1.5">${(e.tags??[]).map(e=>`<span class="rounded-md border border-ink-700 bg-ink-800 px-2 py-0.5 text-[11px] font-medium text-ink-300">${i(e)}</span>`).join(``)}</div>
      </div>

      <h3 class="mt-4 text-lg font-semibold tracking-tight text-white">${i(e.title)}</h3>

      <p class="mt-2 flex-1 text-sm leading-relaxed text-ink-400">
        ${i(e.description)||`No description provided.`}
      </p>

      <div class="mt-6 flex items-center gap-2">
        <button type="button" data-launch="${i(e.id)}"
                class="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-ink-800 px-4 py-2.5 text-sm font-semibold text-ink-100 transition group-hover:bg-green-500 group-hover:text-black">
          Launch ${s}
        </button>
        <a href="${i(r(e.file))}" target="_blank" rel="noopener"
           title="Open in a new tab"
           class="inline-flex items-center justify-center rounded-lg border border-ink-700 p-2.5 text-ink-400 transition hover:border-orange-500 hover:text-orange-400">
          ${c}<span class="sr-only">Open ${i(e.title)} in a new tab</span>
        </a>
      </div>
    </article>`}function f(){let e=`rounded bg-ink-800 px-1.5 py-0.5 font-mono text-xs text-green-400`;return`
    <div class="rounded-2xl border border-dashed border-ink-700 bg-ink-900 p-10 text-center">
      <p class="text-base font-medium text-white">No simulations found</p>
      <p class="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-400">
        Add standalone HTML files to <code class="${e}">public/sims/</code>, either as
        <code class="${e}">name.html</code> or <code class="${e}">name/index.html</code>.
        Each file's <code class="${e}">&lt;title&gt;</code> and
        <code class="${e}">&lt;meta name="description"&gt;</code> become the card copy.
      </p>
    </div>`}function p(){return`
    <main id="simulations" class="mx-auto max-w-6xl scroll-mt-8 px-6 py-16">
      <div class="flex flex-wrap items-end justify-between gap-4 border-b border-ink-800 pb-6">
        <h2 class="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Simulations</h2>
        <span class="font-mono text-xs text-ink-500">${String(a.length).padStart(2,`0`)} available</span>
      </div>

      ${a.length?`<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
               ${a.map(d).join(``)}
             </div>`:`<div class="mt-10">${f()}</div>`}
    </main>`}function m(){return`
    <footer class="border-t border-ink-800">
      <div class="mx-auto max-w-6xl px-6 py-8 text-sm text-ink-400">
        <a href="https://janyaa.org/" target="_blank" rel="noopener"
           class="transition hover:text-orange-400">
          Developed by the Palo Alto Youth Chapter
        </a>
      </div>
    </footer>`}function h(){return`
    <div id="sim-modal" class="fixed inset-0 z-50 hidden" role="dialog" aria-modal="true" aria-labelledby="sim-modal-title">
      <div data-close class="absolute inset-0 animate-fade-in bg-black/85 backdrop-blur-sm"></div>
      <div class="absolute inset-0 flex flex-col p-3 sm:p-6">
        <div class="relative flex min-h-0 flex-1 animate-fade-up flex-col overflow-hidden rounded-2xl border border-ink-700 bg-ink-900 shadow-2xl">
          <div class="flex items-center justify-between gap-4 border-b border-ink-800 px-5 py-3">
            <h2 id="sim-modal-title" class="truncate text-sm font-semibold text-white"></h2>
            <div class="flex shrink-0 items-center gap-2">
              <a id="sim-modal-open" href="#" target="_blank" rel="noopener"
                 class="inline-flex items-center gap-2 rounded-lg border border-ink-700 px-3 py-1.5 text-xs font-medium text-ink-300 transition hover:border-orange-500 hover:text-orange-400">
                ${c} New tab
              </a>
              <button type="button" data-close
                      class="inline-flex items-center gap-2 rounded-lg bg-ink-800 px-3 py-1.5 text-xs font-medium text-ink-100 transition hover:bg-green-500 hover:text-black">
                ${l} Close
              </button>
            </div>
          </div>
          <iframe id="sim-modal-frame" title="Simulation" class="min-h-0 w-full flex-1 bg-white"></iframe>
        </div>
      </div>
    </div>`}document.querySelector(`#app`).innerHTML=`
  <div class="min-h-screen bg-black">
    ${u()}
    ${p()}
    ${m()}
  </div>
  ${h()}
`;var g=document.querySelector(`#sim-modal`),_=document.querySelector(`#sim-modal-frame`),v=document.querySelector(`#sim-modal-title`),y=document.querySelector(`#sim-modal-open`),b=null;function x(e){let t=o.get(e);if(!t)return;b=document.activeElement;let n=r(t.file);v.textContent=t.title,y.href=n,_.src=n,_.title=t.title,g.classList.remove(`hidden`),document.body.classList.add(`overflow-hidden`),g.querySelector(`[data-close]:not(div)`)?.focus()}function S(){g.classList.add(`hidden`),_.removeAttribute(`src`),document.body.classList.remove(`overflow-hidden`),b?.focus()}document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-launch]`);if(t){x(t.dataset.launch);return}e.target.closest(`[data-close]`)&&S()}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&!g.classList.contains(`hidden`)&&S()});