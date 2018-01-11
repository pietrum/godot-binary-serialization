const INT = require('../int');

test('should decode 8-bits integer positive value', () => {
  const buffer = new Buffer('05', 'hex');
  const data = INT.get_8(buffer);

  expect(data).toEqual({
    variant: 5,
    offset: 1,
  });
});

test('should decode 8-bits integer negative value', () => {
  const buffer = new Buffer('fb', 'hex');
  const data = INT.get_8(buffer);

  expect(data).toEqual({
    variant: -5,
    offset: 1,
  });
});

test('should decode 8-bits unsigned integer value', () => {
  const buffer = new Buffer('fb', 'hex');
  const data = INT.get_u8(buffer);

  expect(data).toEqual({
    variant: 251,
    offset: 1,
  });
});

test('should decode 16-bits integer positive value', () => {
  const buffer = new Buffer('0500', 'hex');
  const data = INT.get_16(buffer);

  expect(data).toEqual({
    variant: 5,
    offset: 2,
  });
});

test('should decode 16-bits integer negative value', () => {
  const buffer = new Buffer('fbff', 'hex');
  const data = INT.get_16(buffer);

  expect(data).toEqual({
    variant: -5,
    offset: 2,
  });
});

test('should decode 16-bits unsigned integer value', () => {
  const buffer = new Buffer('fbff', 'hex');
  const data = INT.get_u16(buffer);

  expect(data).toEqual({
    variant: 256 * 256 - 5,
    offset: 2,
  });
});

test('should decode 32-bits integer positive value', () => {
  const buffer = new Buffer('05000000', 'hex');
  const data = INT.get_32(buffer);

  expect(data).toEqual({
    variant: 5,
    offset: 4,
  });
});

test('should decode 32-bits integer negative value', () => {
  const buffer = new Buffer('fbffffff', 'hex');
  const data = INT.get_32(buffer);

  expect(data).toEqual({
    variant: -5,
    offset: 4,
  });
});

test('should decode 32-bits unsigned integer value', () => {
  const buffer = new Buffer('fbffffff', 'hex');
  const data = INT.get_u32(buffer);

  expect(data).toEqual({
    variant: 256 * 256 * 256 * 256 - 5,
    offset: 4,
  });
});

test('should decode 64-bits integer positive value', () => {
  const buffer = new Buffer('0400000001000000', 'hex');
  const data = INT.get_64(buffer);

  expect(data).toEqual({
    variant: 4294967300,
    offset: 8,
  });
});

test('should decode 64-bits integer negative value', () => {
  const buffer = new Buffer('fcfffffffeffffff', 'hex');
  const data = INT.get_64(buffer);

  expect(data).toEqual({
    variant: -4294967300,
    offset: 8,
  });
});

test('should decode 64-bits unsigned integer value', () => {
  const buffer = new Buffer('fbffffffffffffff', 'hex');
  const data = INT.get_u64(buffer);

  expect(data).toEqual({
    variant: 256 * 256 * 256 * 256 * 256 * 256 * 256 * 256 - 5,
    offset: 8,
  });
});
