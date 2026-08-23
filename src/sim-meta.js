/**
 * Per-sim card copy, keyed by sim id. This object lists exactly the sims
 * present in public/sims/ — one entry per HTML file.
 *
 * The id is the filename without `.html` (`public/sims/CPU_vs_GPU.html`
 * -> `CPU_vs_GPU`) or the folder name (`public/sims/CPU_vs_GPU/index.html`
 * -> `CPU_vs_GPU`). Anything omitted here falls back to the sim's own
 * <title> and <meta name="description">.
 *
 * Titles, investigation questions, descriptions, and track tags live here so
 * the landing page stays concise without duplicating catalog data elsewhere.
 */
export const simMeta = {
  Binary_vs_Linear_Search: {
    title: 'Binary vs Linear Search',
    question: 'Why is repeatedly halving a search so much faster?',
    description:
      'Compare checking values in order with halving the remaining range while searching the same list.',
    tags: ['Computers', 'Maths'],
  },

  Cable_Heat: {
    title: 'Cable Heat',
    question: 'Why does a charging cable get warm?',
    description:
      'Vary wire thickness, length, and current to see how resistance produces voltage drop and heat.',
    tags: ['Electronics', 'Physics'],
  },

  Capacitor_Discharge: {
    title: 'Capacitor Discharge',
    question: 'Why can a capacitor retain charge after power is removed?',
    description:
      'Unplug a charged power-supply capacitor and compare its decay with and without a bleed resistor.',
    tags: ['Electronics', 'Computers'],
  },

  CPU_vs_GPU: {
    title: 'CPU vs GPU',
    question: 'Why are GPUs so useful for highly parallel workloads?',
    description:
      'Compare a few flexible CPU units with many GPU units on parallel arithmetic and branching work.',
    tags: ['Computers'],
  },

  Memory_Hierarchy: {
    title: 'Memory Hierarchy',
    question: 'Why does data location change CPU waiting time so dramatically?',
    description:
      'Scale fetch delays from L1 cache to hard drive and see how cache hit rate changes average wait.',
    tags: ['Computers'],
  },

  Metal_vs_Wood: {
    title: 'Metal vs Wood',
    question: 'Why can two materials at the same temperature feel different?',
    description:
      'Hold materials at one temperature while comparing how quickly each draws heat from your hand.',
    tags: ['Physics'],
  },

  Password_Crack_Time: {
    title: 'Password Crack Time',
    question: 'Why can one extra character change brute-force search time so dramatically?',
    description:
      'Change password length and character set to see how the number of possible guesses grows.',
    tags: ['Computers', 'Maths'],
  },

  PC_Bottleneck: {
    title: 'PC Bottleneck',
    question: 'Which component should you actually upgrade?',
    description:
      'Compare CPU and GPU frame limits, then upgrade either component to find the real bottleneck.',
    tags: ['Computers'],
  },

  Resonance: {
    title: 'Resonance',
    question: 'Why can timing matter more than push strength?',
    description:
      "Keep every push equally strong while changing its rhythm around a swing's natural frequency.",
    tags: ['Physics'],
  },

  Square_Cube_Law: {
    title: 'Square-Cube Law',
    question: 'What changes when an object is scaled up proportionally?',
    description:
      'Scale an object and track how surface area and volume grow at different rates.',
    tags: ['Maths', 'Physics'],
  },

  Series_vs_Parallel: {
    title: 'Series vs Parallel',
    question: 'Why does one failure affect series and parallel circuits differently?',
    description:
      'Fail one bulb in each circuit, then use a shunt to see how the current paths change.',
    tags: ['Electronics', 'Physics'],
  },

  SSD_vs_HDD: {
    title: 'SSD vs HDD',
    question: 'Why can an SSD handle shocks differently from a hard drive?',
    description:
      'Apply three impacts to a powered hard drive and an SSD while comparing their internal structures.',
    tags: ['Computers'],
  },

  Twos_Complement: {
    title: "Two's Complement",
    question: 'How can the same bits represent different values?',
    description:
      'Read the same four bits as unsigned and two’s-complement values, then compare overflow.',
    tags: ['Computers', 'Maths'],
  },

  Variable_Swap: {
    title: 'Variable Swap',
    question: "Why doesn't the obvious way to swap two variables work?",
    description:
      'Step through a failed swap, then preserve the overwritten value with a temporary variable.',
    tags: ['Computers'],
  },

  USB_Charging: {
    title: 'USB Charging',
    question: 'Why can equal-voltage ports charge a phone at different rates?',
    description:
      'Compare two 5 V sources with different current limits while watching identical batteries fill.',
    tags: ['Electronics', 'Computers'],
  },
}
