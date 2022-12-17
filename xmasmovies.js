/*•	Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
•	A Bootstrap styled table representing your choice of data.
•	A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.
*/

let id = 0;//declare id variable as null to assign individual values to each id

document.getElementById('Submit').addEventListener('click', () => {//creates an event listener that executes code when the submit button is clicked
    let table = document.getElementById('list');//declares variable for table pulling from the DOM
    let row = table.insertRow(1);//declares variable for table row pulling from the DOM and inserting row at index 1 (row below the table headers)
    row.insertCell(0).innerHTML = document.getElementById('new-christmas-movie').value;//inserts another row in the table pulling from the new christmas movie (new movie) value that is typed in the form
    row.insertCell(1).innerHTML = document.getElementById('new-person-suggestion').value;//inserts another row in the table pulling from the new person suggestion (family member) value that is typed in the form
    document.getElementById('new-christmas-movie').value = '';//resets value of the new movie field to blank after submit button clicked and new row added to table
    document.getElementById('new-person-suggestion').value = '';//resets value of the family member field to blank after submit button clicked and new row added to table

});



