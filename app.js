var tableData = data;

// YOUR CODE HERE!

//Select tbody HTML Elements
var tbody = d3.select("tbody");


function createtable (data){
// Clears out table and & populate with filtered search
tbody.html("")
//update each cell's text with UFO Sighting Value
data.forEach(function(d){
    var row = tbody.append("tr");
    Object.entries(d).forEach(function([key, value]){
    console.log(key, value);
    var cell = tbody.append("td");
    cell.text(value);
});
});
}

createtable(tableData)
var submit_button = d3.select("#filter-btn");
submit_button.on("click", function(){
     d3.event.preventDefault();
var input = d3.select("#datetime");
var city = d3.select("#city");
var state = d3.select("#state");
var country = d3.select("#country");
var shape = d3.select("#shape");



// Clear inout value ??

// // clear the input value
// d3.select("#datetime").node().value = ""



//Get the value property of the input element
var inputValue = input.property("value");

var cityValue = city.property("value");

var stateValue = state.property("value");

var countryValue = country.property("value");

var shapeValue = shape.property("value");
console.log(shapeValue);
console.log(stateValue);

// Filter data based on user input
//Check if value exists
if (inputValue){
tableData = tableData.filter(tableData => tableData.datetime === inputValue);
createtable(tableData)
};


if (cityValue){
tableData = tableData.filter(tableData => tableData.city === cityValue);
createtable(tableData)
};

if(stateValue){
tableData = tableData.filter(tableData => tableData.state === stateValue);
createtable(tableData)
};

if(countryValue){
tableData = tableData.filter(tableData => tableData.country === countryValue);
createtable(tableData)
};

if(shapeValue){
tableData = tableData.filter(tableData => tableData.shape === shapeValue);
createtable(tableData)
};
});
