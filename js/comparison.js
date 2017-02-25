'use strict';

function testFalseLooseEqualityComparison()
{ var integer1 = 0;
  var integer2 = 1;
  return integer1 == integer2;}

function testTrueLooseNonEqualityComparison()
{ var integer1 = 0;
  var integer2 = 1;
  return  integer1 != integer2;}

function testTrueLooseEqualityComparison()
{ var integer1 = 1;
  var integer2 = "1"
  return integer1 == integer2;}


function testFalseStrictEqualityComparison()
{ var integer1 = 1;
  var integer2= '1';
  return integer1 === integer2;}

function testTrueStrictEqualityComparison()
{ var integer1 = 1;
  var integer2 = '1';
  return integer1 === parseInt(integer2);}
