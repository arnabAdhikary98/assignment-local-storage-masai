document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // get all the form values from the user
    const name = document.getElementById('name').value;
    const employeeId = document.getElementById('employeeID').value;
    const department = document.getElementById('department').value;
    const experience = parseFloat(document.getElementById('exp').value);
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mbl').value;

    // determine role based on experience
    let role = "";
    if (experience > 5) {
        role = 'Senior';
    } else if (experience >= 2 && experience <= 5) {
        role = 'Junior';
    } else {
        role = 'Fresher';
    }

    // create new table row and append to table body
    const tBody = document.querySelector('tbody');
    const newRow = document.createElement('tr');
    
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${employeeId}</td>
        <td>${department}</td>
        <td>${experience} years</td>
        <td>${email}</td>
        <td>${mobile}</td>
        <td>${role}</td>
        <td><button id='del-btn' onclick="deleteRow(this)"> Delete</button></td>
    `;
    
    tBody.appendChild(newRow);

    // Reset form fields after submission
    this.reset();
});


// function to delete row
function deleteRow(button) {
    const row = button.closest('tr');
    row.remove();
}
