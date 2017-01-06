'use strict';
function testFalseLooseEqualityComparison() {
  var zero= 0, one= 1;
return (zero ==one)
}

function testTrueLooseNonEqualityComparison() {
var zero=0 ,one=1;
return (zero!=one)
}

function testTrueLooseEqualityComparison() {
var num=1 ,str="1";
return (num==str)
}

function testFalseStrictEqualityComparison() {
  var num=1 ,str="1";
  return (num===str)
}

function testTrueStrictEqualityComparison() {
  var num=1 ,str="1";
  return (num===parseInt(str))
}
