exports.isOdd = (...params) => {
  for(const param of params) {
      //Only accept finite numbers
      if(isNaN(parseFloat(param)) || !isFinite(param)) return false;
      //Only accept odds
      else if(param % 2 === 0) return false;
  }
  return true;
}