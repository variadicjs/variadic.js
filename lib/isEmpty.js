'use strict';

exports.isEmpty = (...params) => {
  const invalid = params.some((param) => {
    switch (typeof param) {
      case 'string':
        if (param.trim().length > 0) return true;
        break;
      case 'number':
        if (param !== 0) return true;
        break;
      case 'object':
        if (param !== null && Object.keys(param).length > 0) return true;
        if (param !== null && param.length > 0) return true;
        break;
      case 'boolean':
        if (param) return true;
        break;
      default:
        return true;
    }
    return false;
  });
  return !invalid;
};
