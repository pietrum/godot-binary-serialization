const BOOLEAN = require('../boolean');

describe('[put_var]', () => {
  test('should encode true value', () => {
    const variant = true;
    const buffer = BOOLEAN(variant);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(8);
    expect(buffer.toString('hex')).toBe('0100000001000000');
  });

  test('should encode false value', () => {
    const variant = false;
    const buffer = BOOLEAN(variant);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(8);
    expect(buffer.toString('hex')).toBe('0100000000000000');
  });
});
