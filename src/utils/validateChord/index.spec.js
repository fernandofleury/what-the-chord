import isValid, { normalizeChord, normalizeAnswer } from './index';

describe('validateChord utils spec', () => {
  describe('normalizeChord', () => {
    it('joins the array and converts to toUpper', () => {
      const data = ['c', 'e', 'g'];
      const expectedData = 'CEG';

      expect(normalizeChord(data)).toBe(expectedData);
    });
  });

  describe('normalizeAnswer', () => {
    it('sanitizes the string and converts to toUpper', () => {
      const data = 'C  e, G 123.....,,,,,';
      const expectedData = 'CEG';

      expect(normalizeAnswer(data)).toBe(expectedData);
    });
  });

  describe('isValid', () => {
    it('returns true when the provided string is equal to current chord', () => {
      const data = '  e, G';
      const chord = {
        root: 'C',
        notes: ['C', 'E', 'G'],
      };
      const expectedData = true;

      expect(isValid(chord, data)).toBeTruthy();
    });

    it('returns false when the provided string is equal to current chord', () => {
      const data = 'e, G#';
      const chord = {
        root: 'C',
        notes: ['C', 'E', 'G'],
      };
      const expectedData = false;

      expect(isValid(chord, data)).toBeFalsy();
    });
  });
});
