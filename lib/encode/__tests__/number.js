const NUMBER = require('../number');

describe('[put_8 / put_u8]', () => {
  test('should encode 8-bits integer positive value', () => {
    const variant = 5;
    const buffer = NUMBER.put_8(variant);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(1);
    expect(buffer.toString('hex')).toBe('05');
  });

  test('should encode 8-bits integer negative value', () => {
    const variant = -5;
    const buffer = NUMBER.put_8(variant);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(1);
    expect(buffer.toString('hex')).toBe('fb');
  });

  test('should encode 8-bits unsigned integer negative value', () => {
    const variant = 255;
    const buffer = NUMBER.put_u8(variant);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(1);
    expect(buffer.toString('hex')).toBe('ff');
  });
});

describe('[put_16 / put_u16]', () => {
  test('should encode 16-bits integer positive value', () => {
    const variant = 260;
    const buffer = NUMBER.put_16(variant);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(2);
    expect(buffer.toString('hex')).toBe('0401');
  });

  test('should encode 16-bits integer negative value', () => {
    const variant = -260;
    const buffer = NUMBER.put_16(variant);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(2);
    expect(buffer.toString('hex')).toBe('fcfe');
  });

  test('should encode 16-bits unsigned integer negative value', () => {
    const variant = 256 * 256 - 1;
    const buffer = NUMBER.put_u16(variant);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(2);
    expect(buffer.toString('hex')).toBe('ffff');
  });
});

describe('[put_32 / put_u32]', () => {
  test('should encode 32-bits integer positive value', () => {
    const variant = 65536;
    const buffer = NUMBER.put_32(variant);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(4);
    expect(buffer.toString('hex')).toBe('00000100');
  });

  test('should encode 32-bits integer negative value', () => {
    const variant = -65536;
    const buffer = NUMBER.put_32(variant);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(4);
    expect(buffer.toString('hex')).toBe('0000ffff');
  });

  test('should encode 32-bits unsigned integer negative value', () => {
    const variant = 65536 * 65536 - 1;
    const buffer = NUMBER.put_u32(variant);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(4);
    expect(buffer.toString('hex')).toBe('ffffffff');
  });
});

describe('[put_64 / put_u64]', () => {
  test('should encode 64-bits integer small positive value', () => {
    const variant = 5;
    const buffer = NUMBER.put_64(variant);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(8);
    expect(buffer.toString('hex')).toBe('0500000000000000');
  });

  test('should encode 64-bits integer positive value', () => {
    const variant = Number.MAX_SAFE_INTEGER;
    const buffer = NUMBER.put_64(variant);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(8);
    expect(buffer.toString('hex')).toBe('ffffffffffff1f00');
  });

  test('should encode 64-bits integer small negative value', () => {
    const variant = -5;
    const buffer = NUMBER.put_64(variant);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(8);
    expect(buffer.toString('hex')).toBe('fbffffffffffffff');
  });

  test('should encode 64-bits integer negative value', () => {
    const variant = Number.MIN_SAFE_INTEGER;
    const buffer = NUMBER.put_64(variant);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(8);
    expect(buffer.toString('hex')).toBe('010000000000e0ff');
  });
});

describe('[put_float]', () => {
  test('should encode float value', () => {
    const variant = 5.5;
    const buffer = NUMBER.put_float(variant);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(4);
    expect(buffer.toString('hex')).toBe('0000b040');
  });
});

describe('[put_double]', () => {
  test('should encode double value', () => {
    const variant = 5.6;
    const buffer = NUMBER.put_double(variant);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(8);
    expect(buffer.toString('hex')).toBe('6666666666661640');
  });
});

describe('[put_var]', () => {
  test('should encode as 32-bits integer value', () => {
    const variant = 5;
    const buffer = NUMBER(variant);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(8);
    expect(buffer.toString('hex')).toBe('0200000005000000');
  });

  test('should encode as 64-bits integer value', () => {
    const variant = Number.MAX_SAFE_INTEGER;
    const buffer = NUMBER(variant);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(12);
    expect(buffer.toString('hex')).toBe('02000100ffffffffffff1f00');
  });

  test('should encode as float value', () => {
    const variant = 5.5;
    const buffer = NUMBER(variant);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(8);
    expect(buffer.toString('hex')).toBe('030000000000b040');
  });

  test('should encode as double value', () => {
    const variant = 5.6;
    const buffer = NUMBER(variant);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(12);
    expect(buffer.toString('hex')).toBe('030001006666666666661640');
  });
});
