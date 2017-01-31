'use strict';
function testFalseLooseEqualityComparison(){
  var x = 0
  var y = 1
  return x == y
  debugger;
}
function testTrueLooseNonEqualityComparison() {
  var x = 0
  var y = 1
  return x != y
}
function testTrueLooseEqualityComparison() {
  var f1 = 1
  var f2 = 1
  return f1 == f2
}
function testFalseStrictEqualityComparison() {
  var n1 = 1
  var n2 = "1"
  return n1 === n2
}
function testTrueStrictEqualityComparison() {
  var n1 = 1
  var n2 = "1"
  return n1 === parseInt(n2)
}
