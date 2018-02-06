exports.isNegativeNumber = (...params) => {
  for (const param of params) {
    // Only accept finite numbers
    if (Number.isNaN(parseFloat(param)) || !Number.isFinite(Number(param))) return false;
    // Because zero is neither positive nor negative (in most countries),
    // the following phrases are sometimes used to refer to the sign of an unknown number:
    // A number is negative if it is less than zero.
    //  A number is non-negative if it is greater than or equal to zero.
    else if (param >= 0) return false;
  }
  return true;
};
