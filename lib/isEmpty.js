'use strict';

exports.isEmpty = (...params) => {
  for (const param of params) {
    switch (typeof param) {
      case 'string':
        if (param.trim().length > 0) return false;
        break;
      case 'number':
        if (param !== 0) return false;
        break;
      case 'object':
        if (param !== null && Object.keys(param).length > 0) return false;
        if (param !== null && param.length > 0) return false;
        break;
      case 'boolean':
        if (param) return false;
        break;
      default:
        return false;
    }
  }
  return true;
};
