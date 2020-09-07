// Code

const table = document.getElementById("posterTable");

var maxRow = 2;
var maxCol = 5;

for (let row = 0; row < maxRow; row++) {
    var tableRow = document.createElement("tr");
    for (let col = 0; col < maxCol; col++) {
        const image = document.createElement("img");
        image.src = "Skyfall.jpg";
        image.className = "moviePosterImage";
        const title = document.createElement("div");
        const text = document.createElement("p");
        text.className = "moviePosterTitle";
        text.innerHTML = "James Bond 007";
        title.appendChild(text);
        var div = document.createElement("div");
        div.className = "moviePoster";
        div.appendChild(image);
        div.appendChild(text);
        table.appendChild(div);
    }
    // table.appendChild(tableRow);
}

