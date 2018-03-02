const COLOR = require('../color');

describe('[Color]', () => {
  // eslint-disable-next-line global-require
  const Color = require('../../misc/color');

  test('should decode variant value', () => {
    // given
    const buffer = Buffer.from('b3b2323fdad9593fa1a0203d0000803f', 'hex');

    // when
    const variant = COLOR(buffer);

    // then
    expect(variant).toBeInstanceOf(Color);
    expect(variant.r).toBe(0.6980392336845398);
    expect(variant.r8).toBe(178);
    expect(variant.g).toBe(0.8509804010391235);
    expect(variant.g8).toBe(217);
    expect(variant.b).toBe(0.03921568766236305);
    expect(variant.b8).toBe(10);
    expect(variant.a).toBe(1);
    expect(variant.a8).toBe(255);

    expect(Color.argsLength).toBe(4);
    expect(Color.byteLength).toBe(4 * 4);
  });
});
