// Code

const table = document.getElementById("moviesOverview");

var maxRow = 2;
var maxCol = 5;

for (let row = 0; row < maxRow; row++) {
    var tableRow = document.createElement("tr");
    for (let col = 0; col < maxCol; col++) {
        var tableData = document.createElement("td");
        var div = document.createElement("div");
        div.className = "moviePoster";
        table.appendChild(div);
        // tableData.appendChild(div);
        // tableRow.appendChild(tableData);
    }
    // table.appendChild(tableRow);
}



