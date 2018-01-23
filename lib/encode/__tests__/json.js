const DICTIONARY = require('../json');

describe('[put_var]', () => {
  test('should encode object with string values', () => {
    const variant = { test: 'OK' };
    const buffer = DICTIONARY(variant);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(32);
    expect(buffer.toString('hex', 0, 30)).toBe('120000000100000004000000040000007465737404000000020000004f4b');
  });

  test('should encode object with integer values', () => {
    const variant = { test: 1234 };
    const buffer = DICTIONARY(variant);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(28);
    expect(buffer.toString('hex', 0, 30)).toBe('120000000100000004000000040000007465737402000000d2040000');
  });
});
