(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`example-template`,file:`example-template.html`,title:`Example Template`,description:`A placeholder sim showing the file conventions the hub reads. Delete it once your own sims are in public/sims/.`}],t={"example-template":{title:`Example Template`,description:`A placeholder sim showing the file conventions the hub reads. Delete it once your own sims are in public/sims/.`,question:`How does a sim get onto this page?`,tags:[`Placeholder`]}},n=e=>`/janyaa-simulations/sims/${e}`,r=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),i=e.map(e=>({...e,...t[e.id]??{}})),a=new Map(i.map(e=>[e.id,e])),o=`<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M7 5l6 5-6 5"/></svg>`,s=`<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M12 4h4v4"/><path d="M16 4l-7 7"/><path d="M14 12v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3"/></svg>`,c=`<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" class="h-4 w-4"><path d="M5 5l10 10M15 5L5 15"/></svg>`;function l(){return`
    <header class="hero-backdrop relative overflow-hidden border-b border-slate-800/70">
      <div class="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>

      <nav class="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div class="flex items-center gap-3">
          <span class="grid h-9 w-9 place-items-center rounded-lg bg-amber-400 font-semibold text-slate-950">J</span>
          <span class="text-sm font-semibold tracking-tight text-slate-100">
            Janyaa <span class="font-normal text-slate-500">/ Simulation Hub</span>
          </span>
        </div>
        <a href="#simulations"
           class="hidden rounded-lg border border-slate-700/80 px-3.5 py-2 text-sm text-slate-300 transition hover:border-amber-400/60 hover:text-amber-300 sm:block">
          Browse simulations
        </a>
      </nav>

      <div class="relative mx-auto max-w-6xl px-6 pb-24 pt-12 sm:pt-20">
        <p class="animate-fade-up text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
          Science that shows its working
        </p>

        <h1 class="mt-5 max-w-3xl animate-fade-up text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl">
          From doing the experiment<br class="hidden sm:block" />
          to <span class="text-amber-400">seeing the mechanism.</span>
        </h1>

        <figure class="mt-8 max-w-3xl animate-fade-up border-l-2 border-amber-400/70 pl-5 sm:pl-6">
          <blockquote class="text-lg leading-relaxed text-slate-300 sm:text-xl">
            Hands-on workshops build <span class="font-medium text-white">procedural intuition</span>
            (the <span class="text-amber-300">&ldquo;what&rdquo;</span>); these simulations build
            <span class="font-medium text-white">mechanistic intuition</span>
            (the <span class="text-amber-300">&ldquo;why&rdquo;</span>).
          </blockquote>
        </figure>

        <div class="mt-10 grid max-w-3xl animate-fade-up gap-4 sm:grid-cols-2">
          ${u(`In the workshop`,`The &ldquo;what&rdquo;`,`A child builds the circuit, pours the water, watches the needle move. The procedure lands in the hands.`,`slate`)}
          ${u(`In the simulation`,`The &ldquo;why&rdquo;`,`Variables become adjustable. The invisible becomes visible. Cause and effect can be replayed until the model clicks.`,`amber`)}
        </div>

        <div class="mt-10 flex animate-fade-up flex-wrap items-center gap-3">
          <a href="#simulations"
             class="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300">
            Explore the ${i.length} simulation${i.length===1?``:`s`} ${o}
          </a>
          <span class="text-sm text-slate-500">Runs in the browser &middot; no install, no login</span>
        </div>
      </div>
    </header>`}function u(e,t,n,r){return`
    <div class="rounded-2xl border ${r===`amber`?`border-amber-400/30 bg-amber-400/[0.07] text-amber-300`:`border-slate-800 bg-slate-900/50 text-slate-400`} p-5 backdrop-blur-sm">
      <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest">
        <span class="h-1.5 w-1.5 rounded-full ${r===`amber`?`bg-amber-400`:`bg-slate-600`}"></span>${e}
      </div>
      <p class="mt-3 text-base font-medium text-white">${t}</p>
      <p class="mt-1.5 text-sm leading-relaxed text-slate-400">${n}</p>
    </div>`}function d(e,t){return`
    <article class="card-sheen group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-glow">
      <div class="flex items-start justify-between gap-4">
        <span class="font-mono text-xs text-slate-600 transition group-hover:text-amber-400/80">${String(t+1).padStart(2,`0`)}</span>
        <div class="flex flex-wrap justify-end gap-1.5">${(e.tags??[]).map(e=>`<span class="rounded-md border border-slate-700/70 bg-slate-800/50 px-2 py-0.5 text-[11px] font-medium text-slate-400">${r(e)}</span>`).join(``)}</div>
      </div>

      <h3 class="mt-4 text-lg font-semibold tracking-tight text-white">${r(e.title)}</h3>

      ${e.question?`<p class="mt-2 text-sm font-medium italic text-amber-300/90">${r(e.question)}</p>`:``}

      <p class="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
        ${r(e.description)||`Interactive model &mdash; open it to explore the mechanism.`}
      </p>

      <div class="mt-6 flex items-center gap-2">
        <button type="button" data-launch="${r(e.id)}"
                class="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-100 transition group-hover:bg-amber-400 group-hover:text-slate-950">
          Launch ${o}
        </button>
        <a href="${r(n(e.file))}" target="_blank" rel="noopener"
           title="Open in a new tab"
           class="inline-flex items-center justify-center rounded-lg border border-slate-700/80 p-2.5 text-slate-400 transition hover:border-amber-400/60 hover:text-amber-300">
          ${s}<span class="sr-only">Open ${r(e.title)} in a new tab</span>
        </a>
      </div>
    </article>`}function f(){return`
    <div class="rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 p-10 text-center">
      <p class="text-base font-medium text-white">No simulations found yet</p>
      <p class="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-400">
        Drop standalone HTML files into
        <code class="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-xs text-amber-300">public/sims/</code>
        &mdash; either <code class="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-xs text-amber-300">name.html</code>
        or <code class="rounded bg-slate-800 px-1.5 py-0.5 font-mono text-xs text-amber-300">name/index.html</code>.
        Each one is picked up automatically; its <code class="font-mono text-xs text-amber-300">&lt;title&gt;</code>
        and <code class="font-mono text-xs text-amber-300">&lt;meta name="description"&gt;</code> become the card copy.
      </p>
    </div>`}function p(){return`
    <main id="simulations" class="mx-auto max-w-6xl scroll-mt-8 px-6 py-20">
      <div class="flex flex-wrap items-end justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <h2 class="text-2xl font-semibold tracking-tight text-white sm:text-3xl">The simulations</h2>
          <p class="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">
            Each one isolates a single mechanism from the workshop bench and makes it adjustable.
          </p>
        </div>
        <span class="font-mono text-xs text-slate-500">${String(i.length).padStart(2,`0`)} available</span>
      </div>

      ${i.length?`<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
               ${i.map(d).join(``)}
             </div>`:`<div class="mt-10">${f()}</div>`}
    </main>`}function m(){return`
    <footer class="border-t border-slate-800/70">
      <div class="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>Janyaa &middot; Simulation Hub</p>
        <p>Built for the classroom bench and the browser alike.</p>
      </div>
    </footer>`}function h(){return`
    <div id="sim-modal" class="fixed inset-0 z-50 hidden" role="dialog" aria-modal="true" aria-labelledby="sim-modal-title">
      <div data-close class="absolute inset-0 animate-fade-in bg-slate-950/85 backdrop-blur-sm"></div>
      <div class="absolute inset-0 flex flex-col p-3 sm:p-6">
        <div class="relative flex min-h-0 flex-1 animate-fade-up flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
          <div class="flex items-center justify-between gap-4 border-b border-slate-800 px-5 py-3">
            <h2 id="sim-modal-title" class="truncate text-sm font-semibold text-white"></h2>
            <div class="flex shrink-0 items-center gap-2">
              <a id="sim-modal-open" href="#" target="_blank" rel="noopener"
                 class="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-amber-400/60 hover:text-amber-300">
                ${s} New tab
              </a>
              <button type="button" data-close
                      class="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-slate-700">
                ${c} Close
              </button>
            </div>
          </div>
          <iframe id="sim-modal-frame" title="Simulation" class="min-h-0 w-full flex-1 bg-white"></iframe>
        </div>
      </div>
    </div>`}document.querySelector(`#app`).innerHTML=`
  <div class="min-h-screen bg-slate-950">
    ${l()}
    ${p()}
    ${m()}
  </div>
  ${h()}
`;var g=document.querySelector(`#sim-modal`),_=document.querySelector(`#sim-modal-frame`),v=document.querySelector(`#sim-modal-title`),y=document.querySelector(`#sim-modal-open`),b=null;function x(e){let t=a.get(e);if(!t)return;b=document.activeElement;let r=n(t.file);v.textContent=t.title,y.href=r,_.src=r,_.title=t.title,g.classList.remove(`hidden`),document.body.classList.add(`overflow-hidden`),g.querySelector(`[data-close]:not(div)`)?.focus()}function S(){g.classList.add(`hidden`),_.removeAttribute(`src`),document.body.classList.remove(`overflow-hidden`),b?.focus()}document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-launch]`);if(t){x(t.dataset.launch);return}e.target.closest(`[data-close]`)&&S()}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&!g.classList.contains(`hidden`)&&S()});