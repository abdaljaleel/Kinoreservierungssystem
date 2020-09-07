// Code

const table = document.getElementById("moviesOverview");

var maxRow = 2;
var maxCol = 5;

for (let row = 0; row < maxRow; row++) {
    var tableRow = document.createElement("tr");
    for (let col = 0; col < maxCol; col++) {
        const image = document.createElement("img");
        image.src = "JamesBond.png";
        image.className = "image";
        var tableData = document.createElement("td");
        var div = document.createElement("div");
        var divText = document.createElement("div");
        div.className = "moviePoster";
        div.appendChild(image);
        div.appendChild(divText);
        tableData.appendChild(div);
        tableRow.appendChild(tableData);
    }
    table.appendChild(tableRow);
}

