module.exports = (variant) => {
  let encoder = './encode/';

  if (variant === null) {
    encoder += 'undefined';
  } else if (typeof variant === 'object') {
    switch (variant.constructor.name) {
      case 'Vector2':
      case 'Rect2':
      case 'Vector3':
      case 'Transform2D':
      case 'Plane':
      case 'Quat':
      case 'AABB':
      case 'Basis':
      case 'Transform':
        encoder += 'math';
        break;
      default:
        encoder += 'json';
    }
  } else {
    encoder += typeof variant;
  }

  // eslint-disable-next-line global-require, import/no-dynamic-require
  return require(encoder)(variant);
};
