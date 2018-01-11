const STRING = require('../string');

test('should decode string', () => {
  const buffer = new Buffer('0b00000048656c6c6f20576f726c64ff', 'hex');
  const data = STRING.get_string(buffer);

  expect(data).toEqual({
    variant: 'Hello World',
    offset: 16,
  });
});
