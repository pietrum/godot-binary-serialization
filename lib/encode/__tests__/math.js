const MATH = require('../math');

const x = 1.5;
const y = 3.5;
const z = 5.5;

describe('[AABB]', () => {
  // eslint-disable-next-line global-require
  const AABB = require('../../math/aabb');

  test('should encode as AABB', () => {
    // given
    const aabb = new AABB();
    aabb.position = { x, y, z };
    aabb.size = { x, y, z };

    // when
    const buffer = MATH(aabb);

    // then
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(4 + (6 * 4));
    expect(buffer.toString('hex')).toBe('0b000000' +
      '0000c03f000060400000b0400000c03f000060400000b040');
  });
});

describe('[Basis]', () => {
  // eslint-disable-next-line global-require
  const Basis = require('../../math/basis');

  test('should encode as Basis', () => {
    // given
    const basis = new Basis();
    basis.axisX = { x, y, z };
    basis.axisY = { x, y, z };
    basis.axisZ = { x, y, z };

    // when
    const buffer = MATH(basis);

    // then
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(4 + (9 * 4));
    expect(buffer.toString('hex')).toBe('0c000000' +
      '0000c03f000060400000b0400000c03f000060400000b0400000c03f000060400000b040');
  });
});

describe('[Plane]', () => {
  // eslint-disable-next-line global-require
  const Plane = require('../../math/plane');

  test('should encode as Plane', () => {
    // given
    const plane = new Plane();
    plane.normal = { x, y, z };
    plane.distance = z;

    // when
    const buffer = MATH(plane);

    // then
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(4 + (4 * 4));
    expect(buffer.toString('hex')).toBe('09000000' +
      '0000c03f000060400000b0400000b040');
  });
});

describe('[Quat]', () => {
  // eslint-disable-next-line global-require
  const Quat = require('../../math/quat');

  test('should encode as Quat', () => {
    // given
    const quat = new Quat();
    quat.axis = { x, y, z };
    quat.angle = z;

    // when
    const buffer = MATH(quat);

    // then
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(4 + (4 * 4));
    expect(buffer.toString('hex')).toBe('0a000000' +
      '0000c03f000060400000b0400000b040');
  });
});

describe('[Rect2]', () => {
  // eslint-disable-next-line global-require
  const Rect2 = require('../../math/rect2');

  test('should encode as Rect2', () => {
    // given
    const rect2 = new Rect2();
    rect2.position = { x, y };
    rect2.size = { w: z, h: x };

    // when
    const buffer = MATH(rect2);

    // then
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(4 + (4 * 4));
    expect(buffer.toString('hex')).toBe('06000000' +
      '0000c03f000060400000b0400000c03f');
  });
});

describe('[Transform]', () => {
  // eslint-disable-next-line global-require
  const Transform = require('../../math/transform');

  test('should encode as Transform', () => {
    // given
    const transform = new Transform();
    transform.axisX = { x, y, z };
    transform.axisY = { x, y, z };
    transform.axisZ = { x, y, z };
    transform.origin = { x, y, z };

    // when
    const buffer = MATH(transform);

    // then
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(4 + (12 * 4));
    expect(buffer.toString('hex')).toBe('0d000000' +
      '0000c03f000060400000b0400000c03f000060400000b0400000c03f000060400000b0400000c03f000060400000b040');
  });
});

describe('[Transform2D]', () => {
  // eslint-disable-next-line global-require
  const Transform2D = require('../../math/transform2d');

  test('should encode as Transform2D', () => {
    // given
    const transform2D = new Transform2D();
    transform2D.axisX = { x, y };
    transform2D.axisY = { x, y };
    transform2D.origin = { x, y };

    // when
    const buffer = MATH(transform2D);

    // then
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(4 + (6 * 4));
    expect(buffer.toString('hex')).toBe('08000000' +
      '0000c03f000060400000c03f000060400000c03f00006040');
  });
});

describe('[Vector2]', () => {
  // eslint-disable-next-line global-require
  const Vector2 = require('../../math/vector2');

  test('should encode as Vector2', () => {
    // given
    const vector2 = new Vector2();
    vector2.x = x;
    vector2.y = y;

    // when
    const buffer = MATH(vector2);

    // then
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(4 + (2 * 4));
    expect(buffer.toString('hex')).toBe('05000000' +
      '0000c03f00006040');
  });
});

describe('[Vector3]', () => {
  // eslint-disable-next-line global-require
  const Vector3 = require('../../math/vector3');

  test('should encode as Vector3', () => {
    // given
    const vector3 = new Vector3();
    vector3.x = x;
    vector3.y = y;
    vector3.z = z;

    // when
    const buffer = MATH(vector3);

    // then
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(4 + (3 * 4));
    expect(buffer.toString('hex')).toBe('07000000' +
      '0000c03f000060400000b040');
  });
});
