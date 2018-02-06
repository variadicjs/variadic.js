
exports.isPositiveInteger = (...params) => {
  for (const param of params) {
    // Checks the type to be Number
    if (Object.prototype.toString.call(param) !== '[object Number]' ||
            // Is it an integer?
            param % 1 !== 0 ||
            // Is it positive?
            param <= 0 ||
            // maximum safe integer check
            /// / https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER
            param > Number.MAX_SAFE_INTEGER) {
      return false;
    }
  }
  return true;
};
