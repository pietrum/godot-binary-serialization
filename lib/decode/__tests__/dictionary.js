const DICTIONARY = require('../dictionary');

describe('[get_var]', () => {
  test('should decode string', () => {
    // given
    const buffer = Buffer.from('0100000004000000040000007465737404000000020000004f4b0300', 'hex');

    // when
    const data = DICTIONARY(buffer);

    // then
    expect(data).toEqual({
      variant: {
        test: 'OK',
      },
      byteLength: 28,
    });
  });

  test('should decode int', () => {
    // given
    const buffer = Buffer.from('0100000004000000040000007465737402000100d204000000000000', 'hex');

    // when
    const data = DICTIONARY(buffer);

    // then
    expect(data).toEqual({
      variant: {
        test: 1234,
      },
      byteLength: 28,
    });
  });

  test('should decode variant', () => {
    // given
    const buffer = Buffer.from('0200000004000000040000007465737402000100d20400000000000004000000040000006d6f7265' +
      '12000000020000000400000005000000666c6f6174000000030000000000b04004000000050000006578747261000000' +
      '12000000010000000400000006000000646f75626c650000030001006666666666661640', 'hex');

    // when
    const data = DICTIONARY(buffer);

    // then
    expect(data).toEqual({
      variant: {
        test: 1234,
        more: {
          float: 5.5,
          extra: {
            double: 5.6,
          },
        },
      },
      byteLength: 124,
    });
  });
});
