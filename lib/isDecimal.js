//checks if numbers in parameter are decimal numbers / floating point number
exports.isDecimal = (...params) => {
  for (const param of params) {
    //Only accept floating point numbers, infinite numbers can be allowed ie. repeating decimal
    //A decimal is a number with digits 0-9, and a decimal point, applies to negative numbers also
    //technically without a decimal point a number can be represented as a decimal still but we wont use notation as a case here
      if (Number.isNaN(parseFloat(param)) || !/\d/g.test(param) || !/\./.test(param)) return false;
    }
  return true;
};
