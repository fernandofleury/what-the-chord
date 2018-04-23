import { curry, compose, take, filter, sort } from 'ramda';
import { CHORDS_LENGTH, RANDOM_SEED } from '../constants';
import chords from './chords';

export const predicate = curry((q, i) => q[i.type]);
export const random = () => Math.random() - RANDOM_SEED;

const getChords = qualities =>
  compose(take(CHORDS_LENGTH), filter(predicate(qualities)), sort(random))(
    chords
  );

export default getChords;
