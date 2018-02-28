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
    expect(data).toBeInstanceOf(AABB);
    expect(data.position).toEqual({ x, y, z });
    expect(data.size).toEqual({ x, y, z });
    expect(AABB.argsLength).toBe(6);
    expect(AABB.byteLength).toBe(buffer.length);
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
    expect(data).toBeInstanceOf(Basis);
    expect(data.axisX).toEqual({ x, y, z });
    expect(data.axisY).toEqual({ x, y, z });
    expect(data.axisZ).toEqual({ x, y, z });
    expect(Basis.argsLength).toBe(9);
    expect(Basis.byteLength).toBe(buffer.length);
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
    expect(data).toBeInstanceOf(Plane);
    expect(data.normal).toEqual({ x, y, z });
    expect(data.distance).toBe(z);
    expect(Plane.argsLength).toBe(4);
    expect(Plane.byteLength).toBe(buffer.length);
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
    expect(data).toBeInstanceOf(Quat);
    expect(data.axis).toEqual({ x, y, z });
    expect(data.angle).toBe(z);
    expect(Quat.argsLength).toBe(4);
    expect(Quat.byteLength).toBe(buffer.length);
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
    expect(data).toBeInstanceOf(Rect2);
    expect(data.position).toEqual({ x, y });
    expect(data.size).toEqual({ w: z, h: x });
    expect(Rect2.argsLength).toBe(4);
    expect(Rect2.byteLength).toBe(buffer.length);
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
    expect(data).toBeInstanceOf(Transform);
    expect(data.axisX).toEqual({ x, y, z });
    expect(data.axisY).toEqual({ x, y, z });
    expect(data.axisZ).toEqual({ x, y, z });
    expect(data.origin).toEqual({ x, y, z });
    expect(Transform.argsLength).toBe(12);
    expect(Transform.byteLength).toBe(buffer.length);
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
    expect(data).toBeInstanceOf(Transform2D);
    expect(data.axisX).toEqual({ x, y });
    expect(data.axisY).toEqual({ x, y });
    expect(data.origin).toEqual({ x, y });
    expect(Transform2D.argsLength).toBe(6);
    expect(Transform2D.byteLength).toBe(buffer.length);
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
    expect(data).toBeInstanceOf(Vector2);
    expect(data).toEqual({ x, y });
    expect(Vector2.argsLength).toBe(2);
    expect(Vector2.byteLength).toBe(buffer.length);
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
    expect(data).toBeInstanceOf(Vector3);
    expect(data).toEqual({ x, y, z });
    expect(Vector3.argsLength).toBe(3);
    expect(Vector3.byteLength).toBe(buffer.length);
  });
});
