module.exports = variant => {
  if (variant === null) {
    variant = undefined;
  }

  const encode_variant = require(`./encode/${typeof variant}`);
  return encode_variant(variant);
};
