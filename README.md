# Variadic.js

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Gitter chat][gitter-image]][gitter-url]

A ES6 library of useful variadic functions.

### Prerequisites

* Windows, Linux or Mac OS X
* [NodeJS](https://nodejs.org)

### Installing

```
npm install variadic.js --save
```

Using:

```
const variadic = require('variadic.js');

variadic.isOdd(1, 3, 5, 9); // true

variadic.isOdd(1, 3, 5, 9, 8); // false
```

or

```
const variadic = require('variadic.js/isEmpty');

variadic.isEmpty([], {}, 0); // true

variadic.isEmpty([0, 2, 3], {}, 0); // false

variadic.isEven(2, 4, 6); // error
```

## Running the tests

```
npm test
```

### And coding style tests
We use eslint that extends the airbnb-standard. You can read more here: [airbnb/js](https://github.com/airbnb/javascript) 

```
npm run lint
```

## Deployment

Add additional notes about how to deploy this on a live system

## Implemented Functions

List of possible functions and their implementation status, compiled by [@D1esel-De](https://github.com/D1esel-Dev):

General Types:

- [ ] Natural numbers
- [ ] Integers
- [ ] Rational numbers
- [ ] Irrational numbers
- [ ] Real numbers
- [ ] Imaginary numbers
- [ ] Complex numbers
- [ ] Hyper-Complex numbers

Number Representation:

- [ ] Decimal
- [ ] Binary
- [ ] Fractions
- [ ] Scientific notation

Signed Numbers:

- [X] Positive real numbers
- [X] Negative numbers
- [ ] Non-negative numbers
- [ ] Non-positive numbers

Types of integers:

- [X] Even and odd numbers
- [X] Prime number
- [ ] Composite number

Computability:

- [X] Sum
- [ ] Factoral
- [ ] Minimum
- [ ] Maximum
- [ ] Range
- [X] Average 
- [X] Mode
- [X] Median
- [X] Deviation
- [X] Ascending
- [X] Descending
- [ ] Absolute/magnitude (non-negative value of a number)

## Built With

* [NodeJS](https://nodejs.org)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/variadicjs/variadic.js/releases). 

## Authors

Grow with Google Scholars c/o 2018

See also the list of [contributors](https://github.com/variadicjs/variadic.js/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc

[npm-image]: https://img.shields.io/npm/v/variadic.js.svg?style=for-the-badge
[npm-url]: https://npmjs.org/package/variadic.js
[travis-image]: https://img.shields.io/travis/variadicjs/variadic.js/master.svg?style=for-the-badge
[travis-url]: https://travis-ci.org/variadicjs/variadic.js
[coveralls-image]: https://img.shields.io/coveralls/variadicjs/variadic.js.svg?style=for-the-badge
[coveralls-url]: https://coveralls.io/r/variadicjs/variadic.js?branch=develop
[gitter-image]: https://img.shields.io/gitter/room/variadicjs/variadic.js.svg?style=for-the-badge
[gitter-url]: https://gitter.im/variadicjs/Lobby?source=orgpage
