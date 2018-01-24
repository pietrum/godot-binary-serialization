const MATH = require('../math');

const x = 1.5;
const y = 3.5;
const z = 5.5;

describe('[AABB]', () => {
  const AABB = require('../../extras/aabb');

  test('should decode as AABB', () => {
    // given
    const buffer = new Buffer('0000c03f000060400000b0400000c03f000060400000b040', 'hex');

    // when
    const data = MATH('AABB', buffer);

    // then
    expect(data.variant).toBeInstanceOf(AABB);
    expect(data.variant.position).toEqual({x, y, z});
    expect(data.variant.size).toEqual({x, y, z});
    expect(data.offset).toBe(6 * 4);
  });
});

describe('[Basis]', () => {
  const Basis = require('../../extras/basis');

  test('should decode as Basis', () => {
    // given
    const buffer = new Buffer('0000c03f000060400000b0400000c03f000060400000b0400000c03f000060400000b040', 'hex');

    // when
    const data = MATH('BASIS', buffer);

    // then
    expect(data.variant).toBeInstanceOf(Basis);
    expect(data.variant.axisX).toEqual({x, y, z});
    expect(data.variant.axisY).toEqual({x, y, z});
    expect(data.variant.axisZ).toEqual({x, y, z});
    expect(data.offset).toBe(9 * 4);
  });
});

describe('[Plane]', () => {
  const Plane = require('../../extras/plane');

  test('should decode as Plane', () => {
    // given
    const buffer = new Buffer('0000c03f000060400000b0400000b040', 'hex');

    // when
    const data = MATH('PLANE', buffer);

    // then
    expect(data.variant).toBeInstanceOf(Plane);
    expect(data.variant.normal).toEqual({x, y, z});
    expect(data.variant.distance).toBe(z);
    expect(data.offset).toBe(4 * 4);
  });
});

describe('[Quat]', () => {
  const Quat = require('../../extras/quat');

  test('should decode as Quat', () => {
    // given
    const buffer = new Buffer('0000c03f000060400000b0400000b040', 'hex');

    // when
    const data = MATH('QUAT', buffer);

    // then
    expect(data.variant).toBeInstanceOf(Quat);
    expect(data.variant.axis).toEqual({x, y, z});
    expect(data.variant.angle).toBe(z);
    expect(data.offset).toBe(4 * 4);
  });
});

describe('[Rect2]', () => {
  const Rect2 = require('../../extras/rect2');

  test('should decode as Rect2', () => {
    // given
    const buffer = new Buffer('0000c03f000060400000b0400000c03f', 'hex');

    // when
    const data = MATH('RECT2', buffer);

    // then
    expect(data.variant).toBeInstanceOf(Rect2);
    expect(data.variant.position).toEqual({x, y});
    expect(data.variant.size).toEqual({w: z, h: x});
    expect(data.offset).toBe(4 * 4);
  });
});

describe('[Transform]', () => {
  const Transform = require('../../extras/transform');

  test('should decode as Transform', () => {
    // given
    const buffer = new Buffer('0000c03f000060400000b0400000c03f000060400000b0400000c03f000060400000b0400000c03f000060400000b040', 'hex');

    // when
    const data = MATH('TRANSFORM', buffer);

    // then
    expect(data.variant).toBeInstanceOf(Transform);
    expect(data.variant.axisX).toEqual({x, y, z});
    expect(data.variant.axisY).toEqual({x, y, z});
    expect(data.variant.axisZ).toEqual({x, y, z});
    expect(data.variant.origin).toEqual({x, y, z});
    expect(data.offset).toBe(12 * 4);
  });
});

describe('[Transform2D]', () => {
  const Transform2D = require('../../extras/transform2d');

  test('should decode as Transform2D', () => {
    // given
    const buffer = new Buffer('0000c03f000060400000c03f000060400000c03f00006040', 'hex');

    // when
    const data = MATH('TRANSFORM2D', buffer);

    // then
    expect(data.variant).toBeInstanceOf(Transform2D);
    expect(data.variant.axisX).toEqual({x, y});
    expect(data.variant.axisY).toEqual({x, y});
    expect(data.variant.origin).toEqual({x, y});
    expect(data.offset).toBe(6 * 4);
  });
});

describe('[Vector2]', () => {
  const Vector2 = require('../../extras/vector2');

  test('should decode as Vector2', () => {
    // given
    const buffer = new Buffer('0000c03f00006040', 'hex');

    // when
    const data = MATH('VECTOR2', buffer);

    // then
    expect(data.variant).toBeInstanceOf(Vector2);
    expect(data.variant).toEqual({x, y});
    expect(data.offset).toBe(2 * 4);
  });
});

describe('[Vector3]', () => {
  const Vector3 = require('../../extras/vector3');

  test('should decode as Vector3', () => {
    // given
    const buffer = new Buffer('0000c03f000060400000b040', 'hex');

    // when
    const data = MATH('VECTOR3', buffer);

    // then
    expect(data.variant).toBeInstanceOf(Vector3);
    expect(data.variant).toEqual({x, y, z});
    expect(data.offset).toBe(3 * 4);
  });
});