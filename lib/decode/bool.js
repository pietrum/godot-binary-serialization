module.exports = buffer => ({
  variant: buffer.readUInt32LE(0) === 1,
  offset: 4,
});
