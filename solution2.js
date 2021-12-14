function store() {

    var inputName = document.getElementById("name");
    var inputEmail = document.getElementById("email");
    var inputPhn = document.getElementById("phone");
    localStorage.setItem("Name", inputName.value);
    localStorage.setItem("Email", inputEmail.value);
    localStorage.setItem("Phone", inputPhn.value);

console.log(localStorage.getItem("Name"));
    const tbl = document.getElementById("tbl");
    const tblBody = document.getElementById("tbody");
    //  array to store column headings
    const arr = ["Name", "Email", "Phone"];

    // Creating a row to Add column headings
    let row = document.createElement("tr");
    //  for adding heading of the columns
    for (let i = 0; i < 3; ++i) {
        let thead = document.createElement("th");
        let text = document.createTextNode(arr[i]);
        thead.appendChild(text);
        row.append(thead);
        // adding styling to column heading
        thead.style.cssText = 'border: 1px solid black;height: 50px; background : white;font: italic small-caps bold 15px Georgia, serif;';
    }
    tblBody.appendChild(row);
    tbl.appendChild(tblBody);
    // creating all cells
    // creating table rows
    row = document.createElement("tr");

    for (let j = 0; j < 3; j++) {
        //  puting the <td> at the end of the table row
        let td = document.createElement("td");
        let text = document.createTextNode(localStorage.getItem(arr[j]));
        td.appendChild(text);
        row.appendChild(td);
        // adding styling to cells
        td.style.cssText = 'border: 1px solid white; height: 50px;border-collapse: collapse;background-color: #96D4D4;';
    }

    // adding the row to the end of the table body
    tblBody.appendChild(row);

// puting the <tbody> in the <table>
tbl.appendChild(tblBody);
// appends <table> into <body>
// document.getElementById("screen2").appendChild(tbl);
//  adding styling to the table
tbl.style.cssText = 'width:80%;border: 2px solid black;border-collapse: collapse;text-align:center;margin:auto;';
    }
