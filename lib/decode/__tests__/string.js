const STRING = require('../string');

describe('[get_string]', () => {
  test('should decode string', () => {
    // given
    const buffer = Buffer.from('0b00000048656c6c6f20576f726c64ff', 'hex');

    // when
    const data = STRING.get_string(buffer);

    // then
    expect(data).toEqual({
      variant: 'Hello World',
      byteLength: 16,
    });
  });
});
