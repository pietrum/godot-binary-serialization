const STRING = require('./string');
const NodePath = require('../misc/node_path');

/**
 * Get a Variant value.
 *
 * @param {buffer} buffer
 * @return {*}
 */
const NODE_PATH = buffer => (NODE_PATH.get_var(buffer));

NODE_PATH.get_var = (buff) => {
  const variant = new NodePath();

  /* eslint no-bitwise: ["error", { "allow": ["&"] }] */
  /* eslint no-underscore-dangle: ["error", { "allow": [
    "_name", "_name_size", "_subname", "_subname_size", "_absolute",
  ] }] */
  variant._name.length = buff.readUInt32LE(0) & 0x7FFFFFFF;
  variant._subname.length = buff.readUInt32LE(4);
  variant._absolute = buff.readUInt32LE(8) === 1;

  let offset = 12;
  for (let i = 0; i < variant._name.length; i += 1) {
    const name = STRING.get_string(buff, offset);

    variant._name[i] = name.variant;
    variant._name_size[i] = name.byteLength;
    offset += name.byteLength;
  }

  for (let i = 0; i < variant._subname.length; i += 1) {
    const subname = STRING.get_string(buff, offset);

    variant._subname[i] = subname.variant;
    variant._subname_size[i] = subname.byteLength;
    offset += subname.byteLength;
  }

  return variant;
};

/**
 * Expose.
 */
module.exports = NODE_PATH;
