const COLOR = require('../color');

describe('[COLOR]', () => {
  // eslint-disable-next-line global-require
  const Color = require('../../misc/color');

  test('should encode as Color', () => {
    // given
    const color = new Color();
    color.r8 = 178;
    color.g8 = 217;
    color.b8 = 10;
    color.a8 = 255;

    // when
    const buffer = COLOR(color);

    // then
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(4 + (4 * 4));
    expect(buffer.toString('hex')).toBe('0e000000'
      + 'b3b2323fdad9593fa1a0203d0000803f');
  });
});
