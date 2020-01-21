/*******************************************************************************
* WEB222 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca
* Academic Policy. No part of this assignment has been copied manually or
* electronically from any other source (including web sites) or distributed to
* other students.
*
* Name: Ali Samarimoghadam Student ID: 137036174 Date: June 8th 2018
*
******************************************************************************/

/*****************************
* Step 1
*****************************/

var e1, e2, e4, e5, e6, e7, str;

/*****************************
* Step 2
*****************************/

function capFirstLetter(myString) {
    
  first = (myString.substring(0,1)).toUpperCase();
  
  rest = (myString.substring(1, myString.length)).toLowerCase();
    
  return first + rest;
  
}

e1 = capFirstLetter(prompt("Please Enter Your First Name: "));


//console.log("Step 2 result is: " + capFirstLetter(e1));


/*****************************
* Step 3
*****************************/

var getAge = function(birthYear){
  
  var year = (new Date()).getFullYear();
  var age = year - birthYear;
   
  return age;
};

  e2 = getAge(prompt("Please Enter Your Birth Year: ", 1997));

  

//console.log("Step 3 result is: " + getAge(e2));


/*****************************
* Step 4
*****************************/

function capFirstLetter(myString) {
    
  first = (myString.substring(0,1)).toUpperCase();
  
  rest = (myString.substring(1, myString.length)).toLowerCase();
    
  return first + rest;
  
}

e3 = prompt("Please Enter The Name of Your College: ", "seneca college");

var collegeName = e3.split(' ');
var i;
var caps= []; 

for (i =0; i < collegeName.length ; i++){
    
    caps[i] = capFirstLetter(collegeName[i]);
}

e3 = caps.join(' ');

//console.log("Step 4 result is: " + caps.join(' '));

/*****************************
* Step 5
*****************************/

e4 = prompt("Please Enter Your 5 Favorite Sports(in lower case separated by comma): ", "hockey,football,basketball,tennis,golf");

if (/football/g.test(e4) == true)
  e4 = e4.replace(/football/g, "soccer");

var e4 = e4.split(',');

e5 = prompt("Please Enter an Extra Favorite Sport: " , "formula 1");
            
e4.push(e5);

//console.log("Step 5 Result is: " + e4);

/*****************************
* Step 6
*****************************/

for (i=0 ; i< e4.length; i++){
  e4[i] = e4[i].toUpperCase(); 
}

e4 = e4.sort();

//console.log("Step 6 Result is: " + e4);


/*****************************
* Step 7
*****************************/

function getDateString(myDate) {
  
  var year = myDate.getFullYear();
  
  var month = myDate.getMonth() + 1;
  
  if (Number(month) < 10)
    month = "0" + month;
  
  var date = myDate.getDate();
  
   if (Number(date) < 10)
     date = "0" + date;
  
  return year + "-" + month + "-" + date;
}

e6 = new Date();

e7 = getDateString(e6);

//console.log("Step 7 Result is: " + e7);

/*****************************
* Step 8
*****************************/

str = "User info: \n\n" 
  + "name (e1): " + e1 + "\n" 
  + "age (e2): " + e2 + "\n" 
  + "school (e3): " + e3 + "\n" 
  + "favorite sports (e4):\n";

for(var i = 0; i < e4.length; ++i){
  str += "\t" + e4[i] + '\n';
}

  str += "current date (e7): " + e7

console.log(str);






  

