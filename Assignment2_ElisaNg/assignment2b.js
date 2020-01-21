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


// an array of course objects
var courses = [
    { code: 'APC100', name: 'Applied Professional Communications', hours: 3, url: 'http://www.senecacollege.ca/' },
    { code: 'IPC144', name: 'Introduction to Programming Using C', hours: 4, url: 'https://scs.senecac.on.ca/~ipc144/' },
    { code: 'ULI101', name: 'Introduction to Unix/Linux and the Internet', hours: 4, url: 'https://cs.senecac.on.ca/~fac/uli101/live/' },
    { code: 'IOS110', name: 'Introduction to Operating Systems Using Windows', hours: 4, url: 'https://cs.senecac.on.ca/~fac/ios110' },
    { code: 'EAC150', name: 'College English', hours: 3, url: null }
];

// prototype object for creating student objects
var student = { 
    name: "", 
    dob: new Date(),
    sid: "",
    program: "", 
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
};

/************************************************************
 * Start your Part B code here. Do not change the code above.
 ************************************************************/
// task 1
console.log("\n *** Task 1 ***\n\n");
var last = courses.pop();
console.log(`Course ${last.code} was deleted from the array (courses)`);
console.log("Adding new course objects into the array (courses)");

var ibc233 ={code: 'IBC233', name: 'iSERIES Business Computing', hours: 4, url: 'http://scs.senecac.on.ca/~ibc233/'};
var oop244 ={code: 'OOP244', name: 'Introuction to Object Oriented Programming', hours: 4, url: 'http://scs.senecac.on.ca/~oop244/'};
var web222 ={code: 'WEB222', name: 'Internet I - Internet Fundamentals', hours: 4, url: 'http://scs.senecac.on.ca/~web222/'};
var dbs201 ={code: 'DBS201', name: 'Introduction to Database Design and SQL', hours: 4, url: 'http://scs.senecac.on.ca/~dbs201/'};

courses.push(ibc233);
courses.push(oop244);
courses.push(web222);
courses.push(dbs201);
console.log("\nCourse objects in the array (courses):")

for (var i = 0; i <courses.length; i ++){
  console.log(`"${courses[i].code}, ${courses[i].name}, ${courses[i].hours} hours/week, website: ${courses[i].url}"`);
}

// task 2

console.log("\n\n *** Task 2 ***\n\n");


var JohnSmith = Object.create(student);
JohnSmith.name = 'John Smith';
JohnSmith.dat = new Date(9/10/1999);
JohnSmith.id = '010456101';
JohnSmith.prog = 'CPA';
JohnSmith.gpa = 4;
JohnSmith.toString();

var JimCarrey = Object.create(student);
JimCarrey.name = 'Jim Carrey';
JimCarrey.dat = new Date(1/17/1992);
JimCarrey.id = '012345678';
JimCarrey.prog = 'CPD';
JimCarrey.gpa = 3.5;
JimCarrey.toString();

var JustinBieber = Object.create(student);
JustinBieber.name = 'Justin Bieber';
JustinBieber.dat = '3/1/1994';
JustinBieber.id = '0987654321';
JustinBieber.prog = 'CAN';
JustinBieber.gpa = 3;
JustinBieber.toString();

var JustinTrudeau = Object.create(student);
JustinTrudeau.name = 'Justin Trudeau';
JustinTrudeau.dat = '1/12/1992';
JustinTrudeau.id = '123456789';
JustinTrudeau.prog = 'CAN';
JustinTrudeau.gpa = 4;
JustinTrudeau.toString();

var all = [JohnSmith, JimCarrey, JustinBieber, JustinTrudeau];

console.log ("Student objects in the array (students):");

for (var i in all){
    console.log ( i + ": " + all[i].toString());
}


