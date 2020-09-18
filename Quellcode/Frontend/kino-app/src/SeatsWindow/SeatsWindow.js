import React, { Component, useState } from 'react';
import "./styles.less";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWheelchair } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const SeatsWindow = (props) => {

    // statisch: Rabatt -2€
    // sortiert: row, col
    // PK: seatId
    const [seats, setSeats] = useState([
        {
            id: 472,
            row: 0,
            col: 0,
            price: 22.44,
            category: "loge",
            type: "normal",
            bookStatus: "0"
        },
        {
            id: 473,
            row: 0,
            col: 1,
            price: 22.44,
            category: "loge",
            type: "paarsitz",
            bookStatus: "0"
        },
        {
            id: 474,
            row: 1,
            col: 0,
            price: 22.44,
            category: "parkett",
            type: "handicap",
            bookStatus: "0"
        },
        {
            id: 475,
            row: 2,
            col: 0,
            price: 22.44,
            category: "parkett",
            type: "normal",
            bookStatus: "2"
        }
    ]);

    function onSeatClicked(id, row) {
        // lift state up here? MainModal could know selected seats...
        setSeats(seats.map((seat) => {
            return seat.id === id && seat.bookStatus !== "2" ? {
                ...seat,
                bookStatus: seat.bookStatus === "0" ? "1" : "0"
            } : seat;
        }));
    }

    function renderSeatPlan() {
        let seatsByRow = [];
        // find unique rows
        let uniqueRows = seats.map(s => s.row).filter((row, i, array) => array.indexOf(row) === i);
        for (const row of uniqueRows) {
            let tempRow = seats.filter(s => s.row === row);
            seatsByRow.push(tempRow);
        }
        // return seats in <tr> by row
        return (seatsByRow.map(row => {
            return (
                <tr>
                    {row.map(seat => {
                        const { id, row, col, category, type, bookStatus } = seat;
                        const className = (bookStatus === "2" && "seat-occupied")
                            || (bookStatus === "1" && "seat-selected")
                            || (type === "handicap" && "seat-handicap")
                            || (type === "paarsitz" && "seat-couple")
                            || (type === "normal" && "seat");
                        return (
                            <td id={id} onClick={e => bookStatus !== "2" && onSeatClicked(id, row, col)}>
                                <div className={className}>
                                    {
                                        (type === "handicap" && <FontAwesomeIcon icon={faWheelchair} className="handicap-icon" />)
                                        || (type === "paarsitz" && <FontAwesomeIcon icon={faHeart} className="handicap-icon" />)
                                    }
                                </div>
                            </td>
                        )
                    })}
                </tr>
            )
        })
        )
    }

    function renderPriceTable() {
        return seats.filter(s => s.bookStatus === "1").map(seat => {
            return (
                <tr className="price-table-row">
                    <td className="price-table-data">
                        {`${props.movie.title} - 01.01.2020, XX:XX Uhr - ${seat.type}, ${seat.category}`}
                    </td>
                    <td className="price-table-data">
                        {`${Math.round(seat.price * 100) / 100} €`}
                    </td>
                </tr>
            )
        })
    }

    function renderSum() {
        let selectedSeats = seats.filter(s => s.bookStatus === "1");
        // notify MainModal
        props.handleSeatChange(selectedSeats);
        console.log(selectedSeats);
        let totalPrice = 0;
        if (selectedSeats.length !== 0) {
            totalPrice = selectedSeats.map(seat => seat.price).reduce((prev, curr) => prev + curr);
            totalPrice = Math.round(totalPrice * 100) / 100;
        }
        return (
            <tr className="price-table-row">
                <td className="price-table-data">{`${selectedSeats.length} x ${props.movie.title}`}</td>
                <td id="price-sum" className="price-table-data">{`${totalPrice} €`}</td>
            </tr>
        )
    }


    return (
        <div id="seats-popup">
            <h4>Sitzplätze auswählen</h4>
            <div className="seats-wrapper">

                <div className="seats-selector">
                    <h4>Kino 11</h4>
                    <table id="seatPlanTable">
                        <tbody>{renderSeatPlan()}</tbody>
                    </table>
                </div>

                <div className="seats-prices" id="seats-prices">
                    <p><strong>Aktuelle Auswahl: <span id="totalNoTickets">0</span> Tickets</strong></p>
                    <table className="price-table" id="ticketPriceTable">
                        <tbody>{renderPriceTable()}</tbody>
                    </table>
                    <hr id="sum-line" />
                    <table className="price-table">
                        <tbody>{renderSum()}</tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default SeatsWindow;