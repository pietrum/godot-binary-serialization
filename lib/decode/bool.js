module.exports = (buffer, offset = 0) => ({
  variant: buffer.readInt32LE(offset) === 1,
  byteLength: 4,
});
