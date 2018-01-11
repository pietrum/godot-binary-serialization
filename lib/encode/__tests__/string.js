const STRING = require('../string');

describe('[put_string]', () => {
  test('should encode string', () => {
    const data = 'Hello World';
    const buffer = STRING.put_string(data);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(16);
    expect(buffer.toString('hex', 0, buffer.length - 1)).toBe('0b00000048656c6c6f20576f726c64');
  });

  test('should encode utf8 string', () => {
    const data = 'Hęllą Wórłd';
    const buffer = STRING.put_string(data);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(20);
    expect(buffer.toString('hex', 0, buffer.length - 1)).toBe('0f00000048c4996c6cc4852057c3b372c58264');
  });
});

describe('[put_var]', () => {
  test('should encode as string', () => {
    const variant = 'testing';
    const buffer = STRING(variant);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(16);
    expect(buffer.toString('hex', 0, buffer.length - 1)).toBe('040000000700000074657374696e67');
  });
});
