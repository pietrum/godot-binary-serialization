const BOOLEAN = require('../boolean');

describe('[put_var]', () => {
  test('should encode true value', () => {
    // given
    const variant = true;

    // when
    const buffer = BOOLEAN(variant);

    // then
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(8);
    expect(buffer.toString('hex')).toBe('0100000001000000');
  });

  test('should encode false value', () => {
    // given
    const variant = false;

    // when
    const buffer = BOOLEAN(variant);

    // then
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(8);
    expect(buffer.toString('hex')).toBe('0100000000000000');
  });
});
