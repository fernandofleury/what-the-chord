import { join, concat, toUpper, equals, replace, compose } from 'ramda';

const normalizedChord = compose(toUpper, join(''));

const normalizedAnswer = compose(replace(/[^A-Z|#]/g, ''), toUpper);

const isValid = (chord, answer) =>
  equals(
    normalizedChord(chord.notes),
    compose(concat(chord.root), normalizedAnswer)(answer)
  );

export default isValid;
