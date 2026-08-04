/**
 * Optional per-sim card copy, keyed by sim id.
 *
 * The id is the filename without `.html` (`public/sims/pressure-head.html`
 * -> `pressure-head`) or the folder name (`public/sims/pressure-head/index.html`
 * -> `pressure-head`). Anything omitted here falls back to the sim's own
 * <title> and <meta name="description">.
 *
 *   'pressure-head': {
 *     title: 'Pressure & Head',
 *     description: 'Why a taller column pushes harder, independent of volume.',
 *     question: 'Why does height beat width?',   // the "why" line on the card
 *     tags: ['Fluids', 'Grade 6–8'],
 *   },
 */
export const simMeta = {
  'example-template': {
    title: 'Example Template',
    description:
      'A placeholder sim showing the file conventions the hub reads. Delete it once your own sims are in public/sims/.',
    question: 'How does a sim get onto this page?',
    tags: ['Placeholder'],
  },
}
