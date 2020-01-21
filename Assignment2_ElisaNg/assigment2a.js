/*******************************************************************************
* WEB222 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca
* Academic Policy. No part of this assignment has been copied manually or
* electronically from any other source (including web sites) or distributed to
* other students.
*
* Name: Elisa Ng Student ID: 136265170 Date: June 9,2018
*
******************************************************************************/

/*****************************
* Step 1
*****************************/

var e1 = "";
var e2 = "";
var e3 = "";
var e4 = "";
var e5 = "";
var e6 = "";
var e7 = "";
var str = "";

/*****************************
* Step 2
*****************************/
 function capFirstLetter (str){
   return str[0].toUpperCase() + str.substr(1, str.length).toLowerCase();
}

e1= prompt ("Please enter your name: ", "elisa");
e1 = capFirstLetter(e1);


/*****************************
* Step 3
*****************************/
var getAge = function (year){
  return (new Date().getFullYear() - year);
}
e2= prompt ("Please enter your birth year: ", 1998);
e2= getAge(e2);


/*****************************
* Step 4
*****************************/
e3 = prompt ("Please enter the name of your college: ", "seneca college");
e3 = e3.split('  ')
e3 = e3.map((x) => capFirstLetter(x));


/*****************************
* Step 5
*****************************/
e4= prompt ("Please enter 5 favorite sports(in lower case seperated by a comma): ", "hockey,football,basketball,tennis,golf");
e4= e4.replace(/football/i, 'soccer');
e4 = e4.split(',');

e5= prompt ("Please enter an extra favorite sport: ", "formula 1");
e4.push(e5);


/*****************************
* Step 6
*****************************/
e4 = e4.map((x) => x.toUpperCase());
e4.sort();


/*****************************
* Step 7
*****************************/
e6 = new Date();
var getDateString = function (dat){
  return dat.getFullYear() + '-' + ((dat.getMonth() <= 9) ? '0'+ dat.getMonth() : dat.getMonth) + '-' +((dat.getDay() <= 9) ? '0' + dat.getDay() : dat.getDay);
 

}
e7 = getDateString(e6);


/*****************************
* Step 8
*****************************/
str = `
User info:

name (e1): ${e1}
age (e2): ${e2}
school (e3): ${e3}
favorite sports (e4):
${'\t' + e4.join('\n\t')}
current date (e7): ${e7}
`

console.log(str);

