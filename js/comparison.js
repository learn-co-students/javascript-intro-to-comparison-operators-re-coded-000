'use strict';

function testFalseLooseEqualityComparison(){
  var d = 0;
  var f = 1;  
  return d == f;
}

function testTrueLooseNonEqualityComparison(){
  var d = 0;
  var f = 1;  
  return d != f;
}

function testTrueLooseEqualityComparison(){
  var f = 1;  
  var d = "1"
  return f == d;
}


function testFalseStrictEqualityComparison(){
  var f = 1;
  var d = '1';
  return f === d;
}

function testTrueStrictEqualityComparison(){
  var f = 1;
  var d = '1';
  return f === parseInt(d);
}