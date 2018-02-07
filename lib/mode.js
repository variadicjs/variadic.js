const handleErrors = (params) => {
  if (params.length === 0) throw new Error('Must provide one or more paramters');
  if (params.some(param => typeof param !== 'number')) {
    throw new Error('One of your parameters does not evaluate to a number');
  }
  // JS can only safely represent and compare integers between
  // Number.MAX_SAFE_INTEGER and Number.MAX_SAFE_INTEGER
  if (params.some(param => param > Number.MAX_SAFE_INTEGER || param < Number.MIN_SAFE_INTEGER)) {
    throw new Error('Cannot reliably test primality of numbers larger than 9,007,199,254,740,991 or smaller than -9,007,199,254,740,991');
  }
};

exports.mode = (...params) => {
  handleErrors(params);

  // create a list of the values and frequencies of params
  const valFreq = params.reduce((acc, cur) => {
    const num = acc.find(obj => obj.value === cur);
    if (num) {
      num.frequency += 1;
    } else {
      acc.push({ value: cur, frequency: 1 });
    }
    return acc;
  }, []);

  // if there is only one number in the list, return its value
  if (valFreq.length === 1) return valFreq.map(num => num.value);

  // if all frequencies are the same, the set has no mode
  if (valFreq.every(num => num.frequency === valFreq[0].frequency)) return undefined;

  // else, return the values(s) that have the highest frequency
  return valFreq
  // sort descending
    .sort((a, b) => b.frequency - a.frequency)
  // arr[0] has the highest frequency, so that is the mode,
  // plus any other values that have the same frequency are also modes
    .filter((num, _, arr) => num.frequency === arr[0].frequency)
  // return an array of just the values
    .map(num => num.value);
};

