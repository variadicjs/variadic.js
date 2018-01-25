const isAscending = (...params) => {
    if (params.length === 0) throw 'Must provide one or more paramters';
    let currentParam = params.shift();
    for (const param of params) {
        if (typeof param !== 'number') throw 'All parameters must be a number';
        if (param <= currentParam) return false;
    }
    return true;
}

console.log(isAscending(1));
console.log(isAscending(1, 2, 5));
console.log(isAscending(1, 5, 2));
//console.log(isAscending(1, '2'));
//console.log(isAscending(1, true));
//console.log(isAscending(true, 4));
//console.log(isAscending(false, 5));
//console.log(isAscending(1, 'apple', 2));
console.log(isAscending(1, 4, 5.5));