import { join, concat, toUpper, equals, replace, compose } from 'ramda';

export const normalizedChord = compose(toUpper, join(''));

export const normalizedAnswer = compose(replace(/[^A-Z|#]/g, ''), toUpper);

const isValid = (chord, answer) =>
  equals(
    normalizedChord(chord.notes),
    compose(concat(chord.root), normalizedAnswer)(answer)
  );

export default isValid;
