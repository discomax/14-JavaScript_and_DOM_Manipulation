// assign data from 'data.js' file to a variable
var tableData = data;

// use d3 to select the table body
tbody = d3.select("tbody")

// BONUS: Refactor to use Arrow Functions!
data.forEach((tableData) => {
  var row = tbody.append("tr");
  Object.entries(tableData).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});



