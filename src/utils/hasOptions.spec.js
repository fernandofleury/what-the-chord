import hasOptions from './hasOptions';

describe('hasOptions utils spec', () => {
  it('returns true if at least one key/value is true', () => {
    const data = {
      foo: true,
      bar: false,
    };

    expect(hasOptions(data)).toBeTruthy();
  });

  it('returns false if all key/values are false', () => {
    const data = {
      foo: false,
      bar: false,
    };

    expect(hasOptions(data)).toBeFalsy();
  });
});
