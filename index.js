const PacketPeer = require('./lib/packetpeer');
const StreamPeer = require('./lib/streampeer');

const AABB = require('./lib/math/aabb');
const Basis = require('./lib/math/basis');
const Plane = require('./lib/math/plane');
const Quat = require('./lib/math/quat');
const Rect2 = require('./lib/math/rect2');
const Transform = require('./lib/math/transform');
const Transform2D = require('./lib/math/transform2d');
const Vector2 = require('./lib/math/vector2');
const Vector3 = require('./lib/math/vector3');

const Color = require('./lib/misc/color');
const NodePath = require('./lib/misc/node_path');

const math = {
  AABB, Basis, Plane, Quat, Rect2, Transform, Transform2D, Vector2, Vector3,
};

const misc = {
  Color, NodePath,
};

module.exports = {
  math, misc, PacketPeer, StreamPeer,
};
