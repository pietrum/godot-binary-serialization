const MATH = require('../math');

const x = 1.5;
const y = 3.5;
const z = 5.5;

describe('[AABB]', () => {
  // eslint-disable-next-line global-require
  const AABB = require('../../math/aabb');

  test('should decode as AABB', () => {
    // given
    const buffer = Buffer.from('0000c03f000060400000b0400000c03f000060400000b040', 'hex');

    // when
    const data = MATH('AABB', buffer);

    // then
    expect(data.variant).toBeInstanceOf(AABB);
    expect(data.variant.position).toEqual({ x, y, z });
    expect(data.variant.size).toEqual({ x, y, z });
    expect(data.offset).toBe(6 * 4);
  });
});

describe('[Basis]', () => {
  // eslint-disable-next-line global-require
  const Basis = require('../../math/basis');

  test('should decode as Basis', () => {
    // given
    const buffer = Buffer.from('0000c03f000060400000b0400000c03f000060400000b0400000c03f000060400000b040', 'hex');

    // when
    const data = MATH('BASIS', buffer);

    // then
    expect(data.variant).toBeInstanceOf(Basis);
    expect(data.variant.axisX).toEqual({ x, y, z });
    expect(data.variant.axisY).toEqual({ x, y, z });
    expect(data.variant.axisZ).toEqual({ x, y, z });
    expect(data.offset).toBe(9 * 4);
  });
});

describe('[Plane]', () => {
  // eslint-disable-next-line global-require
  const Plane = require('../../math/plane');

  test('should decode as Plane', () => {
    // given
    const buffer = Buffer.from('0000c03f000060400000b0400000b040', 'hex');

    // when
    const data = MATH('PLANE', buffer);

    // then
    expect(data.variant).toBeInstanceOf(Plane);
    expect(data.variant.normal).toEqual({ x, y, z });
    expect(data.variant.distance).toBe(z);
    expect(data.offset).toBe(4 * 4);
  });
});

describe('[Quat]', () => {
  // eslint-disable-next-line global-require
  const Quat = require('../../math/quat');

  test('should decode as Quat', () => {
    // given
    const buffer = Buffer.from('0000c03f000060400000b0400000b040', 'hex');

    // when
    const data = MATH('QUAT', buffer);

    // then
    expect(data.variant).toBeInstanceOf(Quat);
    expect(data.variant.axis).toEqual({ x, y, z });
    expect(data.variant.angle).toBe(z);
    expect(data.offset).toBe(4 * 4);
  });
});

describe('[Rect2]', () => {
  // eslint-disable-next-line global-require
  const Rect2 = require('../../math/rect2');

  test('should decode as Rect2', () => {
    // given
    const buffer = Buffer.from('0000c03f000060400000b0400000c03f', 'hex');

    // when
    const data = MATH('RECT2', buffer);

    // then
    expect(data.variant).toBeInstanceOf(Rect2);
    expect(data.variant.position).toEqual({ x, y });
    expect(data.variant.size).toEqual({ w: z, h: x });
    expect(data.offset).toBe(4 * 4);
  });
});

describe('[Transform]', () => {
  // eslint-disable-next-line global-require
  const Transform = require('../../math/transform');

  test('should decode as Transform', () => {
    // given
    const buffer = Buffer.from('0000c03f000060400000b0400000c03f000060400000b0400000c03f000060400000b0400000c03f000060400000b040', 'hex');

    // when
    const data = MATH('TRANSFORM', buffer);

    // then
    expect(data.variant).toBeInstanceOf(Transform);
    expect(data.variant.axisX).toEqual({ x, y, z });
    expect(data.variant.axisY).toEqual({ x, y, z });
    expect(data.variant.axisZ).toEqual({ x, y, z });
    expect(data.variant.origin).toEqual({ x, y, z });
    expect(data.offset).toBe(12 * 4);
  });
});

describe('[Transform2D]', () => {
  // eslint-disable-next-line global-require
  const Transform2D = require('../../math/transform2d');

  test('should decode as Transform2D', () => {
    // given
    const buffer = Buffer.from('0000c03f000060400000c03f000060400000c03f00006040', 'hex');

    // when
    const data = MATH('TRANSFORM2D', buffer);

    // then
    expect(data.variant).toBeInstanceOf(Transform2D);
    expect(data.variant.axisX).toEqual({ x, y });
    expect(data.variant.axisY).toEqual({ x, y });
    expect(data.variant.origin).toEqual({ x, y });
    expect(data.offset).toBe(6 * 4);
  });
});

describe('[Vector2]', () => {
  // eslint-disable-next-line global-require
  const Vector2 = require('../../math/vector2');

  test('should decode as Vector2', () => {
    // given
    const buffer = Buffer.from('0000c03f00006040', 'hex');

    // when
    const data = MATH('VECTOR2', buffer);

    // then
    expect(data.variant).toBeInstanceOf(Vector2);
    expect(data.variant).toEqual({ x, y });
    expect(data.offset).toBe(2 * 4);
  });
});

describe('[Vector3]', () => {
  // eslint-disable-next-line global-require
  const Vector3 = require('../../math/vector3');

  test('should decode as Vector3', () => {
    // given
    const buffer = Buffer.from('0000c03f000060400000b040', 'hex');

    // when
    const data = MATH('VECTOR3', buffer);

    // then
    expect(data.variant).toBeInstanceOf(Vector3);
    expect(data.variant).toEqual({ x, y, z });
    expect(data.offset).toBe(3 * 4);
  });
});
