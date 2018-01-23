const VECTOR2 = require('../vector2');

const Vector2 = require('../../extras/vector2');

describe('[put_var]', () => {
  test('should encode as Vector2', () => {
    // given
    const variant = new Vector2();
    variant.x = 5;
    variant.y = 5.5;

    // when
    const buffer = VECTOR2(variant);

    // then
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(12);
    expect(buffer.toString('hex')).toBe('050000000000a0400000b040');
  });
});
