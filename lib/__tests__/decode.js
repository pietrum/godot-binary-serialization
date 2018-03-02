const DECODE = require('../decode');

afterAll(() => {
  jest.resetAllMocks();
});

describe('unvalid data', () => {
  beforeAll(() => {
    jest.mock('../decode/nil', () => jest.fn(() => 'nil'));

    console.warn = () => {};
  });

  test('should resolve decoder as nil if not buffer send', () => {
    // given
    const variant = 'unvalid data';

    // when
    const decoder = DECODE(variant);

    // then
    expect(decoder).toBe('nil');
  });
});

describe('atomic types', () => {
  beforeAll(() => {
    jest.mock('../decode/nil', () => jest.fn(() => 'nil'));
    jest.mock('../decode/bool', () => jest.fn(() => 'bool'));
    jest.mock('../decode/int', () => jest.fn(() => 'int'));
    jest.mock('../decode/real', () => jest.fn(() => 'real'));
    jest.mock('../decode/string', () => jest.fn(() => 'string'));
  });

  test('should resolve decoder as nil', () => {
    // given
    const variant = Buffer.from('00000000', 'hex');

    // when
    const decoder = DECODE(variant);

    // then
    expect(decoder).toBe('nil');
  });

  test('should resolve decoder as bool', () => {
    // given
    const variant = Buffer.from('01000000', 'hex');

    // when
    const decoder = DECODE(variant);

    // then
    expect(decoder).toBe('bool');
  });

  test('should resolve decoder as int', () => {
    // given
    const variant = Buffer.from('02000000', 'hex');

    // when
    const decoder = DECODE(variant);

    // then
    expect(decoder).toBe('int');
  });

  test('should resolve decoder as real', () => {
    // given
    const variant = Buffer.from('03000000', 'hex');

    // when
    const decoder = DECODE(variant);

    // then
    expect(decoder).toBe('real');
  });

  test('should resolve decoder as string', () => {
    // given
    const variant = Buffer.from('04000000', 'hex');

    // when
    const decoder = DECODE(variant);

    // then
    expect(decoder).toBe('string');
  });
});

describe('math types', () => {
  beforeAll(() => {
    jest.mock('../decode/math', () => jest.fn(() => 'math'));
  });

  test('should resolve decoder as math type Vector2', () => {
    // given
    const variant = Buffer.from('05000000', 'hex');

    // when
    const decoder = DECODE(variant);

    // then
    expect(decoder).toBe('math');
  });

  test('should resolve decoder as math type Rect2', () => {
    // given
    const variant = Buffer.from('06000000', 'hex');

    // when
    const decoder = DECODE(variant);

    // then
    expect(decoder).toBe('math');
  });

  test('should resolve decoder as math type Vector3', () => {
    // given
    const variant = Buffer.from('07000000', 'hex');

    // when
    const decoder = DECODE(variant);

    // then
    expect(decoder).toBe('math');
  });

  test('should resolve decoder as math type Transform2D', () => {
    // given
    const variant = Buffer.from('08000000', 'hex');

    // when
    const decoder = DECODE(variant);

    // then
    expect(decoder).toBe('math');
  });

  test('should resolve decoder as math type Plane', () => {
    // given
    const variant = Buffer.from('09000000', 'hex');

    // when
    const decoder = DECODE(variant);

    // then
    expect(decoder).toBe('math');
  });

  test('should resolve decoder as math type Quat', () => {
    // given
    const variant = Buffer.from('0a000000', 'hex');

    // when
    const decoder = DECODE(variant);

    // then
    expect(decoder).toBe('math');
  });

  test('should resolve decoder as math type AABB', () => {
    // given
    const variant = Buffer.from('0b000000', 'hex');

    // when
    const decoder = DECODE(variant);

    // then
    expect(decoder).toBe('math');
  });

  test('should resolve decoder as math type Basis', () => {
    // given
    const variant = Buffer.from('0c000000', 'hex');

    // when
    const decoder = DECODE(variant);

    // then
    expect(decoder).toBe('math');
  });

  test('should resolve decoder as math type Transform', () => {
    // given
    const variant = Buffer.from('0d000000', 'hex');

    // when
    const decoder = DECODE(variant);

    // then
    expect(decoder).toBe('math');
  });
});

describe('misc types', () => {
  beforeAll(() => {
    jest.mock('../decode/color', () => jest.fn(() => 'color'));
  });

  test('should resolve decoder as misc type Color', () => {
    // given
    const variant = Buffer.from('0e000000', 'hex');

    // when
    const decoder = DECODE(variant);

    // then
    expect(decoder).toBe('color');
  });
});
