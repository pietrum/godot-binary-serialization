const STRING = require('../string');

describe('[put_string]', () => {
  test('should encode string', () => {
    // given
    const variant = 'Hello World';

    // when
    const buffer = STRING.put_string(variant);

    // then
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(16);
    expect(buffer.toString('hex', 0, buffer.length - 1)).toBe('0b00000048656c6c6f20576f726c64');
  });

  test('should encode utf8 string', () => {
    // given
    const variant = 'Hęllą Wórłd';

    // when
    const buffer = STRING.put_string(variant);

    // then
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(20);
    expect(buffer.toString('hex', 0, buffer.length - 1)).toBe('0f00000048c4996c6cc4852057c3b372c58264');
  });
});

describe('[put_var]', () => {
  test('should encode as string', () => {
    // given
    const variant = 'testing';

    // when
    const buffer = STRING(variant);

    // then
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(16);
    expect(buffer.toString('hex', 0, buffer.length - 1)).toBe('040000000700000074657374696e67');
  });
});
