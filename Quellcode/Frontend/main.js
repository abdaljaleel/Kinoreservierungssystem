// Code
let data;

function getData(){

    const Http = new XMLHttpRequest();
    const url = 'http://5.252.225.55:8080/kinoticketreservierungssystem-0.0.1-SNAPSHOT/movies';
    Http.open("GET", url);

    Http.onload = function() {
        data = JSON.parse(Http.response);
        console.log(data);
    };
    Http.send();
}

getData();

const table = document.getElementById("posterTable");

var modalFooter = document.getElementsByClassName("modal-footer");
var buttonBooking = document.createElement("button");
buttonBooking.innerHTML = "Sitzplätze aussuchen";
buttonBooking.className = "button-booking";
modalFooter[0].appendChild(buttonBooking);

var maxRow = 2;
var maxCol = 3;

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

        div.addEventListener("click", function(){
            showModal();
        });
    }
    // table.appendChild(tableRow);
}


buttonBooking.addEventListener("click", function(){
    openBookingModal();
});

var tableSeats = document.getElementById("movieSeatChooser");
for (var i = 0; i < 5; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < 6; j++) {
        // add seat
        row.appendChild(getSeatElement());
    }
    tableSeats.appendChild(row);
}

// Get the modal
var modal = document.getElementById("myModal");
var modalBooking = document.getElementById("bookingModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var spanBooking = document.getElementsByClassName("close-booking")[0];
spanBooking.classList.add("close");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

spanBooking.onclick = function() {
    modalBooking.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal || event.target == modalBooking) {
    modal.style.display = "none";
    modalBooking.style.display = "none";
  }
}

function getSeatElement() {
    const seat = document.createElement("td");
    const div = document.createElement("div");
    div.className = "seat"; // using CSS
    div.addEventListener("click", function(){
        div.style.backgroundColor = div.style.backgroundColor == "red" ? "lightgreen" : "red";
        console.log(seat);
        console.log(seat.style);
    });
    seat.appendChild(div);
    return seat;
}

function showModal() {
    var modalHeading = document.getElementsByClassName("modal-heading")[0];
    modalHeading.innerHTML = "James Bond - Skyfall";
    modal.style.display = "block";
    var modalTitle = document.getElementById("movieTitle");
    modalTitle.innerHTML = "James Bond";

    var modalBody = document.getElementsByClassName("modal-body")[0];
}

function openBookingModal(){
    modal.style.display = "none";
    modalBooking.style.display = "block";
    var modalBookingHeading = document.getElementsByClassName("modal-booking-heading")[0];
    modalBookingHeading.innerHTML = "Sitzplätze aussuchen";
}

/* function displayBookingScreen() {
    var tableSeats = document.getElementById("movieSeatChooser");
    for (var i = 0; i < 5; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < 6; j++) {
            // add seat
            row.appendChild(getSeatElement());
        }
        tableSeats.appendChild(row);
    }
} */

