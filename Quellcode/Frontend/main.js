// Code
"use strict";

// Draw Title
var titleCanvas = document.getElementById("titleCanvas");
var ctx = titleCanvas.getContext("2d");
ctx.font = "80px Arial";
var gradient = ctx.createLinearGradient(0, 0, titleCanvas.width, 0);
gradient.addColorStop("0", "magenta");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("1.0", "red");
// Fill with gradient
ctx.fillStyle = gradient;
ctx.fillText("Kino XY", 0, 90);


// Prepare Modal
var modal = document.getElementById("main-modal");
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    closeModal();
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}


// Paypal Element
function showPaypal() {
    // calculate final sum for payment
    let priceEur = 0;
    selectedSeats.forEach(seat => priceEur += seat.price);
    document.getElementById("paypal-button-container").innerHTML = "";
    paypal.Buttons({
        style: {
            shape: 'rect',
            color: 'gold',
            layout: 'vertical',
            label: 'pay',
        },
        // TODO: geht nicht richtig (Error in Konsole)
        createOrder: function (data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        currency_code: 'EUR',
                        value: priceEur
                    },
                    items: selectedSeats,
                }]
            });
        },
        onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
                alert('Transaction completed by ' + details.payer.name.given_name + '!');
                modalWindowState = "overview";
            });
        }
    }).render('#paypal-button-container');
}

// Continue Button
var modalWindowState = "overview";
const btnContinue = document.getElementById("btn-continue");
btnContinue.addEventListener("click", function () {
    if (modalWindowState === "overview") {
        document.getElementById("modal-window-overview").style.display = "none";
        document.getElementById("modal-window-seats").style.display = "block";
        modalWindowState = "seats";
    } else if (modalWindowState === "seats") {
        // get selected seats for summary
        document.getElementById("seats-prices-summary").innerHTML = document.getElementById("seats-prices").innerHTML;
        // go to payment screen
        document.getElementById("modal-window-seats").style.display = "none";
        document.getElementById("modal-window-payment").style.display = "block";
        showPaypal();
        btnContinue.style.display = "none";
        modalWindowState = "booking";
    } else if (modalWindowState === "booking") {
        // only close modal if booking was completed successfully
    }
});

// Back Button
const btnBack = document.getElementById("btn-back");
btnBack.addEventListener("click", function () {
    console.log(modalWindowState);
    if (modalWindowState === "overview") {
        // close the modal
        closeModal();
    } else if (modalWindowState === "seats") {
        // go back to overview window
        document.getElementById("modal-window-seats").style.display = "none";
        document.getElementById("modal-window-overview").style.display = "block";
        modalWindowState = "overview";
    } else if (modalWindowState === "booking") {
        // go back to seats window
        document.getElementById("btn-continue").style.display = "block";
        document.getElementById("modal-window-payment").style.display = "none";
        // document.getElementById("paypal-button-container").innerHTML = "";
        document.getElementById("modal-window-seats").style.display = "block";
        modalWindowState = "seats";
    }
});

function closeModal() {
    if (modalWindowState === "seats") {
        document.getElementById("seats-popup").style.display = "none";
    } else if (modalWindowState === "booking") {
        document.getElementById("btn-continue").style.display = "block";
        document.getElementById("payment-popup").style.display = "none";
        document.getElementById("paypal-button-container").innerHTML = "";
    }
    modal.style.display = "none";
    modalWindowState = "none";
    // TODO: remove innerHTML, add it again when re-displaying the modal windows
}


const table = document.getElementById("posterTable");

var maxRow = 2;
var maxCol = 3;

for (let row = 0; row < maxRow; row++) {
    var tableRow = document.createElement("tr");
    for (let col = 0; col < maxCol; col++) {
        const image = document.createElement("img");
        image.src = "static/Skyfall.jpg";
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

        div.addEventListener("click", function(){
            showModal();
        });
    }
    // table.appendChild(tableRow);
}

function displayMovieDetails(movie) {
    // show main modal
    modal.style.display = "block";
    const overviewWindow = document.getElementById("modal-window-overview");
    overviewWindow.style.display = "block";
    console.log(overviewWindow);
    overviewWindow.setAttribute("data-moviename", "Mein Movie");
    console.log(overviewWindow);
    // document.getElementById("modal-content-window").innerHTML = "";
    // const overviewWindow = document.createElement("div");
    // overviewWindow.id = "modal-window-overview";
    // document.getElementById("modal-content-window").appendChild(overviewWindow);
}







// var xmlHttp = new XMLHttpRequest();
// xmlHttp.open("GET", "http://localhost:8080/movie/demo", false); // false for synchronous request
// xmlHttp.send(null);
// console.log(xmlHttp.responseText);
