const RECT2 = require('../rect2');

const Rect2 = require('../../extras/rect2');

describe('[get_var]', () => {
  test('should decode Rect2', () => {
    // given
    const buffer = new Buffer('0000a0400000b0400000803f00000040', 'hex');

    // when
    const data = RECT2(buffer);

    // then
    expect(data.variant).toBeInstanceOf(Rect2);
    expect(data.variant.position.x).toBe(5);
    expect(data.variant.position.y).toBe(5.5);
    expect(data.variant.size.w).toBe(1);
    expect(data.variant.size.h).toBe(2);
    expect(data.offset).toBe(16);
  });
});
