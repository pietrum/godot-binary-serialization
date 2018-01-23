const ENCODE = require('../encode');

afterAll(() => {
  jest.resetAllMocks();
});

describe('atomic types', () => {
  beforeAll(() => {
    jest.mock('../encode/boolean', () => jest.fn(() => 'boolean'));
    jest.mock('../encode/json', () => jest.fn(() => 'json'));
    jest.mock('../encode/number', () => jest.fn(() => 'number'));
    jest.mock('../encode/string', () => jest.fn(() => 'string'));
    jest.mock('../encode/undefined', () => jest.fn(() => 'undefined'));
  });

  test('should resolve encoder as boolean', () => {
    // given
    const variant = true;

    // when
    const encoder = ENCODE(variant);

    // then
    expect(encoder).toBe('boolean');
  });

  test('should resolve encoder as json', () => {
    // given
    const variant = {};

    // when
    const encoder = ENCODE(variant);

    // then
    expect(encoder).toBe('json');
  });

  test('should resolve encoder as number', () => {
    // given
    const variant = 5;

    // when
    const encoder = ENCODE(variant);

    // then
    expect(encoder).toBe('number');
  });

  test('should resolve encoder as string', () => {
    // given
    const variant = '';

    // when
    const encoder = ENCODE(variant);

    // then
    expect(encoder).toBe('string');
  });

  test('should resolve encoder as undefined', () => {
    // given
    const variant = null;

    // when
    const encoder = ENCODE(variant);

    // then
    expect(encoder).toBe('undefined');
  });
});
