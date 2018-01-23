const DECODE = require('../decode');

afterAll(() => {
  jest.resetAllMocks();
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
    const variant = new Buffer('00000000', 'hex');

    // when
    const encoder = DECODE(variant);

    // then
    expect(encoder).toBe('nil');
  });

  test('should resolve decoder as bool', () => {
    // given
    const variant = new Buffer('01000000', 'hex');

    // when
    const encoder = DECODE(variant);

    // then
    expect(encoder).toBe('bool');
  });

  test('should resolve decoder as int', () => {
    // given
    const variant = new Buffer('02000000', 'hex');

    // when
    const encoder = DECODE(variant);

    // then
    expect(encoder).toBe('int');
  });

  test('should resolve decoder as real', () => {
    // given
    const variant = new Buffer('03000000', 'hex');

    // when
    const encoder = DECODE(variant);

    // then
    expect(encoder).toBe('real');
  });

  test('should resolve decoder as string', () => {
    // given
    const variant = new Buffer('04000000', 'hex');

    // when
    const encoder = DECODE(variant);

    // then
    expect(encoder).toBe('string');
  });
});
