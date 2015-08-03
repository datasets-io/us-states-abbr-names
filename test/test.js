/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	table = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'datasets-us-states-abbr-names', function tests() {

	it( 'should export an object', function test() {
		expect( table ).to.be.an( 'object' );
		assert.strictEqual( Object.keys( table ).length, 50 );
	});

	it( 'should map state abbreviations to names', function test() {
		assert.strictEqual( table[ 'MO' ], 'Missouri' );
		assert.strictEqual( table[ 'NJ' ], 'New Jersey' );
		assert.strictEqual( table[ 'CA' ], 'California' );
	});

});
