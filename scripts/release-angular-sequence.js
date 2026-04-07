const { releaseAngularLine } = require('./release-angular-line');

const releaseLines = [
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21
];

const args = process.argv.slice(2);
const publish = !args.includes('--no-publish');
const fromArg = args.find((value) => value.indexOf('--from=') === 0);
const toArg = args.find((value) => value.indexOf('--to=') === 0);
const from = fromArg ? Number(fromArg.split('=')[1]) : null;
const to = toArg ? Number(toArg.split('=')[1]) : null;

releaseLines
  .filter((line) => (from ? line >= from : true))
  .filter((line) => (to ? line <= to : true))
  .forEach((line) => {
  releaseAngularLine(line, { publish });
});
