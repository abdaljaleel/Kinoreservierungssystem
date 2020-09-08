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
        div.addEventListener("click", function () { displayMovieDetails(text.innerHTML); });
        table.appendChild(div);
    }
    // table.appendChild(tableRow);
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function displayMovieDetails(movie) {
    modal.style.display = "block";
    document.getElementById("modalMovieDetails").innerHTML = movie;
}

