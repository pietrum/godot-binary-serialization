/**
 * Pre-parsed scene tree path.
 */
class NodePath {
  /**
   * Create a NodePath from a string. A path is absolute if it starts with a slash.
   * Absolute paths are only valid in the global scene tree, not within individual scenes.
   * In a relative path, "." and ".." indicate the current node and its parent.
   *
   * @param {string} path
   *
   * @constructor
   */
  constructor(path = '') {
    /* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */
    this._absolute = false;
    this._name = [];
    this._name_size = [];
    this._subname = [];
    this._subname_size = [];

    this.path = path;
  }

  get path() {
    return (this._absolute ? '/' : '')
      + this._name.join('/')
      + (this._subname.length > 0 ? ':' : '')
      + this._subname.join(':');
  }

  set path(path) {
    if (typeof path !== 'string' || path.length === 0) {
      return;
    }

    if (path[0] === '/') {
      this._absolute = true;
      // eslint-disable-next-line no-param-reassign
      path = path.substr(1);
    }

    this._name = path.split('/');
    this._subname = this._name.pop().split(':');
    this._name.push(this._subname.shift());

    this._name.forEach((name, idx) => {
      this._name_size[idx] = 4;
      this._name_size[idx] += name.length;
      this._name_size[idx] += name.length % 4 === 0 ? 0 : 4 - (name.length % 4);
    });

    this._subname.forEach((subname, idx) => {
      this._subname_size[idx] = 4;
      this._subname_size[idx] += subname.length;
      this._subname_size[idx] += subname.length % 4 === 0 ? 0 : 4 - (subname.length % 4);
    });
  }

  get variant() {
    return this;
  }

  get byteLength() {
    return 12
      + this._name_size.reduce((s, v) => (s + v), 0)
      + this._subname_size.reduce((s, v) => (s + v), 0);
  }
}

/**
 * Expose.
 *
 * @type {NodePath}
 */
module.exports = NodePath;
