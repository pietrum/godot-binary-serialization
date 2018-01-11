const REAL = require('../real');

test('should decode float value', () => {
  const buffer = new Buffer('0000b040', 'hex');
  const data = REAL.get_float(buffer);

  expect(data).toEqual({
    variant: 5.5,
    offset: 4,
  });
});

test('should decode double value', () => {
  const buffer = new Buffer('6666666666661640', 'hex');
  const data = REAL.get_double(buffer);

  expect(data).toEqual({
    variant: 5.6,
    offset: 8,
  });
});
