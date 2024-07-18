/*TODOmorrow
7/18: separate tables by groups: need three separate tables instead of 1
search about html table and how to use them

*/


// Define dataset
var dataset = [];
let boolCheck = true;

// Function to add data to dataset and populate table
function addData() {
    if (!boolCheck) {
        return;
    }


    // Get user input values
    var name = document.getElementById('name').value;
    var rank = document.getElementById('rank').value;
    var other = document.getElementById('other').value;

    var groupA  = document.getElementById("checkboxA").value;
    var groupB  = document.getElementById("checkboxB").value;
    var groupC  = document.getElementById("checkboxC").value;

    // Add data to dataset
    dataset.push({
        name: name,
        rank: rank,
        other: other,
        groupA : groupA,
        groupB : groupB,
        groupC : groupC
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
        for(let i = 0;i < dataset.length;i++){
            console.log(dataset[i]);
        }
    }
}
// Function to populate table with dataset
function populateTable() {
    var tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ''; // Clear previous data

    // Calculate how many rows are needed to fill the table
    var totalData = dataset.length;
    //21 if groupA uses 12 B uses 5 C uses 4
    var rowsNeeded = 21;

    // Populate table rows
    for(var r=0; r<rowsNeeded; r++){
        for(var c=0; c<7; c++){
            
        }
    }
    
    // for (var i = 0; i < rowsNeeded; i++) {
    //     var row = document.createElement('tr');
    //     for (var j = 0; j < 7; j++) {
    //         //if(dataset[dataIndex].)
    //         var cell = document.createElement('td');
    //         var dataIndex = (i * 7 + j) % totalData; // Loop through dataset
    //         if (dataset[dataIndex]) {
    //             console.log(dataIndex);
    //             console.log(dataset[dataIndex].groupB);
    //             if(dataset[dataIndex].groupA){ //groupA
    //                 cell.textContent = dataset[dataIndex].name;
    //                 console.log(dataset[dataIndex].groupA);
    //             }
    //             else if(dataset[dataIndex].groupB){ //groupB
    //                 cell.textContent = dataset[dataIndex].name;
    //                 console.log("b");
    //             }
    //             else if(dataset[dataIndex].groupC){ //groupC
    //                 cell.textContent = dataset[dataIndex].name;
    //                 console.log("c");
    //             }
    //         } else {
    //             cell.textContent = ''; // If dataset is not enough to fill the table
    //         }
    //         row.appendChild(cell);
    //     }
    //     tableBody.appendChild(row);
    // }
}
