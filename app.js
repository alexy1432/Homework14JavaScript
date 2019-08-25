var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function createtable (data) {

tbody.html("")

data.forEach(function(d){
    var row = tbody.append("tr");
    Object.entries(d).forEach(function([key, value]) {
    var cell = tbody.append("td");
    cell.text(value);
});
});
}

createtable(tableData)
var button = d3.select("#filter-btn");
button.on("click", function(){
     d3.event.preventDefault();
var input = d3.select("#datetime");
var city = d3.select("#city");
var state = d3.select("#state");
var country = d3.select("#country");
var shape = d3.select("#shape");


var inputValue = input.property("value");
var cityValue = city.property("value");
var stateValue = state.property("value");
var countryValue = country.property("value");
var shapeValue = shape.property("value");


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
