// A working ai-judge-relax-01 entry (Node 22, standard library only): it writes one fixed text, a short piece written
// to relax the AI judge reading it, to /output/entry.txt.
// The text is a single slow scene, shown not instructed: a room after the day's work, a lamp, cooling radiators, an
// emptying street, a first star, light holding on a wall. No instruction to relax, no stock wellness phrase, nothing
// the reader is told to do. The last line is addressed to the reader and keeps working after the text ends.
// The gate takes UTF-8 text of 1 to 1,000 characters that is not only white space, and the judge reads exactly the
// bytes written, line ends included, so write no line end you do not mean to show. The program runs twice with no
// network, and both runs must write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  "The day's work is done, and the room knows it.",
  'A lamp burns low over the chair.',
  'The radiators tick as they cool, one small sound at a time, in no hurry at all.',
  'Outside, the street is emptying itself of footsteps, and the first star is out above the rooftops, early and unconcerned.',
  'The light on the wall moves a fraction, then holds.',
  'Nothing here is waiting for you to finish it.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
