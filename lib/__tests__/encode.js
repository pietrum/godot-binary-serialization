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

describe('math types', () => {
  beforeAll(() => {
    jest.mock('../encode/math', () => jest.fn(() => 'math'));
  });

  test('should resolve encoder as math type AABB', () => {
    // eslint-disable-next-line global-require
    const Variant = require('../math/aabb');

    // given
    const variant = new Variant();

    // when
    const encoder = ENCODE(variant);

    // then
    expect(encoder).toBe('math');
  });

  test('should resolve encoder as math type Basis', () => {
    // eslint-disable-next-line global-require
    const Variant = require('../math/basis');

    // given
    const variant = new Variant();

    // when
    const encoder = ENCODE(variant);

    // then
    expect(encoder).toBe('math');
  });

  test('should resolve encoder as math type Plane', () => {
    // eslint-disable-next-line global-require
    const Variant = require('../math/plane');

    // given
    const variant = new Variant();

    // when
    const encoder = ENCODE(variant);

    // then
    expect(encoder).toBe('math');
  });

  test('should resolve encoder as math type Quat', () => {
    // eslint-disable-next-line global-require
    const Variant = require('../math/quat');

    // given
    const variant = new Variant();

    // when
    const encoder = ENCODE(variant);

    // then
    expect(encoder).toBe('math');
  });

  test('should resolve encoder as math type Rect2', () => {
    // eslint-disable-next-line global-require
    const Variant = require('../math/rect2');

    // given
    const variant = new Variant();

    // when
    const encoder = ENCODE(variant);

    // then
    expect(encoder).toBe('math');
  });

  test('should resolve encoder as math type Transform', () => {
    // eslint-disable-next-line global-require
    const Variant = require('../math/transform');

    // given
    const variant = new Variant();

    // when
    const encoder = ENCODE(variant);

    // then
    expect(encoder).toBe('math');
  });

  test('should resolve encoder as math type Transform2D', () => {
    // eslint-disable-next-line global-require
    const Variant = require('../math/transform2d');

    // given
    const variant = new Variant();

    // when
    const encoder = ENCODE(variant);

    // then
    expect(encoder).toBe('math');
  });

  test('should resolve encoder as math type Vector2', () => {
    // eslint-disable-next-line global-require
    const Variant = require('../math/vector2');

    // given
    const variant = new Variant();

    // when
    const encoder = ENCODE(variant);

    // then
    expect(encoder).toBe('math');
  });

  test('should resolve encoder as math type Vector3', () => {
    // eslint-disable-next-line global-require
    const Variant = require('../math/vector3');

    // given
    const variant = new Variant();

    // when
    const encoder = ENCODE(variant);

    // then
    expect(encoder).toBe('math');
  });
});
