'use strict';
function testFalseLooseEqualityComparison() {
	// body...
	var a=0;
	var b=1;
		return a==b;
}

function testTrueLooseNonEqualityComparison() {
	// body...
	var a=0;
	var b=1;
		return a!==b;
}

function testTrueLooseEqualityComparison() {
	// body...
	var a=0;
	var b=1;
		return a<b;
}

function testFalseStrictEqualityComparison() {
	// body...
	var a=0;
	var b=1;
		return a>=b;
}

function testTrueStrictEqualityComparison() {
	// body...
	var a=0;
	var b=1;
		return a<=b;
}