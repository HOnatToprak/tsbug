// @tscheck
const x = Object.freeze({
  a : "a"
});

/** @typedef {typeof x[keyof typeof x]} x */

module.exports.x = x;
