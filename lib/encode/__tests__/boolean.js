const BOOLEAN = require('../boolean');

describe('BOOLEAN', () => {
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

  test('should encode true value and inject to buffer', () => {
    // given
    const variant = true;
    const buffer = Buffer.from('ffffeeeeeeeeeeeeeeeeffff', 'hex');

    // when
    BOOLEAN(variant, buffer, 2);

    // then
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(12);
    expect(buffer.toString('hex')).toBe('ffff0100000001000000ffff');
  });
});
