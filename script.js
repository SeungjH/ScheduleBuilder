// Define dataset
var dataset = [];
let boolCheck = true;

let groupAcheckBox = document.getElementById("checkboxA");
let groupBcheckBox = document.getElementById("checkboxB");
let groupCcheckBox = document.getElementById("checkboxC");

let groupA = false;
let groupB = false;
let groupC = false;


groupAcheckBox.addEventListener("change", function() {
    // Check if the checkbox is checked
    if (groupAcheckBox.checked) {
        console.log("AAA");
        // Do something when the checkbox is checked
    } else {
        console.log("uncheck");
        // Do something when the checkbox is unchecked
    }
});

// Function to add data to dataset and populate table
function addData() {
    if (!boolCheck) {
        return;
    }

    // Get user input values
    var name = document.getElementById('name').value;
    var rank = document.getElementById('rank').value;
    var other = document.getElementById('other').value;

    // Add data to dataset
    dataset.push({
        name: name,
        rank: rank,
        other: other
    });
    //print dataset
    console.log(dataset);


    // Populate table
    populateTable();

    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('rank').value = '';
    document.getElementById('other').value = '';
}
//is inputs filled?
function checkInput() {
    if (document.getElementById('name').value == "" || document.getElementById('rank').value == "") {
        boolCheck = false;
        alert("Please fill all fields");
    }
    else {
        boolCheck = true;
    }
}
// Function to populate table with dataset
function populateTable() {
    var tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ''; // Clear previous data

    // Calculate how many rows are needed to fill the table
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
