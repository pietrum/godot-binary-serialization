module.exports = {
  // eslint-disable-next-line global-require
  get_var: (buffer) => (require('./decode')(buffer).variant),
  // eslint-disable-next-line global-require
  put_var: (variant) => (require('./encode')(variant)),
};
