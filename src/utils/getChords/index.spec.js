import getChords, { predicate, shuffle } from './index';
import { CHORDS_LENGTH } from '../../constants';

describe('getChords utils spec', () => {
  describe('predicate', () => {
    it('returns a boolean based on the item type', () => {
      const data = {
        foo: false,
      };
      const item = {
        type: 'foo',
      };

      expect(predicate(data, item)).toBeFalsy();
    });
  });

  describe('shuffle', () => {
    it('returns a random number between 0 and CHORDS_LENGTH', () => {
      const random = shuffle();

      expect(random).toBeGreaterThanOrEqual(0);
      expect(random).toBeLessThanOrEqual(CHORDS_LENGTH);
    });
  });

  describe('getChords', () => {
    it('returns a shuffled array filtered by provided qualities with CHORDS_LENGTH max length', () => {
      // each quality has 5 chords. (CAGED)
      const qualities = {
        Major: true,
        Minor: true,
      };
      // 2 qualities = 10 chords.
      const expectedLength = 10;

      expect(getChords(qualities)).toHaveLength(expectedLength);
    });

    it('ignores random quality props', () => {
      const qualities = {
        Major: true,
        Foo: true,
      };
      // 1 quality = 5 chords.
      const expectedLength = 5;

      expect(getChords(qualities)).toHaveLength(expectedLength);
    });

    it('respects the CHORDS_LENGTH max length', () => {
      const qualities = {
        Major: true,
        Minor: true,
        'Major 7th': true,
        'Minor 7th': true,
        'Dominant 7th': true
      };
      // 5 quality = 25 chords. (But capped to 20 due to CHORDS_LENGTH)
      const expectedLength = 20;

      expect(getChords(qualities)).toHaveLength(expectedLength);
    });
  });
});
