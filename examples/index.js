'use strict';

var table = require( './../lib' );

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
