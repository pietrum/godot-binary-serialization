const ARRAY = require('../array');

describe('[put_var]', () => {
  test('should encode empty array', () => {
    // given
    const variant = [];

    // when
    const buffer = ARRAY(variant);

    // then
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(8);
    expect(buffer.toString('hex', 0, buffer.length))
      .toBe('1300000000000000');
  });

  test('should encode array with integer values', () => {
    // given
    const variant = [1, 2];

    // when
    const buffer = ARRAY(variant);

    // then
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(24);
    expect(buffer.toString('hex', 0, buffer.length)).toBe('13000000'
      + '02000000'
      + '0200000001000000'
      + '0200000002000000');
  });

  test('should encode array with string values', () => {
    // given
    const variant = ['Hello W', 'orld', '!'];

    // when
    const buffer = ARRAY(variant);

    // then
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(48);
    expect(buffer.toString('hex', 0, buffer.length)).toBe('13000000'
      + '03000000'
      + '040000000700000048656c6c6f205700'
      + '04000000040000006f726c64'
      + '040000000100000021000000');
  });

  test('should encode array with complex values', () => {
    // given
    const variant = [{
      boolean: true,
    }, {
      number: 11,
      string: 'Hello World!',
    }];

    // when
    const buffer = ARRAY(variant);

    // then
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(108);
    expect(buffer.toString('hex', 0, buffer.length)).toBe('13000000'
      + '02000000' // length = 2
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
        + '040000000c00000048656c6c6f20576f726c6421');
  });
});
