// Define dataset
var dataset = [];

// Function to add data to dataset and populate table
function addData() {
  // Get user input values
  var name = document.getElementById('name').value;
  var rank = document.getElementById('rank').value;
  var dischargeDate = document.getElementById('discharge-date').value;
  var other = document.getElementById('other').value;

  // Add data to dataset
  dataset.push({
    name: name,
    rank: rank,
    dischargeDate: dischargeDate,
    other: other
  });

  // Populate table
  populateTable();

  // Clear input fields
  document.getElementById('name').value = '';
  document.getElementById('rank').value = '';
  document.getElementById('discharge-date').value = '';
  document.getElementById('other').value = '';
}

// Function to populate table with dataset
function populateTable() {
  var tableBody = document.getElementById('table-body');
  tableBody.innerHTML = ''; // Clear previous data

  // Calculate how many rows are needed to fill the table
  var totalCells = 21 * 7;
  var totalData = dataset.length;
  var rowsNeeded = 21;

  // Populate table rows
  for (var i = 0; i < rowsNeeded; i++) {
    var row = document.createElement('tr');
    for (var j = 0; j < 7; j++) {
      var cell = document.createElement('td');
      var dataIndex = (i * 7 + j) % totalData; // Loop through dataset
      if (dataset[dataIndex]) {
        cell.textContent = dataset[dataIndex].name;
      } else {
        cell.textContent = ''; // If dataset is not enough to fill the table
      }
      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  }
}
