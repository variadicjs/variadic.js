exports.floatPrecise = (num) => {
  const str = num.toString();

  // if decimal terminates, or is not decimal, or is in exponential form, return num
  if (str.length < 17 || !/\./.test(str) || /e/.test(str)) return num;

  // Reverse loop through number looking for index of last precise digit.
  // Imprecise floats typically contain a long string of 9s or 0s,
  // sometimes terminating in some other number,
  // so begin loop at second to last index.
  let i = str.length - 2;
  const imprecise = str[i] === '9' ? '9' : '0';

  while (str[i] === imprecise) i -= 1;

  // round number to index of last precise digit
  return parseFloat(num.toPrecision(i));
};
