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
    if(modalWindowState === "overview") {
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
var maxCol = 5;

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
    }
    // table.appendChild(tableRow);
}

function displayMovieDetails(movie) {
    // show main modal
    modal.style.display = "block";
    document.getElementById("modal-window-overview").style.display = "block";
}


function displayBookingScreen(movie) {
    var seatTable = document.getElementById("seatPlanTable");
    for (var i = 0; i < 8; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < 12; j++) {
            // add seat
            const randomBookStatus = [0, 2][Math.floor(Math.random() * 2)];
            const randomCategory = [["normal", 9], ["handicap", 3]][Math.floor(Math.random() * 2)];
            row.appendChild(getSeatElement(movie, `R${i}C${j}`, randomBookStatus, randomCategory[0], randomCategory[1]));
        }
        seatTable.appendChild(row);
    }
}

function getSeatElement(movie, seatNo, isBooked, category, price) {
    const seat = document.createElement("td");
    const div = document.createElement("div");
    div.className = (isBooked == 2 && "seat-occupied")
        || (category == "normal" && "seat")
        || (category == "handicap" && "seat-handicap");
    div.setAttribute("seat-number", seatNo);
    div.setAttribute("is-booked", isBooked);
    div.setAttribute("category", category);
    // 2 : nicht buchbar, da schon von anderer Person gebucht, also keinen listener hinzufügen
    if (isBooked != 2) {
        if (category == "handicap") {
            const wheelchairIcon = document.createElement("span");
            wheelchairIcon.className = "fa fa-wheelchair fa-lg";
            // div.appendChild(wheelchairIcon);
            div.className = "fa fa-wheelchair seat-handicap";
        }
        div.addEventListener("click", function () {
            let totalNoTickets = Number(document.getElementById("totalNoTickets").innerHTML);
            if (div.getAttribute("is-booked") === "0") {
                div.style.backgroundColor = "lightgreen";
                div.setAttribute("is-booked", "1");
                // book ticket
                addTicket(movie, seatNo, category, price);
                totalNoTickets++;
            } else if (div.getAttribute("is-booked") === "1") {
                div.style.backgroundColor = div.getAttribute("category") == "handicap" ? "lightskyblue" : "white";
                div.setAttribute("is-booked", "0");
                // remove ticket from list
                removeTicket(movie, seatNo, category);
                totalNoTickets--;
            }
            calculatePriceSum();
            document.getElementById("totalNoTickets").innerHTML = totalNoTickets;
        });
    }
    seat.appendChild(div);
    return seat;
}

var selectedSeats = [];

function addTicket(movie, seatNo, category, price) {
    const table = document.getElementById("ticketPriceTable");
    // check if category is already present
    const existingTr = (table.children.length != 0
        && [...table.children].filter(el => el.getAttribute("price-category") == category)[0]);
    if (existingTr) {
        // add one ticket to existing category
        const newQuantity = Number(existingTr.getAttribute("ticket-quantity")) + 1;
        existingTr.setAttribute("ticket-quantity", newQuantity);
        let newPrice = newQuantity * Number(existingTr.getAttribute("ticket-price"));
        newPrice = (Math.round(newPrice * 100) / 100).toFixed(2);
        existingTr.children[0].innerHTML = `${newQuantity} x ${movie} (${category})`;
        existingTr.children[1].innerHTML = `${(Math.round(newPrice * 100) / 100).toFixed(2)} €`;
    } else {
        // add new ticket category
        const tr = document.createElement("tr");
        tr.className = "price-table-row";
        tr.setAttribute("seat-number", seatNo);
        tr.setAttribute("price-category", category);
        tr.setAttribute("ticket-quantity", 1);
        tr.setAttribute("ticket-price", price);
        const tdTicket = document.createElement("td");
        const tdPrice = document.createElement("td");
        tdTicket.className = tdPrice.className = "price-table-data";
        tdTicket.innerHTML = `${1} x ${movie} (${category})`;
        tdPrice.innerHTML = `${price} €`;
        tr.appendChild(tdTicket);
        tr.appendChild(tdPrice);
        table.appendChild(tr);
    }
    // keep track of selected seats
    selectedSeats.push({
        seatNo: seatNo,
        category: category,
        price: Number(price)
    });
}

function calculatePriceSum() {
    const table = document.getElementById("ticketPriceTable");
    let price = 0;
    if (table.children.length != 0) {
        price = [...table.children]
            .map(el => Number(el.getAttribute("ticket-quantity")) * Number(el.getAttribute("ticket-price")))
            .reduce((oldVal, nextVal) => oldVal + nextVal);
    }
    document.getElementById("price-sum").innerHTML = `${(Math.round(price * 100) / 100).toFixed(2)} €`;
}

// TODO: decoupling of data/UI!!!
function removeTicket(movie, seatNo, category) {
    // remove where = category
    const table = document.getElementById("ticketPriceTable");
    if (table.firstElementChild != null) {
        // remove ticket from category
        const existingTr = (table.children.length != 0
            && [...table.children].filter(el => el.getAttribute("price-category") == category)[0]);
        const newQuantity = Number(existingTr.getAttribute("ticket-quantity")) - 1;
        if (newQuantity == 0) {
            // remove element if last ticket is removed
            table.removeChild(existingTr);
        } else {
            existingTr.setAttribute("ticket-quantity", newQuantity);
            let newPrice = newQuantity * Number(existingTr.getAttribute("ticket-price"));
            newPrice = (Math.round(newPrice * 100) / 100).toFixed(2);
            existingTr.children[0].innerHTML = `${newQuantity} x ${movie} (${category})`;
            existingTr.children[1].innerHTML = `${newPrice} €`;
        }
        selectedSeats = selectedSeats.filter(el => el.seatNo !== seatNo);
    }
}



// displayMovieDetails("James Bond 007 - No Time to Die");




// var xmlHttp = new XMLHttpRequest();
// xmlHttp.open("GET", "http://localhost:8080/movie/demo", false); // false for synchronous request
// xmlHttp.send(null);
// console.log(xmlHttp.responseText);
