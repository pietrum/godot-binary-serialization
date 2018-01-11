const BOOL = require('../bool');

describe('[get_var]', () => {
  test('should decode bool value', () => {
    const buffer = new Buffer('01000000', 'hex');
    const data = BOOL(buffer);

    expect(data).toEqual({
      variant: true,
      offset: 4,
    });
  });
});
