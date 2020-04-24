const ARRAY = require('../array');

describe('[get_var]', () => {
  test('should decode empty array', () => {
    // given
    const buffer = Buffer.from('00000000', 'hex');

    // when
    const data = ARRAY(buffer);

    // then
    expect(data).toEqual({
      variant: [],
      byteLength: 0,
    });
  });

  test('should decode int array', () => {
    // given
    const buffer = Buffer.from('02000000'
      + '0200000001000000'
      + '0200000002000000', 'hex');

    // when
    const data = ARRAY(buffer);

    // then
    expect(data).toEqual({
      variant: [1, 2],
      byteLength: 16,
    });
  });

  test('should decode string array', () => {
    // given
    const buffer = Buffer.from('03000000'
      + '040000000700000048656c6c6f205700'
      + '04000000040000006f726c64'
      + '040000000100000021000000', 'hex');

    // when
    const data = ARRAY(buffer);

    // then
    expect(data).toEqual({
      variant: ['Hello W', 'orld', '!'],
      byteLength: 40,
    });
  });

  test('should decode complex array', () => {
    // given
    const buffer = Buffer.from('02000000' // array(2)
      + '1200000001000000' // [0] = dictionary(1)
        // key = string(7) [boolean]
        + '0400000007000000626f6f6c65616e00'
        // value = boolean [true]
        + '0100000001000000'
      + '1200000002000000' // [1] = dictionary(2)
        // key = string(6) [number]
        + '04000000060000006e756d6265720000'
        // value = integer [11]
        + '020000000b000000'
        // key = string(6) [string]
        + '0400000006000000737472696e670000'
        // value = string(12) [Hello World!]
        + '040000000c00000048656c6c6f20576f726c6421', 'hex');

    // when
    const data = ARRAY(buffer);

    // then
    expect(data).toEqual({
      variant: [{
        boolean: true,
      }, {
        number: 11,
        string: 'Hello World!',
      }],
      byteLength: 100,
    });
  });
});
