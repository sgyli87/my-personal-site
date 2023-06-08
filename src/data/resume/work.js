/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'PACCAR',
    position: 'Software Developer UW Engine',
    startDate: '2023-01-01',
    endDate: '2023-06-01',
  },
  {
    name: 'HYC SiscanTech',
    position: 'Software Engineer Intern',
    startDate: '2021-08-01',
    endDate: '2022-03-01',
  },
  {
    name: 'University of Liverpool MIF',
    position: 'Research Intern @ DSTA',
    startDate: '2020-08-01',
    endDate: '2021-05-01',
  },
];

export default work;
