'use strict';
function testFalseLooseEqualityComparison() {
	var x = 0;
	var y = 1;
	return 0==1;
	return false
}

function testTrueLooseNonEqualityComparison() {
	var x = 0;
	var y = 1;
	return 0!=1;
	return true
}

function testTrueLooseEqualityComparison() {
	var x = 1;
	var y = "1";
	return 1 == "1";
	return true
}

function testFalseStrictEqualityComparison() {
	var x = 1;
	var x = "1";
	return 1 === "1";
	return false
}

function testTrueStrictEqualityComparison() {
	var x = 1;
	var y = "1";
	return 1 === parseInt("1");

}