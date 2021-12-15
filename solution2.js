function store() {
    var inputName = document.getElementById("name");
    var inputEmail = document.getElementById("email");
    var inputPhn = document.getElementById("phone");
    // function to validate details
    validate(inputName.value, inputEmail.value, inputPhn.value);
    
}

var validate = (inputName, inputEmail, inputPhn) => {
    const nameRegex = /^[a-z][a-z\s]*$/;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    inputName.value.match(nameRegex) ? (inputEmail.value.match(emailRegex) ? (inputPhn.value.match(phoneRegex) ? storeInLocal(inputName, inputEmail, inputPhn)
    : alert("enter a valid phone number !"))
    : alert("Email is required and should be of form abc@gmail.com "))
    : alert(" Name is required. Should contain only spaces and letters. No digits / special characters allowed.");

}

// function to store data in local storage
var storeInLocal = (inputName, inputEmail, inputPhn) => {
    localStorage.setItem("Name", inputName.value);
    localStorage.setItem("Email", inputEmail.value);
    localStorage.setItem("Phone", inputPhn.value);
    displayData();
}

//  function to display data in the screen two
var displayData = () => {
    const table = document.getElementById("table");
    const tableBody = document.getElementById("tbody");
    //  array to store column headings
    const arr = ["Name", "Email", "Phone"];
    var row = document.createElement("tr");

    for (let j = 0; j < 3; ++j) {
        //  puting the <td> at the end of the table row
        let td = document.createElement("td");
        let text = document.createTextNode(localStorage.getItem(arr[j]));
        td.appendChild(text);
        row.appendChild(td);

    }

    // adding the row to the end of the table body
    tableBody.appendChild(row);

    // puting the <tbody> in the <table>
    table.appendChild(tableBody);
}



