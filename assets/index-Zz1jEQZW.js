(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`Binary_vs_Linear_Search`,file:`Binary_vs_Linear_Search.html`,title:`Halving your way to the answer — Janyaa Interactive`,description:`Races two search strategies over the same hidden number to show why repeatedly halving a range finds an answer far faster than checking one at a time.`},{id:`Password_Crack_Time`,file:`Password_Crack_Time.html`,title:`How long to guess your password — Janyaa Interactive`,description:`Calculates how long a fast attacker would need to guess a password to show why length and character variety matter exponentially, not just a little.`},{id:`Metal_vs_Wood`,file:`Metal_vs_Wood.html`,title:`Metal is not colder than wood — Janyaa Interactive`,description:`Compares heat flow between metal and wood blocks at the same temperature to show why metal feels colder to the touch.`},{id:`Twos_Complement`,file:`Twos_Complement.html`,title:`Same bits. Two different answers. — Janyaa Interactive`,description:`Compares two ways of reading the same bits to show why number overflow depends on how those bits are interpreted.`},{id:`USB_Charging`,file:`USB_Charging.html`,title:`Same voltage, 4.8 times the speed — Janyaa Interactive`,description:`Races a wall charger against a laptop port at the same voltage to show why current, not voltage, limits charging speed.`},{id:`Resonance`,file:`Resonance.html`,title:`The right rhythm, not the hardest push — Janyaa Interactive`,description:`Simulates pushing a swing at different rhythms to show why matching a system's natural frequency produces a dramatically larger response than pushing harder off-rhythm.`},{id:`Variable_Swap`,file:`Variable_Swap.html`,title:`The swap that doesn't work — Janyaa Interactive`,description:`Steps through a broken variable swap and its fix to show that assignment copies a value rather than linking two variables.`},{id:`Memory_Hierarchy`,file:`Memory_Hierarchy.html`,title:`Where your data lives — Janyaa Interactive`,description:`Scales computer memory access times to human time to show why CPUs spend most cycles waiting on data.`},{id:`SSD_vs_HDD`,file:`SSD_vs_HDD.html`,title:`Why a bump kills a hard drive — Janyaa Interactive`,description:`Simulates a physical shock test to show why solid-state drives survive drops that can crash a spinning hard drive.`},{id:`Cable_Heat`,file:`Cable_Heat.html`,title:`Why a cheap charging cable gets warm — Janyaa Interactive`,description:`Models resistance in a charging cable to show why thin or long cables run warm and charge slowly.`},{id:`CPU_vs_GPU`,file:`CPU_vs_GPU.html`,title:`Why AI trains on a GPU — Janyaa Interactive`,description:`Compares CPU and GPU chip layouts to show why GPUs process AI training tasks in parallel far faster than CPUs.`},{id:`Capacitor_Discharge`,file:`Capacitor_Discharge.html`,title:`Why an unplugged PSU can still shock you — Janyaa Interactive`,description:`Simulates a charged capacitor after unplugging to show why a power supply can still be dangerous even when disconnected.`},{id:`Series_vs_Parallel`,file:`Series_vs_Parallel.html`,title:`Why one dead bulb doesn't kill the strand anymore — Janyaa Interactive`,description:`Compares series and parallel bulb strands to show why one failed bulb doesn't always turn off the rest.`},{id:`PC_Bottleneck`,file:`PC_Bottleneck.html`,title:`Why the expensive upgrade did nothing — Janyaa Interactive`,description:`Models a CPU-GPU assembly line to show why upgrading the wrong PC part doesn't improve performance.`},{id:`Square_Cube_Law`,file:`Square_Cube_Law.html`,title:`Why there are no giant ants — Janyaa Interactive`,description:`Grows a cube step by step to show why surface area and volume scale differently as objects get bigger.`}],t={Binary_vs_Linear_Search:{title:`Binary vs Linear Search`,description:`Races a searcher that checks 1, 2, 3 in order against one that halves the remaining range every guess, over the same hidden number in a list of up to 1000.`,tags:[`Computers`,`Maths`]},Cable_Heat:{title:`Cable Heat`,description:`Sets a charging cable's wire thickness, length, and current, then shows how much of the charger's 5 V actually reaches the phone and how warm the cable gets along the way.`,tags:[`Electronics`,`Physics`]},Capacitor_Discharge:{title:`Capacitor Discharge`,description:`Charges a power-supply capacitor to 400 V and tracks how much charge is left after the plug is pulled, with a bleed resistor that can be switched in or out mid-discharge.`,tags:[`Electronics`,`Computers`]},CPU_vs_GPU:{title:`CPU vs GPU`,description:`Sends one instruction to a 4-unit CPU and a 128-unit GPU of the same chip size, comparing them on repeated identical arithmetic and on work where each item needs its own decision.`,tags:[`Computers`]},Memory_Hierarchy:{title:`Memory Hierarchy`,description:`Times a CPU fetch from L1 cache down to a hard drive, restated at one second per nanosecond, with a cache hit-rate slider that recalculates the average wait per lookup.`,tags:[`Computers`]},Metal_vs_Wood:{title:`Metal vs Wood`,description:`Holds a wood block and a steel, aluminium, stone, or foam block at the same set temperature, then reports the thermometer reading and the rate each one draws heat from a hand.`,tags:[`Physics`]},Password_Crack_Time:{title:`Password Crack Time`,description:`Sets a password length and character set, then reports in plain words how long an attacker guessing a billion times a second needs to try every possibility, against milestones up to the age of the universe.`,tags:[`Computers`,`Maths`]},PC_Bottleneck:{title:`PC Bottleneck`,description:`Pairs a CPU that prepares 45 frames per second with a GPU that draws 120, and recalculates the final frame rate as either component is upgraded by 50%.`,tags:[`Computers`]},Resonance:{title:`Resonance`,description:`Pushes a swing at rhythms from half to twice its own, with every push the same strength, so the sharp peak that appears only when the rhythms match is the swing's doing rather than the pusher's.`,tags:[`Physics`]},Square_Cube_Law:{title:`Square-Cube Law`,description:`Scales a cube's edge length with a slider and tracks surface area rising with the square while volume rises with the cube, applied to leg stress and to melting ice.`,tags:[`Maths`,`Physics`]},Series_vs_Parallel:{title:`Series vs Parallel`,description:`Fails one bulb in a series strand and in a parallel strand, with a shunt switch that closes the series loop again and makes every surviving bulb burn brighter than before.`,tags:[`Electronics`,`Physics`]},SSD_vs_HDD:{title:`SSD vs HDD`,description:`Applies a desk nudge, a knock off a chair, and a waist-height drop to a powered hard drive and an SSD, comparing a head flying 5 nm above the platter with a drive that has no moving parts.`,tags:[`Computers`]},Twos_Complement:{title:`Two's Complement`,description:`Compares two ways of reading the same 4 bits to show why whether an addition 'overflowed' depends entirely on how those bits are interpreted.`,tags:[`Computers`,`Maths`]},Variable_Swap:{title:`Variable Swap`,description:`Steps one line at a time through a four-line program that tries to swap two numbers and destroys one of them, then fixes it with a third box that catches the value before it is overwritten.`,tags:[`Computers`]},USB_Charging:{title:`USB Charging`,description:`Charges two phone batteries from a 2.4 A wall charger and a 0.5 A laptop port held at the same 5 V, so the fill rates differ only by the current each port allows.`,tags:[`Electronics`,`Computers`]}},n=e=>`/janyaa-simulations/${e}`,r=e=>n(`sims/${e}`),i=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),a=e.map(e=>({...e,...t[e.id]??{}})).sort((e,t)=>e.title.localeCompare(t.title)),o=new Map(a.map(e=>[e.id,e])),s=`<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M7 5l6 5-6 5"/></svg>`,c=`<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="M12 4h4v4"/><path d="M16 4l-7 7"/><path d="M14 12v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3"/></svg>`,l=`<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" class="h-4 w-4"><path d="M5 5l10 10M15 5L5 15"/></svg>`;function u(){return`
    <header class="hero-backdrop relative overflow-hidden border-b border-border">
      <div class="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-paper to-transparent"></div>

      <nav class="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-6">
        <div class="flex items-center gap-3">
          <img src="${n(`janyaa-mark.png`)}" alt="" class="h-9 w-auto" />
          <span class="text-sm font-semibold tracking-tight text-ink">Janyaa Interactive</span>
        </div>
        <a href="#simulations"
           class="rounded-lg border border-border px-3.5 py-2 text-sm text-dim transition hover:border-blue hover:text-blue">
          Browse simulations
        </a>
      </nav>

      <div class="relative mx-auto max-w-6xl px-6 pb-20 pt-12 sm:pb-24 sm:pt-16">
        <h1 class="animate-fade-up text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Janyaa Interactive
        </h1>
        <p class="mt-4 max-w-2xl animate-fade-up text-lg leading-relaxed text-dim">
          Interactive STEM simulations for hands-on workshops.
        </p>
      </div>
    </header>`}function d(e,t){return`
    <article class="card-sheen group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-panel p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-blue/60 hover:shadow-glow">
      <div class="flex items-start justify-between gap-4">
        <span class="font-mono text-xs text-dim transition group-hover:text-blue">${String(t+1).padStart(2,`0`)}</span>
        <div class="flex flex-wrap justify-end gap-1.5">${(e.tags??[]).map(e=>`<span class="rounded-md border border-border bg-strip px-2 py-0.5 text-[11px] font-medium text-dim">${i(e)}</span>`).join(``)}</div>
      </div>

      <h3 class="mt-4 text-lg font-semibold tracking-tight text-ink">${i(e.title)}</h3>

      <p class="mt-2 flex-1 text-sm leading-relaxed text-dim">
        ${i(e.description)||`No description provided.`}
      </p>

      <div class="mt-6 flex items-center gap-2">
        <button type="button" data-launch="${i(e.id)}"
                class="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-scene px-4 py-2.5 text-sm font-semibold text-ink transition group-hover:bg-blue group-hover:text-panel">
          Launch ${s}
        </button>
        <a href="${i(r(e.file))}" target="_blank" rel="noopener"
           title="Open in a new tab"
           class="inline-flex items-center justify-center rounded-lg border border-border p-2.5 text-dim transition hover:border-blue hover:text-blue">
          ${c}<span class="sr-only">Open ${i(e.title)} in a new tab</span>
        </a>
      </div>
    </article>`}function f(){let e=`rounded bg-scene px-1.5 py-0.5 font-mono text-xs text-blue`;return`
    <div class="rounded-2xl border border-dashed border-border bg-panel p-10 text-center">
      <p class="text-base font-medium text-ink">No simulations found</p>
      <p class="mx-auto mt-2 max-w-md text-sm leading-relaxed text-dim">
        Add standalone HTML files to <code class="${e}">public/sims/</code>, either as
        <code class="${e}">name.html</code> or <code class="${e}">name/index.html</code>.
        Each file's <code class="${e}">&lt;title&gt;</code> and
        <code class="${e}">&lt;meta name="description"&gt;</code> become the card copy.
      </p>
    </div>`}function p(){return`
    <main id="simulations" class="mx-auto max-w-6xl scroll-mt-8 px-6 py-16">
      <div class="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
        <h2 class="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">Simulations</h2>
        <span class="font-mono text-xs text-dim">${String(a.length).padStart(2,`0`)} available</span>
      </div>

      ${a.length?`<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
               ${a.map(d).join(``)}
             </div>`:`<div class="mt-10">${f()}</div>`}
    </main>`}function m(){return`
    <footer class="border-t border-border">
      <div class="mx-auto max-w-6xl px-6 py-8 text-sm text-dim">
        <a href="https://janyaa.org/" target="_blank" rel="noopener"
           class="transition hover:text-blue">
          Developed by the Palo Alto Youth Chapter
        </a>
      </div>
    </footer>`}function h(){return`
    <div id="sim-modal" class="fixed inset-0 z-50 hidden" role="dialog" aria-modal="true" aria-labelledby="sim-modal-title">
      <div data-close class="absolute inset-0 animate-fade-in bg-ink/70 backdrop-blur-sm"></div>
      <div class="absolute inset-0 flex flex-col p-3 sm:p-6">
        <div class="relative flex min-h-0 flex-1 animate-fade-up flex-col overflow-hidden rounded-2xl border border-border bg-panel shadow-2xl">
          <div class="flex items-center justify-between gap-4 border-b border-border px-5 py-3">
            <h2 id="sim-modal-title" class="truncate text-sm font-semibold text-ink"></h2>
            <div class="flex shrink-0 items-center gap-2">
              <a id="sim-modal-open" href="#" target="_blank" rel="noopener"
                 class="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-dim transition hover:border-blue hover:text-blue">
                ${c} New tab
              </a>
              <button type="button" data-close
                      class="inline-flex items-center gap-2 rounded-lg bg-scene px-3 py-1.5 text-xs font-medium text-ink transition hover:bg-blue hover:text-panel">
                ${l} Close
              </button>
            </div>
          </div>
          <iframe id="sim-modal-frame" title="Simulation" class="min-h-0 w-full flex-1 bg-paper"></iframe>
        </div>
      </div>
    </div>`}document.querySelector(`#app`).innerHTML=`
  <div class="min-h-screen bg-paper">
    ${u()}
    ${p()}
    ${m()}
  </div>
  ${h()}
`;var g=document.querySelector(`#sim-modal`),_=document.querySelector(`#sim-modal-frame`),v=document.querySelector(`#sim-modal-title`),y=document.querySelector(`#sim-modal-open`),b=null;function x(e){let t=o.get(e);if(!t)return;b=document.activeElement;let n=r(t.file);v.textContent=t.title,y.href=n,_.src=n,_.title=t.title,g.classList.remove(`hidden`),document.body.classList.add(`overflow-hidden`),g.querySelector(`[data-close]:not(div)`)?.focus()}function S(){g.classList.add(`hidden`),_.removeAttribute(`src`),document.body.classList.remove(`overflow-hidden`),b?.focus()}document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-launch]`);if(t){x(t.dataset.launch);return}e.target.closest(`[data-close]`)&&S()}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&!g.classList.contains(`hidden`)&&S()});