'use strict';

var first=0;
var second=1;

function testFalseLooseEqualityComparison(){
	return first == second;
}

function testTrueLooseNonEqualityComparison(){
	return first != second;
}

var first_value=1;
var second_value="1";
function testTrueLooseEqualityComparison(){
	return first_value == second_value;
}

function testFalseStrictEqualityComparison(){
	return first_value === second_value;
}

function testTrueStrictEqualityComparison(){
	return first_value === parseInt(second_value);
}