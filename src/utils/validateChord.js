import { join, concat, toUpper, equals, replace, compose } from 'ramda';

export const normalizeChord = compose(toUpper, join(''));

export const normalizeAnswer = compose(replace(/[^A-Z|#]/g, ''), toUpper);

const isValid = (chord, answer) =>
  equals(
    normalizeChord(chord.notes),
    compose(concat(chord.root), normalizeAnswer)(answer)
  );

export default isValid;
