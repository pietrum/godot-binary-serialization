const VECTOR2 = require('../vector2');

const Vector2 = require('../../extras/vector2');

describe('[get_var]', () => {
  test('should decode Vector2', () => {
    // given
    const buffer = new Buffer('0000a0400000b040', 'hex');

    // when
    const data = VECTOR2(buffer);

    // then
    expect(data.variant).toBeInstanceOf(Vector2);
    expect(data.variant.x).toBe(5);
    expect(data.variant.y).toBe(5.5);
    expect(data.offset).toBe(8);
  });
});
