const BOOL = require('../bool');

describe('BOOL', () => {
  test('should decode bool value', () => {
    // given
    const buffer = Buffer.from('01000000', 'hex');

    // when
    const data = BOOL(buffer);

    // then
    expect(data).toEqual({
      variant: true,
      byteLength: 4,
    });
  });

  test('should decode bool value using offset', () => {
    // given
    const buffer = Buffer.from('ffffffff01000000ffffffff', 'hex');

    // when
    const data = BOOL(buffer, 4);

    // then
    expect(data).toEqual({
      variant: true,
      byteLength: 4,
    });
  });
});
