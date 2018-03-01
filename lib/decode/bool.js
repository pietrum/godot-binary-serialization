module.exports = buffer => ({
  variant: buffer.readUInt32LE(0) === 1,
  byteLength: 4,
});
