(() => {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    //  array to store column headings
    const arr = ["Name", "Age", "DOB", "Email", "Company"];

    // Creating a row to Add column headings
    let row = document.createElement("tr");
    //  for adding heading of the columns
    for (let i = 0; i < 5; ++i) {
        let thead = document.createElement("th");
        let text = document.createTextNode(arr[i]);
        thead.appendChild(text);
        row.append(thead);
        // adding styling to column heading
        thead.style.cssText = 'border: 1px solid black;font: italic small-caps bold 20px Georgia, serif;';
    }
    tblBody.appendChild(row);
    tbl.appendChild(tblBody);
    // creating all cells
    for (let i = 0; i < 5; i++) {
        // creating table rows
        row = document.createElement("tr");

        for (let j = 0; j < 5; j++) {
            //  puting the <td> at the end of the table row
            let td = document.createElement("td");
            let text = document.createTextNode("cell [" + i + "] [" + j + "]");
            td.appendChild(text);
            row.appendChild(td);
            // adding styling to cells
            td.style.cssText = 'border: 1px solid white;border-collapse: collapse;background-color: #96D4D4;';
        }

        // adding the row to the end of the table body
        tblBody.appendChild(row);
    }

    // puting the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    //  adding styling to the table
    tbl.style.cssText = 'width:800px;height:400px;border: 2px solid black;border-collapse: collapse;text-align:center;margin:auto;';
})();