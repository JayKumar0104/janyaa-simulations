(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`Binary_vs_Linear_Search`,file:`Binary_vs_Linear_Search.html`,title:`Halving your way to the answer — PRISM`,description:`Races two search strategies over the same hidden number to show why repeatedly halving a range finds an answer far faster than checking one at a time.`},{id:`Password_Crack_Time`,file:`Password_Crack_Time.html`,title:`How long to guess your password — PRISM`,description:`Calculates how long a fast attacker would need to guess a password to show why length and character variety matter exponentially, not just a little.`},{id:`Metal_vs_Wood`,file:`Metal_vs_Wood.html`,title:`Metal is not colder than wood — PRISM`,description:`Compares heat flow between metal and wood blocks at the same temperature to show why metal feels colder to the touch.`},{id:`Twos_Complement`,file:`Twos_Complement.html`,title:`Same bits. Two different answers. — PRISM`,description:`Compares two ways of reading the same bits to show why number overflow depends on how those bits are interpreted.`},{id:`USB_Charging`,file:`USB_Charging.html`,title:`Same voltage, 4.8 times the speed — PRISM`,description:`Races a wall charger against a laptop port at the same voltage to show why current, not voltage, limits charging speed.`},{id:`Resonance`,file:`Resonance.html`,title:`The right rhythm, not the hardest push — PRISM`,description:`Simulates pushing a swing at different rhythms to show why matching a system's natural frequency produces a dramatically larger response than pushing harder off-rhythm.`},{id:`Variable_Swap`,file:`Variable_Swap.html`,title:`The swap that doesn't work — PRISM`,description:`Steps through a broken variable swap and its fix to show that assignment copies a value rather than linking two variables.`},{id:`Memory_Hierarchy`,file:`Memory_Hierarchy.html`,title:`Where your data lives — PRISM`,description:`Scales computer memory access times to human time to show why CPUs spend most cycles waiting on data.`},{id:`SSD_vs_HDD`,file:`SSD_vs_HDD.html`,title:`Why a bump kills a hard drive — PRISM`,description:`Simulates a physical shock test to show why solid-state drives survive drops that can crash a spinning hard drive.`},{id:`Cable_Heat`,file:`Cable_Heat.html`,title:`Why a cheap charging cable gets warm — PRISM`,description:`Models resistance in a charging cable to show why thin or long cables run warm and charge slowly.`},{id:`CPU_vs_GPU`,file:`CPU_vs_GPU.html`,title:`Why AI trains on a GPU — PRISM`,description:`Compares CPU and GPU chip layouts to show why GPUs process AI training tasks in parallel far faster than CPUs.`},{id:`Capacitor_Discharge`,file:`Capacitor_Discharge.html`,title:`Why an unplugged PSU can still shock you — PRISM`,description:`Simulates a charged capacitor after unplugging to show why a power supply can still be dangerous even when disconnected.`},{id:`Series_vs_Parallel`,file:`Series_vs_Parallel.html`,title:`Why one dead bulb doesn't kill the strand anymore — PRISM`,description:`Compares series and parallel bulb strands to show why one failed bulb doesn't always turn off the rest.`},{id:`PC_Bottleneck`,file:`PC_Bottleneck.html`,title:`Why the expensive upgrade did nothing — PRISM`,description:`Models a CPU-GPU assembly line to show why upgrading the wrong PC part doesn't improve performance.`},{id:`Square_Cube_Law`,file:`Square_Cube_Law.html`,title:`Why there are no giant ants — PRISM`,description:`Grows a cube step by step to show why surface area and volume scale differently as objects get bigger.`}],t={Binary_vs_Linear_Search:{title:`Binary vs Linear Search`,question:`Why is repeatedly halving a search so much faster?`,description:`Compare checking values in order with halving the remaining range while searching the same list.`,tags:[`Computers`,`Maths`]},Cable_Heat:{title:`Cable Heat`,question:`Why does a charging cable get warm?`,description:`Vary wire thickness, length, and current to see how resistance produces voltage drop and heat.`,tags:[`Electronics`,`Physics`]},Capacitor_Discharge:{title:`Capacitor Discharge`,question:`Why can a capacitor retain charge after power is removed?`,description:`Unplug a charged power-supply capacitor and compare its decay with and without a bleed resistor.`,tags:[`Electronics`,`Computers`]},CPU_vs_GPU:{title:`CPU vs GPU`,question:`Why are GPUs so useful for highly parallel workloads?`,description:`Compare a few flexible CPU units with many GPU units on parallel arithmetic and branching work.`,tags:[`Computers`]},Memory_Hierarchy:{title:`Memory Hierarchy`,question:`Why does data location change CPU waiting time so dramatically?`,description:`Scale fetch delays from L1 cache to hard drive and see how cache hit rate changes average wait.`,tags:[`Computers`]},Metal_vs_Wood:{title:`Metal vs Wood`,question:`Why can two materials at the same temperature feel different?`,description:`Hold materials at one temperature while comparing how quickly each draws heat from your hand.`,tags:[`Physics`]},Password_Crack_Time:{title:`Password Crack Time`,question:`Why can one extra character change brute-force search time so dramatically?`,description:`Change password length and character set to see how the number of possible guesses grows.`,tags:[`Computers`,`Maths`]},PC_Bottleneck:{title:`PC Bottleneck`,question:`Which component should you actually upgrade?`,description:`Compare CPU and GPU frame limits, then upgrade either component to find the real bottleneck.`,tags:[`Computers`]},Resonance:{title:`Resonance`,question:`Why can timing matter more than push strength?`,description:`Keep every push equally strong while changing its rhythm around a swing's natural frequency.`,tags:[`Physics`]},Square_Cube_Law:{title:`Square-Cube Law`,question:`What changes when an object is scaled up proportionally?`,description:`Scale an object and track how surface area and volume grow at different rates.`,tags:[`Maths`,`Physics`]},Series_vs_Parallel:{title:`Series vs Parallel`,question:`Why does one failure affect series and parallel circuits differently?`,description:`Fail one bulb in each circuit, then use a shunt to see how the current paths change.`,tags:[`Electronics`,`Physics`]},SSD_vs_HDD:{title:`SSD vs HDD`,question:`Why can an SSD handle shocks differently from a hard drive?`,description:`Apply three impacts to a powered hard drive and an SSD while comparing their internal structures.`,tags:[`Computers`]},Twos_Complement:{title:`Two's Complement`,question:`How can the same bits represent different values?`,description:`Read the same four bits as unsigned and two’s-complement values, then compare overflow.`,tags:[`Computers`,`Maths`]},Variable_Swap:{title:`Variable Swap`,question:`Why doesn't the obvious way to swap two variables work?`,description:`Step through a failed swap, then preserve the overwritten value with a temporary variable.`,tags:[`Computers`]},USB_Charging:{title:`USB Charging`,question:`Why can equal-voltage ports charge a phone at different rates?`,description:`Compare two 5 V sources with different current limits while watching identical batteries fill.`,tags:[`Electronics`,`Computers`]}},n=e=>`/janyaa-simulations/${e}`,r=e=>n(`sims/${e}`),i=e=>String(e??``).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]),a=e.map(e=>({...e,...t[e.id]??{}})).sort((e,t)=>e.title.localeCompare(t.title)),o=new Map(a.map(e=>[e.id,e])),s=[`All`,`Computers`,`Electronics`,`Physics`,`Math`],c=e=>e===`Maths`?`Math`:e,l=(e,t)=>t===`All`||(e.tags??[]).some(e=>c(e)===t),u=`<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true"><path d="M7 5l6 5-6 5"/></svg>`,d=`<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" aria-hidden="true"><path d="M12 4h4v4"/><path d="M16 4l-7 7"/><path d="M14 12v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3"/></svg>`,f=`<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" class="h-4 w-4" aria-hidden="true"><path d="M5 5l10 10M15 5L5 15"/></svg>`;function p(){return`
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
                <a href="#simulations" class="button-primary">Explore simulations ${u}</a>
                <a href="#how-it-works" class="button-secondary">How PRISM works</a>
              </div>
            </div>

            <aside class="hero-stats animate-fade-up" aria-label="PRISM at a glance">
              <div class="stat-block">
                <strong>${a.length}</strong>
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
    </header>`}function m(){return`
    <section id="how-it-works" class="section-shell scroll-mt-24" aria-labelledby="how-title">
      <div class="section-heading">
        <p class="eyebrow">A focused learning loop</p>
        <h2 id="how-title">How PRISM works</h2>
        <p>PRISM supplements the physical activity by exposing the causal mechanism that may otherwise remain hidden.</p>
      </div>
      <div class="mt-8 grid gap-4 md:grid-cols-3">
        ${[[`01`,`Predict`,`Commit to a mental model before seeing the result.`],[`02`,`Interact`,`Manipulate the causal variable the hands-on activity cannot expose directly.`],[`03`,`Explain`,`Observe what changes and explain the mechanism behind the result.`]].map(([e,t,n])=>`
              <article class="method-card">
                <span class="method-number" aria-hidden="true">${e}</span>
                <h3>${t}</h3>
                <p>${n}</p>
              </article>`).join(``)}
      </div>
    </section>`}function h(e,t){let n=String(t+1).padStart(2,`0`),a=e.question||`What hidden mechanism can this simulation help reveal?`;return`
    <article class="simulation-card group">
      <div class="flex items-start justify-between gap-4">
        <span class="font-mono text-xs text-dim" aria-hidden="true">${n}</span>
        <div class="flex flex-wrap justify-end gap-1.5">${(e.tags??[]).map(e=>`<span class="track-pill">${i(c(e))}</span>`).join(``)}</div>
      </div>
      <h3>${i(e.title)}</h3>
      <p class="card-question">${i(a)}</p>
      <p class="card-description">${i(e.description)||`No description provided.`}</p>
      <div class="mt-5 flex items-center gap-2">
        <button type="button" data-launch="${i(e.id)}" class="launch-button">
          Launch simulation ${u}
        </button>
        <a href="${i(r(e.file))}" target="_blank" rel="noopener"
           title="Open ${i(e.title)} in a new tab" class="external-button">
          ${d}<span class="sr-only">Open ${i(e.title)} in a new tab</span>
        </a>
      </div>
    </article>`}function g(e=`All`){return a.filter(t=>l(t,e)).map(h).join(``)}function _(){return`
    <div class="col-span-full rounded-2xl border border-dashed border-green/30 bg-panel p-10 text-center">
      <p class="font-medium text-ink">No simulations match this track yet.</p>
    </div>`}function v(){return`
    <section id="simulations" class="library-section scroll-mt-20" aria-labelledby="simulations-title">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div class="section-heading">
          <p class="eyebrow">Working library</p>
          <h2 id="simulations-title">Explore the simulations</h2>
          <p>${a.length} working simulations across computing, electronics, physics, and math.</p>
        </div>

        <div class="mt-8 flex flex-col gap-4 border-b border-green/20 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div class="flex flex-wrap gap-2" role="group" aria-label="Filter simulations by STEM track">
            ${s.map(e=>`
                <button type="button" class="filter-button" data-filter="${e}"
                        aria-pressed="${e===`All`}" aria-controls="simulation-grid">
                  ${e}
                </button>`).join(``)}
          </div>
          <p id="simulation-count" class="shrink-0 font-mono text-xs text-dim" aria-live="polite">
            ${a.length} simulations
          </p>
        </div>

        <div id="simulation-grid" class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          ${g()||_()}
        </div>
      </div>
    </section>`}function y(){let e=[[`01`,`Specify`,`Define the workshop question, hidden mechanism, technical model, meaningful variables, assumptions, simplifications, and intended takeaway.`],[`02`,`Build`,`Use AI-assisted software development to accelerate interface implementation, visualization, and iteration.`],[`03`,`Verify`,`Human review checks the mathematics or technical model, assumptions, simplifications, and resulting simulation behavior.`],[`04`,`Publish`,`Add the verified simulation to the shared open-source library.`]];return`
    <section id="built-to-grow" class="section-shell scroll-mt-24" aria-labelledby="grow-title">
      <div class="section-heading">
        <p class="eyebrow">A repeatable authoring process</p>
        <h2 id="grow-title">Built to grow</h2>
        <p>The ${a.length} simulations are a working proof of concept for a repeatable authoring process, not a fixed endpoint.</p>
      </div>

      <div class="process-track mt-9">
        ${e.map(([t,n,r],i)=>`
              <article class="process-step">
                <span aria-hidden="true">${t}</span>
                <h3>${n}</h3>
                <p>${r}</p>
              </article>
              ${i<e.length-1?`<span class="process-arrow" aria-hidden="true"></span>`:``}`).join(``)}
      </div>

      <p class="verification-principle">
        <span>Human verification stays central.</span>
        AI reduces implementation friction; it does not replace technical verification.
      </p>
    </section>`}function b(){return`
    <section id="about" class="mx-auto max-w-7xl scroll-mt-24 px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8" aria-labelledby="about-title">
      <div class="about-card">
        <div>
          <p class="eyebrow">Complement, not replacement</p>
          <h2 id="about-title">Built for the invisible layer of hands-on STEM</h2>
        </div>
        <div class="space-y-4 text-base leading-relaxed text-dim">
          <p>Hands-on workshops provide the real system and physical context.</p>
          <p>Some important mechanisms, however, are too small, too fast, abstract, internal, or distributed to observe directly. PRISM is designed to expose those mechanisms interactively rather than replace the physical experience.</p>
          <p class="status-note"><strong>Current status:</strong> ${a.length} functioning simulations demonstrate the method across several STEM areas. Educational-impact validation is a future, local evaluation step.</p>
        </div>
      </div>
    </section>`}function x(){return`
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
    </footer>`}function S(){return`
    <div id="sim-modal" class="fixed inset-0 z-50 hidden" role="dialog" aria-modal="true"
         aria-labelledby="sim-modal-title" aria-hidden="true">
      <div data-close class="absolute inset-0 animate-fade-in bg-ink/70 backdrop-blur-sm"></div>
      <div class="pointer-events-none absolute inset-0 flex flex-col p-2 sm:p-6">
        <div class="pointer-events-auto relative flex min-h-0 flex-1 animate-fade-up flex-col overflow-hidden rounded-2xl border border-border bg-panel shadow-2xl">
          <div class="flex items-center justify-between gap-3 border-b border-border px-3 py-3 sm:px-5">
            <h2 id="sim-modal-title" class="min-w-0 truncate text-sm font-semibold text-ink"></h2>
            <div class="flex shrink-0 items-center gap-2">
              <a id="sim-modal-open" href="#" target="_blank" rel="noopener" class="modal-action">
                ${d} <span class="hidden sm:inline">New tab</span><span class="sr-only">Open simulation in a new tab</span>
              </a>
              <button type="button" data-close class="modal-close">
                ${f} <span class="hidden sm:inline">Close</span><span class="sr-only sm:hidden">Close simulation</span>
              </button>
            </div>
          </div>
          <iframe id="sim-modal-frame" title="Interactive simulation" class="min-h-0 w-full flex-1 bg-paper"></iframe>
        </div>
      </div>
    </div>`}document.querySelector(`#app`).innerHTML=`
  <div id="site-shell" class="min-h-screen bg-paper">
    ${p()}
    <main>
      ${m()}
      ${v()}
      ${y()}
      ${b()}
    </main>
    ${x()}
  </div>
  ${S()}
`;var C=document.querySelector(`#simulation-grid`),w=document.querySelector(`#simulation-count`),T=[...document.querySelectorAll(`[data-filter]`)];function E(e){let t=a.filter(t=>l(t,e));C.innerHTML=t.length?t.map(h).join(``):_(),w.textContent=`${t.length} simulation${t.length===1?``:`s`}${e===`All`?``:` · ${e}`}`,T.forEach(t=>{t.setAttribute(`aria-pressed`,String(t.dataset.filter===e))})}T.forEach(e=>{e.addEventListener(`click`,()=>E(e.dataset.filter))});var D=document.querySelector(`#sim-modal`),O=document.querySelector(`#site-shell`),k=document.querySelector(`#sim-modal-frame`),A=document.querySelector(`#sim-modal-title`),j=document.querySelector(`#sim-modal-open`),M=null;function N(e){let t=o.get(e);if(!t)return;M=document.activeElement;let n=r(t.file);A.textContent=t.title,j.href=n,j.setAttribute(`aria-label`,`Open ${t.title} in a new tab`),k.src=n,k.title=`${t.title} interactive simulation`,D.classList.remove(`hidden`),D.setAttribute(`aria-hidden`,`false`),O.inert=!0,O.setAttribute(`aria-hidden`,`true`),document.body.classList.add(`overflow-hidden`),D.querySelector(`button[data-close]`)?.focus()}function P(){D.classList.contains(`hidden`)||(D.classList.add(`hidden`),D.setAttribute(`aria-hidden`,`true`),O.inert=!1,O.removeAttribute(`aria-hidden`),k.removeAttribute(`src`),document.body.classList.remove(`overflow-hidden`),M?.isConnected&&M.focus())}document.addEventListener(`click`,e=>{let t=e.target.closest(`[data-launch]`);if(t){N(t.dataset.launch);return}e.target.closest(`[data-close]`)&&P()}),document.addEventListener(`keydown`,e=>{if(D.classList.contains(`hidden`))return;if(e.key===`Escape`){e.preventDefault(),P();return}if(e.key!==`Tab`)return;let t=[...D.querySelectorAll(`a[href], button:not([disabled]), iframe`)],n=t[0],r=t.at(-1);e.shiftKey&&document.activeElement===n?(e.preventDefault(),r?.focus()):!e.shiftKey&&document.activeElement===r&&(e.preventDefault(),n?.focus())}),document.addEventListener(`focusin`,e=>{!D.classList.contains(`hidden`)&&!D.contains(e.target)&&D.querySelector(`button[data-close]`)?.focus()});