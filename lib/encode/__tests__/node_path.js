const NODE_PATH = require('../node_path');

describe('[NodePath]', () => {
  // eslint-disable-next-line global-require
  const NodePath = require('../../misc/node_path');

  test('should encode as empty NodePath', () => {
    // given
    const nodePath = new NodePath();

    // when
    const buffer = NODE_PATH(nodePath);

    // then
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(4 + nodePath.byteLength);
    expect(buffer.toString('hex')).toBe('0f000000'
      + '000000800000000000000000');
  });

  test('should encode as relative NodePath', () => {
    // given
    const nodePath = new NodePath('Path2D/PathFollow2D/Sprite:texture:size');

    // when
    const buffer = NODE_PATH(nodePath);

    // then
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(4 + nodePath.byteLength);
    expect(buffer.toString('hex')).toMatch(/^0f00000003000080020000000000000006000000506174683244[0-9a-f]{4}0c00000050617468466f6c6c6f77324406000000537072697465[0-9a-f]{4}0700000074657874757265[0-9a-f]{2}0400000073697a65$/);
  });

  test('should encode as absolute NodePath', () => {
    // given
    const nodePath = new NodePath('/Path2D/PathFollow2D/Sprite:texture:size');

    // when
    const buffer = NODE_PATH(nodePath);

    // then
    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.length).toBe(4 + nodePath.byteLength);
    expect(buffer.toString('hex')).toMatch(/^0f00000003000080020000000100000006000000506174683244[0-9a-f]{4}0c00000050617468466f6c6c6f77324406000000537072697465[0-9a-f]{4}0700000074657874757265[0-9a-f]{2}0400000073697a65$/);
  });
});
