/**
 * Per-sim card copy, keyed by sim id. This object lists exactly the sims
 * present in public/sims/ — one entry per HTML file.
 *
 * The id is the filename without `.html` (`public/sims/CPU_vs_GPU.html`
 * -> `CPU_vs_GPU`) or the folder name (`public/sims/CPU_vs_GPU/index.html`
 * -> `CPU_vs_GPU`). Anything omitted here falls back to the sim's own
 * <title> and <meta name="description">.
 *
 * Titles are set here because each sim's own <title> carries a
 * "— Janyaa Interactive" suffix that is redundant on this page.
 */
export const simMeta = {
  Cable_Heat: {
    title: 'Cable Heat',
    description:
      "Sets a charging cable's wire thickness, length, and current, then shows how much of the charger's 5 V actually reaches the phone and how warm the cable gets along the way.",
    tags: ['Electronics', 'Physics'],
  },

  Capacitor_Discharge: {
    title: 'Capacitor Discharge',
    description:
      'Charges a power-supply capacitor to 400 V and tracks how much charge is left after the plug is pulled, with a bleed resistor that can be switched in or out mid-discharge.',
    tags: ['Electronics', 'Computers'],
  },

  CPU_vs_GPU: {
    title: 'CPU vs GPU',
    description:
      'Sends one instruction to a 4-unit CPU and a 128-unit GPU of the same chip size, comparing them on repeated identical arithmetic and on work where each item needs its own decision.',
    tags: ['Computers'],
  },

  Memory_Hierarchy: {
    title: 'Memory Hierarchy',
    description:
      'Times a CPU fetch from L1 cache down to a hard drive, restated at one second per nanosecond, with a cache hit-rate slider that recalculates the average wait per lookup.',
    tags: ['Computers'],
  },

  Metal_vs_Wood: {
    title: 'Metal vs Wood',
    description:
      'Holds a wood block and a steel, aluminium, stone, or foam block at the same set temperature, then reports the thermometer reading and the rate each one draws heat from a hand.',
    tags: ['Physics'],
  },

  PC_Bottleneck: {
    title: 'PC Bottleneck',
    description:
      'Pairs a CPU that prepares 45 frames per second with a GPU that draws 120, and recalculates the final frame rate as either component is upgraded by 50%.',
    tags: ['Computers'],
  },

  Square_Cube_Law: {
    title: 'Square-Cube Law',
    description:
      "Scales a cube's edge length with a slider and tracks surface area rising with the square while volume rises with the cube, applied to leg stress and to melting ice.",
    tags: ['Maths', 'Physics'],
  },

  Series_vs_Parallel: {
    title: 'Series vs Parallel',
    description:
      'Fails one bulb in a series strand and in a parallel strand, with a shunt switch that closes the series loop again and makes every surviving bulb burn brighter than before.',
    tags: ['Electronics', 'Physics'],
  },

  SSD_vs_HDD: {
    title: 'SSD vs HDD',
    description:
      'Applies a desk nudge, a knock off a chair, and a waist-height drop to a powered hard drive and an SSD, comparing a head flying 5 nm above the platter with a drive that has no moving parts.',
    tags: ['Computers'],
  },

  Twos_Complement: {
    title: "Two's Complement",
    description:
      "Compares two ways of reading the same 4 bits to show why whether an addition 'overflowed' depends entirely on how those bits are interpreted.",
    tags: ['Computers', 'Maths'],
  },

  USB_Charging: {
    title: 'USB Charging',
    description:
      'Charges two phone batteries from a 2.4 A wall charger and a 0.5 A laptop port held at the same 5 V, so the fill rates differ only by the current each port allows.',
    tags: ['Electronics', 'Computers'],
  },
}
