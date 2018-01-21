// TODO: OBJECT AND ARRAY EQUALITY
exports.isEqual = (...params) => {
    if (params.length === 0) throw 'Must provide one or more paramters'
    const firstParam = params.shift();
    for (const param of params) {
        if (param !== firstParam) return false
    }

    return true;
}