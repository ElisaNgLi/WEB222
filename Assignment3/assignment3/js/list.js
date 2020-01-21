// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];


var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload = function(){

    var MyFruits = document.querySelector("#OutputFruits");
    var openList= "<ol>", closeList = "</ol>", open="<ul>",close="</ul>";
    

    for (var i = 0; i < fruits.length; ++i) {
        
                openList+= "<li>"+fruits[i]+'</li>';
    }
openList += closeList;
MyFruits.innerHTML = openList;



var directorylist = document.querySelector("#Outputdirectory");

for (var i = 0; i < directory.length; ++ i){
    if (directory[i].type == "file"){
        open += "<li>" + directory[i].name +"</li>";
    }else if(directory[i].type == "directory"){
        open += "<li>"+directory[i].name +"</li>" ;
        for (var j = 0; j < directory[i].files.length ; ++j ){
            open += "<ul>"+"<li>" + directory[i].files[j].name+"</li>"+"</ul>";
        }
    }
}
open += close;
directorylist.innerHTML = open;
}



