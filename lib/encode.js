module.exports = variant => {
  let encoder = './encode/';

  if (variant === null) {
    encoder += 'undefined';
  } else if (typeof variant === 'object') {
    switch (variant.constructor.name) {
      default:
        encoder += 'json';
    }
  } else {
    encoder += typeof variant;
  }

  return require(encoder)(variant);
};
