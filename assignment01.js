/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of 
* this assignment has been copied manually or electronically from any other source (including web sites) 
* or distributed to other students.
*
* Name: Elisa Ng Student ID: 136265170 Date: ________________
*
********************************************************************************/

/*****************************
* Task 1
*****************************/

//variables 
var student = {name: " " , program: " " , courses:6, partimejob: false};
var ptjob = "don't have";

//prompt to get user information 
student ['name'] = ("Enter student name: ", "Elisa");
student ['program'] = ("Enter program: ", "CPA");
student ['courses'] = ("Number of courses: ", 6);
student ['partimejob'] = ("Part time job: ", false);

console.log(student);

//output

if (student ["partimejob"] == true){
  ptjob = "have";
}else{
  ptjob = "don't have";
}

console.log("My name is " + student["name"] + " and I am in " + student["program"] + " program." + "I'm taking " + student["courses"] + " course in this semester" + " and I " + ptjob + " a part-time job now");

/*****************************
* Task 2
*****************************/

var currentyear = new Date().getFullYear();

var age = prompt ("Please enter age: ");
console.log("You were born in the year of " + (currentyear - age) + ".");

var studyyear = prompt ("Enter the number of years you expect to study in the college: ");
console.log("You will graduate from Seneca College in the year of " + (currentyear+ +studyyear) + ".");

/*****************************
* Task 3
*****************************/

var celsius = 20 ;
var fahrenheit = celsius * (9/5) + 32;
console.log(celsius + " °C is " + fahrenheit + " °F");

celsius = (fahrenheit - 32) * 5/9;
console.log(fahrenheit + " °F is " + celsius + " °C");

/*****************************
* Task 4
*****************************/

for (var i = 0; i < 10; i++){
  var a = i % 2;
  if(a == 1 ){
    console.log( i + " is odd");
  }else {
  console.log( i + " is even");
}
}


/*****************************
* Task 5
*****************************/

var num1, num2;

function largerNum (num1, num2){
  if (num1 > num2){
    return num1;
  }
  return num2;
}

 function greaterNum (num1, num2){
    if (num1 > num2){
    return num1;
  }
  return num2;
}

var numA ;
var numB ;
numA = 5; numB = 12;
console.log("The larger number of " + numA + " and " + numB + " is " + largerNum(numA, numB));
console.log("The greater number of " + numA + " and " + numB + " is " + greaterNum(numA, numB));
numA = 5; numB = 12;

numA = 30; numB = 10;
console.log("The larger number of " + numA + " and " + numB + " is " + largerNum(numA, numB));
console.log("The greater number of " + numA + " and " + numB + " is " + greaterNum(numA, numB));
numA = 30; numB = 10;

/*****************************
* Task 6
*****************************/

function Evaluator (){
  var sum = 0;
  var num = arguments.length;
  
  for (var i = 0; i<num; i++){
    sum += arguments[i];
  }
  if ((sum/num) < 50){
    return false;
  }
  return true;
}

console.log ("Average greater than or equal to 50: " + Evaluator(10,20,30));
console.log ("Average greater than or equal to 50: " + Evaluator(30,20,40,90));
console.log ("Average greater than or equal to 50: " + Evaluator(25,45,67));

/*****************************
* Task 7
*****************************/

var number = 0;
var Grader = function (number){
  if (number >= 90){
    return "A+";
  }else if (number >= 80){
    return "A";
  }else if (number >= 75){
    return "B+";
  }else if (number >= 70){
    return "B";
  }else if (number >= 65){
    return "C+";
  }else if (number >= 60){
    return "C";
  }else if (number >= 55){
    return "D+";
  }else if (number >= 50){
    return "D;"
  }else {
    return "F";
  }
}

console.log ("Final grade is: " + Grader (37));
console.log ("Final grade is: " + Grader (67));
console.log ("Final grade is: " + Grader (97));

/*****************************
* Task 8
*****************************/

var num;
var numMultiples;

function showMultiples (num, numMultiples){
  for (var i = 1; i <= numMultiples; i++){
    console.log(num + " x " + i + " = " + (num*i));
  }
}

showMultiples (5,4);
showMultiples (3,5);
showMultiples (9,5);