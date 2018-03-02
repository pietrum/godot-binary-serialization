const NODE_PATH = require('../node_path');
const NodePath = require('../../misc/node_path');

describe('[get_var]', () => {
  test('should decode undefined node_path value', () => {
    // given NodePath() || NodePath('')
    const buffer = Buffer.from('000000800000000000000000', 'hex');

    // when
    const variant = NODE_PATH(buffer);

    // then
    expect(variant).toBeInstanceOf(NodePath);
    expect(variant.path).toBe('');
    expect(variant.byteLength).toBe(buffer.length);
  });

  test('should decode relative node_path value', () => {
    // given NodePath('Path2D/PathFollow2D/Sprite:texture:size')
    const buffer = Buffer.from('030000800200000000000000' +
      '060000005061746832440000' +
      '0c00000050617468466f6c6c6f773244' +
      '060000005370726974650000' +
      '070000007465787475726500' +
      '0400000073697a65', 'hex');

    // when
    const byteLength = NODE_PATH(buffer);

    // then
    expect(byteLength).toBeInstanceOf(NodePath);
    expect(byteLength.path).toBe('Path2D/PathFollow2D/Sprite:texture:size');
    expect(byteLength.byteLength).toBe(buffer.length);
  });

  test('should decode absolute node_path value', () => {
    // given NodePath('/Path2D/PathFollow2D/Sprite:texture:size')
    const buffer = Buffer.from('030000800200000001000000' +
      '060000005061746832440000' +
      '0c00000050617468466f6c6c6f773244' +
      '060000005370726974651810' +
      '0700000074657874757265da' +
      '0400000073697a65', 'hex');

    // when
    const byteLength = NODE_PATH(buffer);

    // then
    expect(byteLength).toBeInstanceOf(NodePath);
    expect(byteLength.path).toBe('/Path2D/PathFollow2D/Sprite:texture:size');
    expect(byteLength.byteLength).toBe(buffer.length);
  });
});
