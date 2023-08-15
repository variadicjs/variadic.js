
/**
 * This function evaluates whether all parameters are equal
 * @memberof variadic
 * @author jhowardjr
 * @param {...*} params - One or more parameters.
 */
exports.isEqual = (...params) => {
  if (params.length === 0) throw new Error('Must provide one or more parameters');
  const firstParam = params.shift();
  for (const param of params) {
    switch (typeof param) {
      case 'string':
      case 'number':
      case 'boolean': {
        if (param !== firstParam) return false;
        break;
      }
      case 'object': {
        if (param.length !== firstParam.length) return false;

        const isArray = Array.isArray(param);

        // FALSE if values of the array aren't equal
        if (isArray && !param.every((value, index) => firstParam[index] === value)) {
          return false;
        }

        const firstParamKeys = Object.keys(firstParam);
        const paramKeys = Object.keys(param);

        // FALSE if objects have different number of keys
        if (!isArray && firstParamKeys.length !== paramKeys.length) {
          return false;
        }

        if (!isArray) {
          // FALSE if objects have different keys
          const firstSet = new Set(firstParamKeys);
          const secondSet = new Set(paramKeys);
          const diff = [...firstSet].filter(x => !secondSet.has(x));
          if (diff.length) return false;
        }

        if (!isArray) {
          // FALSE if objects have different values
          for (const key of firstParamKeys) {
            if (firstParam[key] !== param[key]) {
              return false;
            }
          }
        }

        break;
      }

        // no default
    }
  }

  return true;
};
