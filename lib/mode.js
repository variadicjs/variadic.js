exports.mode = (...params) => {
  handleErrors(params);

  // create a list of params with their value and frequency
  const valFreq = params.reduce((acc, cur) => {
    const num = acc.find(obj => obj.value === cur);
    num ? num.frequency += 1 : acc.push({ value: cur, frequency: 1 });
    return acc;
  }, []);

  // if there is only one number in the list, return its value and frequency
  if (valFreq.length === 1) return valFreq;

  // if all frequencies are the same, the set has no mode
  if (valFreq.every(num => num.frequency === valFreq[0].frequency)) return 'set has no mode';

  // else, return the number(s) that have the highest frequency
  return valFreq.sort((a, b) => a.frequency - b.frequency)
    .filter((num, _, arr) => num.frequency !== arr[0].frequency);
};

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