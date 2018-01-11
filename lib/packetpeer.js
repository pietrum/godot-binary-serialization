module.exports = {
  get_var: buffer => (require('./decode')(buffer).variant),
  put_var: varinat => (require('./encode')(varinat)),
};
