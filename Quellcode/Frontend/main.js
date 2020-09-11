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
}


function displayBookingScreen(movie) {
    var seatTable = document.getElementById("movieSeatChooser");
    for (var i = 0; i < 6; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < 15; j++) {
            // add seat
            const randomBookStatus = [0, 2][Math.floor(Math.random() * 2)];
            const randomCategory = [["normal", 9], ["handicap", 3]][Math.floor(Math.random() * 2)];
            row.appendChild(getSeatElement(movie, `R${i}S${j}`, randomBookStatus, randomCategory[0], randomCategory[1]));
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
                removeTicket(movie, category);
                totalNoTickets--;
            }
            calculatePriceSum();
            document.getElementById("totalNoTickets").innerHTML = totalNoTickets;
        });
    }
    seat.appendChild(div);
    return seat;
}


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
        tr.setAttribute("ticket-price", price)
        const tdTicket = document.createElement("td");
        const tdPrice = document.createElement("td");
        tdTicket.className = tdPrice.className = "price-table-data";
        tdTicket.innerHTML = `${1} x ${movie} (${category})`;
        tdPrice.innerHTML = `${price} €`;
        tr.appendChild(tdTicket);
        tr.appendChild(tdPrice);
        table.appendChild(tr);
    }
}

function calculatePriceSum() {
    const table = document.getElementById("ticketPriceTable");
    let price = 0;
    if (table.children.length != 0) {
        price = [...table.children]
            .map(el => Number(el.getAttribute("ticket-quantity")) * Number(el.getAttribute("ticket-price")))
            .reduce((oldVal, nextVal) => oldVal + nextVal);
        console.log(price);
    }
    document.getElementById("price-sum").innerHTML = `${(Math.round(price * 100) / 100).toFixed(2)} €`;
}


function removeTicket(movie, category) {
    // remove where = category
    const table = document.getElementById("ticketPriceTable");
    if (table.firstElementChild != null) {
        // remove ticket from category
        // TODO: find out which category
        // const existingTr = table.firstElementChild;
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
    }
}






displayBookingScreen("James Bond 007 - No Time to Die");


// var xmlHttp = new XMLHttpRequest();
// xmlHttp.open("GET", "http://localhost:8080/movie/demo", false); // false for synchronous request
// xmlHttp.send(null);
// console.log(xmlHttp.responseText);
