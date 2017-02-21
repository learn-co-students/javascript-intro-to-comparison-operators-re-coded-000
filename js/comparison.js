'use strict';
function testFalseLooseEqualityComparison(){
  var x = 0;
  var z = 1;
  return (x == z)
};
function testTrueLooseNonEqualityComparison(){
  var x = 0;
  var z = 1;
  return (x != z)
}
function testTrueLooseEqualityComparison(){
  var x = 1;
  var z = "1";
  return (x == z)
}
function testFalseStrictEqualityComparison(){
  var x = 1;
  var z = "1";
  return (x === z)
}
function testTrueStrictEqualityComparison(){
  var x = 1;
  var z = "1";
  return (x == z)
}
