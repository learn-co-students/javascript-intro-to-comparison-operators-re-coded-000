'use strict';

function testFalseLooseEqualityComparison(){
  var x = 0
  var y = 1
  return x == y
  
}
function testTrueLooseNonEqualityComparison() {
  var x = 0
  var y = 1
  return x != y
}
function testTrueLooseEqualityComparison() {
  var num1 = 1
  var num2 = 1
  return num1 == num2
}
function testFalseStrictEqualityComparison() {
  var num= 1
  var str = "1"
  return num === str
}
function testTrueStrictEqualityComparison() {
  var n1 = 1
  var n2 = "1"
  return n1 === parseInt(n2)
}