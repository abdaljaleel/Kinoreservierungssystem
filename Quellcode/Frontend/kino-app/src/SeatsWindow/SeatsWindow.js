import React, { Component } from 'react';
import "./styles.less";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWheelchair } from '@fortawesome/free-solid-svg-icons'

export class SeatsWindow extends Component {

    constructor(props) {
        super(props);
        // 0: frei, 1: selektiert, 2: schon gebucht
        // seats: [ [alle aus row 1], [alle aus row2], ...]
        this.state = {
            seats: [
                [{
                    id: 472,
                    row: 0,
                    col: 0,
                    price: 22.44,
                    category: "normal",
                    bookStatus: "0"
                },
                {
                    id: 473,
                    row: 0,
                    col: 1,
                    price: 22.44,
                    category: "handicap",
                    bookStatus: "0"
                }],
                [{
                    id: 474,
                    row: 1,
                    col: 0,
                    price: 22.44,
                    category: "normal",
                    bookStatus: "2"
                }
                ], [
                    {
                        id: 475,
                        row: 2,
                        col: 0,
                        price: 22.44,
                        category: "normal",
                        bookStatus: "0"
                    }
                ]
            ]
        };
    }

    componentDidMount() {
        // get seats data from backend
        // fetch("https://api.example.com/items")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 items: result.items
        //             });
        //         },
        //         // Note: it's important to handle errors here
        //         // instead of a catch() block so that we don't swallow
        //         // exceptions from actual bugs in components.
        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error
        //             });
        //         }
        //     )
        // Make a request for a user with a given ID
        // axios.get('/user?ID=12345')
        //     .then(function (response) {
        //         // handle success
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
        //     .then(function () {
        //         // always executed
        //     });
    }

    // Return JSX Elements in renderSeatPlan() function
    // displayBookingScreen(movie) {
    //     var seatTable = document.getElementById("seatPlanTable");
    //     for (var i = 0; i < 8; i++) {
    //         var row = document.createElement("tr");
    //         for (var j = 0; j < 12; j++) {
    //             // add seat
    //             const randomBookStatus = [0, 2][Math.floor(Math.random() * 2)];
    //             const randomCategory = [["normal", 9], ["handicap", 3]][Math.floor(Math.random() * 2)];
    //             row.appendChild(this.createSeatElement(movie, `R${i}C${j}`, randomBookStatus, randomCategory[0], randomCategory[1]));
    //         }
    //         seatTable.appendChild(row);
    //     }
    // }

    // createSeatElement(movie, seatNo, isBooked, category, price) {
    //     const seat = document.createElement("td");
    //     const div = document.createElement("div");
    //     div.className = (isBooked == 2 && "seat-occupied")
    //         || (category == "normal" && "seat")
    //         || (category == "handicap" && "seat-handicap");
    //     div.setAttribute("seat-number", seatNo);
    //     div.setAttribute("is-booked", isBooked);
    //     div.setAttribute("category", category);
    //     // 2 : nicht buchbar, da schon von anderer Person gebucht, also keinen listener hinzufügen
    //     if (isBooked != 2) {
    //         if (category == "handicap") {
    //             const wheelchairIcon = document.createElement("span");
    //             wheelchairIcon.className = "fa fa-wheelchair fa-lg";
    //             div.className = "fa fa-wheelchair seat-handicap";
    //         }
    //         div.addEventListener("click", function () {
    //             let totalNoTickets = Number(document.getElementById("totalNoTickets").innerHTML);
    //             if (div.getAttribute("is-booked") === "0") {
    //                 div.style.backgroundColor = "lightgreen";
    //                 div.setAttribute("is-booked", "1");
    //                 // book ticket
    //                 addTicket(movie, seatNo, category, price);
    //                 totalNoTickets++;
    //             } else if (div.getAttribute("is-booked") === "1") {
    //                 div.style.backgroundColor = div.getAttribute("category") == "handicap" ? "lightskyblue" : "white";
    //                 div.setAttribute("is-booked", "0");
    //                 // remove ticket from list
    //                 removeTicket(movie, seatNo, category);
    //                 totalNoTickets--;
    //             }
    //             calculatePriceSum();
    //             document.getElementById("totalNoTickets").innerHTML = totalNoTickets;
    //         });
    //     }
    //     seat.appendChild(div);
    //     return seat;
    // }

    // addTicket(movie, seatNo, category, price) {
    //     const table = document.getElementById("ticketPriceTable");
    //     // check if category is already present
    //     const existingTr = (table.children.length != 0
    //         && [...table.children].filter(el => el.getAttribute("price-category") == category)[0]);
    //     if (existingTr) {
    //         // add one ticket to existing category
    //         const newQuantity = Number(existingTr.getAttribute("ticket-quantity")) + 1;
    //         existingTr.setAttribute("ticket-quantity", newQuantity);
    //         let newPrice = newQuantity * Number(existingTr.getAttribute("ticket-price"));
    //         newPrice = (Math.round(newPrice * 100) / 100).toFixed(2);
    //         existingTr.children[0].innerHTML = `${newQuantity} x ${movie} (${category})`;
    //         existingTr.children[1].innerHTML = `${(Math.round(newPrice * 100) / 100).toFixed(2)} €`;
    //     } else {
    //         // add new ticket category
    //         const tr = document.createElement("tr");
    //         tr.className = "price-table-row";
    //         tr.setAttribute("seat-number", seatNo);
    //         tr.setAttribute("price-category", category);
    //         tr.setAttribute("ticket-quantity", 1);
    //         tr.setAttribute("ticket-price", price);
    //         const tdTicket = document.createElement("td");
    //         const tdPrice = document.createElement("td");
    //         tdTicket.className = tdPrice.className = "price-table-data";
    //         tdTicket.innerHTML = `${1} x ${movie} (${category})`;
    //         tdPrice.innerHTML = `${price} €`;
    //         tr.appendChild(tdTicket);
    //         tr.appendChild(tdPrice);
    //         table.appendChild(tr);
    //     }
    //     // keep track of selected seats
    //     selectedSeats.push({
    //         seatNo: seatNo,
    //         category: category,
    //         price: Number(price)
    //     });
    // }

    // calculatePriceSum() {
    //     const table = document.getElementById("ticketPriceTable");
    //     let price = 0;
    //     if (table.children.length != 0) {
    //         price = [...table.children]
    //             .map(el => Number(el.getAttribute("ticket-quantity")) * Number(el.getAttribute("ticket-price")))
    //             .reduce((oldVal, nextVal) => oldVal + nextVal);
    //     }
    //     document.getElementById("price-sum").innerHTML = `${(Math.round(price * 100) / 100).toFixed(2)} €`;
    // }

    // removeTicket(movie, seatNo, category) {
    //     // remove where = category
    //     const table = document.getElementById("ticketPriceTable");
    //     if (table.firstElementChild != null) {
    //         // remove ticket from category
    //         const existingTr = (table.children.length != 0
    //             && [...table.children].filter(el => el.getAttribute("price-category") == category)[0]);
    //         const newQuantity = Number(existingTr.getAttribute("ticket-quantity")) - 1;
    //         if (newQuantity == 0) {
    //             // remove element if last ticket is removed
    //             table.removeChild(existingTr);
    //         } else {
    //             existingTr.setAttribute("ticket-quantity", newQuantity);
    //             let newPrice = newQuantity * Number(existingTr.getAttribute("ticket-price"));
    //             newPrice = (Math.round(newPrice * 100) / 100).toFixed(2);
    //             existingTr.children[0].innerHTML = `${newQuantity} x ${movie} (${category})`;
    //             existingTr.children[1].innerHTML = `${newPrice} €`;
    //         }
    //         selectedSeats = selectedSeats.filter(el => el.seatNo !== seatNo);
    //     }
    // }

    onSeatClicked(id, row) {
        console.log(id, row);
        // update bookingstatus of state
        this.setState({
            seats: this.state.seats.map((seatRow, index) => {
                if (index === row) {
                    seatRow = seatRow.map(seat => {
                        return (seat.id === id && seat.bookStatus !== "2") ? { ...seat, bookStatus: seat.bookStatus === "0" ? "1" : "0" } : seat;
                    })
                }
                return seatRow;
            })
        });
        console.log(this.state.seats);
    }

    renderSeatPlan() {
        return this.state.seats.map(seatRow => {
            return (
                <tr>
                    {seatRow.map(seat => {
                        const { id, row, col, category, bookStatus } = seat;
                        const className = (bookStatus === "2" && "seat-occupied")
                            || (bookStatus === "1" && "seat-selected")
                            || (category === "handicap" && "seat-handicap")
                            || (category === "normal" && "seat");
                        return (
                            <td key={id} onClick={e => this.onSeatClicked(id, row)}>
                                <div className={className}>
                                    {category === "handicap" && <FontAwesomeIcon icon={faWheelchair} className="handicap-icon" />}
                                </div>
                            </td>
                        )
                    })}
                </tr>
            )
        });
    }

    renderPriceTable() {

    }


    render() {
        return (
            <div id="seats-popup">
                <h4>Sitzplätze auswählen</h4>
                <div className="seats-wrapper">

                    <div className="seats-selector">
                        <h4>Kino 11</h4>
                        <table id="seatPlanTable">
                            <tbody>{this.renderSeatPlan()}</tbody>
                        </table>
                    </div>

                    <div className="seats-prices" id="seats-prices">
                        <p><strong>Aktuelle Auswahl: <span id="totalNoTickets">0</span> Tickets</strong></p>
                        <table className="price-table" id="ticketPriceTable">
                            <tbody>{this.renderPriceTable()}</tbody>
                        </table>
                        <hr id="sum-line" />
                        <table className="price-table">
                            <tbody>
                                <tr className="price-table-row">
                                    <td className="price-table-data">Summe</td>
                                    <td id="price-sum" className="price-table-data">0.00 €</td>
                                </tr></tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

}