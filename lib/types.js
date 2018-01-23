/**
 * Copy-Paste types from godot cpp file.
 *
 * @link https://github.com/godotengine/godot/blob/master/core/variant.h#L75
 * @type {Array}
 */
const TYPES = [
  // 0
  'NIL',

  // 1:4 - atomic types
  'BOOL', 'INT', 'REAL', 'STRING',

  // 5:13 - math types
  'VECTOR2', 'RECT2', 'VECTOR3', 'TRANSFORM2D', 'PLANE', 'QUAT', 'AABB', 'BASIS', 'TRANSFORM',

  // 14:19 - misc types
  'COLOR', 'NODE_PATH', '_RID', 'OBJECT', 'DICTIONARY', 'ARRAY',

  // 20:26 - arrays
  'POOL_BYTE_ARRAY', 'POOL_INT_ARRAY', 'POOL_REAL_ARRAY', 'POOL_STRING_ARRAY', 'POOL_VECTOR2_ARRAY',
  'POOL_VECTOR3_ARRAY', 'POOL_COLOR_ARRAY',

  // 27
  'VARIANT_MAX'
];

/**
 * Expose.
 *
 * @type {Array}
 */
module.exports = TYPES;
