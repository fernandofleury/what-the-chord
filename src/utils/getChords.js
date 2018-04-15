import { take } from 'ramda';
import { CHORDS_LENGTH } from '../constants';
import chords from './chords';

const getChords = () => take(CHORDS_LENGTH, chords.sort(() => Math.random() - 0.5));

export default getChords;
