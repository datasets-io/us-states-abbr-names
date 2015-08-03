US State Abbreviations and Names
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Maps US state abbreviations to state names.


## Installation

``` bash
$ npm install datasets-us-states-abbr-names
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var table = require( 'datasets-us-states-abbr-names' );
```

#### table

Maps US state two-letter abbreviations to state names.

``` javascript
console.dir( table );
/*
	{
		"AL": "Alabama",
		"AK": "Alaska",
		"AZ": "Arizona",
		"AR": "Arkansas",
		"CA": "California",
		...
	}
*/
```


## Examples

``` javascript
var table = require( 'datasets-us-states-abbr-names' );

function getState( abbr ) {
	var state;

	// Ensure an abbreviation is capitalized...
	abbr.toUpperCase();

	// Get the state name:
	state = table[ abbr ];

	// Ensure a valid abbreviation was provided...
	if ( state === void 0 ) {
		throw new Error( 'unrecognized state abbreviation. Value: `' + abbr + '`.' );
	}
	return state;
}

console.log( getState( 'MO' ) );
console.log( getState( 'NJ' ) );
console.log( getState( 'CA' ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/datasets-us-states-abbr-names.svg
[npm-url]: https://npmjs.org/package/datasets-us-states-abbr-names

[travis-image]: http://img.shields.io/travis/datasets-io/us-states-abbr-names/master.svg
[travis-url]: https://travis-ci.org/datasets-io/us-states-abbr-names

[codecov-image]: https://img.shields.io/codecov/c/github/datasets-io/us-states-abbr-names/master.svg
[codecov-url]: https://codecov.io/github/datasets-io/us-states-abbr-names?branch=master

[dependencies-image]: http://img.shields.io/david/datasets-io/us-states-abbr-names.svg
[dependencies-url]: https://david-dm.org/datasets-io/us-states-abbr-names

[dev-dependencies-image]: http://img.shields.io/david/dev/datasets-io/us-states-abbr-names.svg
[dev-dependencies-url]: https://david-dm.org/dev/datasets-io/us-states-abbr-names

[github-issues-image]: http://img.shields.io/github/issues/datasets-io/us-states-abbr-names.svg
[github-issues-url]: https://github.com/datasets-io/us-states-abbr-names/issues
