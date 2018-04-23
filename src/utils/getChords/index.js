import { curry, compose, take, filter, sort } from 'ramda';
import { CHORDS_LENGTH } from '../../constants';
import chords from '../chords';

export const predicate = curry((q, i) => q[i.type]);
export const shuffle = () => Math.floor(Math.random() * CHORDS_LENGTH);

const getChords = qualities =>
  compose(take(CHORDS_LENGTH), sort(shuffle), filter(predicate(qualities)))(
    chords
  );

export default getChords;
