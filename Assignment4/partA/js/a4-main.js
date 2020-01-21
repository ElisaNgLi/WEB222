var filterType = ""; // sets the filter type to "" (will later be dog, cat or bird)
var filterAgeMin = 0; // sets the filter age min to 0 (for no minimum age filter)
var filterAgeMax = Number.MAX_VALUE; // sets the filter age max to the largest number possible (for no maximum age filter)

// Taking data
window.onload = function () {
    loadTableWithFilters();
};

function loadTableWithFilters(){
   var som = document.querySelector("#main-table-body");
   som.innerHTML = "";
  

    petData.forEach(animal => {
        if((filterType == "" || animal.type == filterType) && animal.age >= filterAgeMin && animal.age <= filterAgeMax){
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            var tdd = document.createElement("td");
            var img = document.createElement("img");
            var h4 = document.createElement("h4");
            var span = document.createElement("span");
            var p = document.createElement("p");

            img.src=animal.image.src;
            img.alt=animal.image.alt;
            img.height=animal.image.height;
            img.width=animal.image.width;
            tdd.appendChild(img);

            h4.appendChild(document.createTextNode(animal.name));
            td.appendChild(h4);

            p.innerHTML = animal.description;
            td.appendChild(p);

            span.appendChild(document.createTextNode("Age: " + animal.age + " years old."));
            td.appendChild(span);
            tr.appendChild(tdd);
            tr.appendChild(td);
            som.appendChild(tr);
        }
    });

  

};

//invoking functions

function filterDog(){
    
    filterType = "dog";
    loadTableWithFilters();
}

function filterCat(){
  
    filterType = "cat";
    loadTableWithFilters();
}

function filterBird(){
    
    filterType = "bird";
    loadTableWithFilters();
}

function filter_zero_1(){
    
    filterAgeMax = 1;
    filterAgeMin = 0;
    loadTableWithFilters();
}

function filter_1_3(){
    
    filterAgeMin = 1;
    filterAgeMax = 3;
    loadTableWithFilters();

}

function filter_4_plus(){
    
    filterAgeMin = 4;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}

function filterAllPets(){
    
    filterType = "";
    filterAgeMin = 0;
    filterAgeMax = Number.MAX_VALUE;
    loadTableWithFilters();
}

