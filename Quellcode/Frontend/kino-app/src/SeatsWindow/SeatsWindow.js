import React, { Component, useEffect, useState } from 'react';
import "./styles.less";
import api from '../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWheelchair } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const SeatsWindow = (props) => {

    const [seats, setSeats] = useState([]);

    useEffect(() => {
        api.get(`/seats/search/findBySID?sid=${props.selectedShowEvent.sid}`)
            .then(res => {
                const seatsDb = res.data._embedded.seats;
                setSeats(seatsDb?.map(s => ({
                    row: s.row,
                    seat: s.seat,
                    booked: s.booked,
                    handicap: s.handicap,
                    category: s.category,
                    price: s.defaultPrice,
                    isSelected: false // new attribute
                })));
            })
    }, [])

    // statisch: Rabatt -2€
    // sortiert: row, col
    // PK: seatId
    // const [seats, setSeats] = useState([
    //     {
    //         // id: 472,
    //         row: 0,
    //         seat: 0,
    //         handicap: false,
    //         category: "loge",
    //         discounted: false,
    //         defaultPrice: 22.44,
    //         // bookStatus: "0"
    //     },

    function onSeatClicked(clickedSeat) {
        if (props.selectedSeats.filter(s => s.row === clickedSeat.row && s.seat === clickedSeat.seat).length === 0) {
            // seat was added, notify MainModal
            props.handleAddSeat(clickedSeat);
        } else {
            props.handleRemoveSeat(clickedSeat);
        }
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
        return (seatsByRow.map((row, index) => {
            return (
                <tr key={index}>
                    {row.map(s => {
                        const { row, seat, booked, handicap, category, price, isSelected } = s;
                        let className = (booked && "seat-occupied")
                            || (handicap && "seat-handicap")
                            || (category === "paarsitz" && "seat-couple")
                            || (category === "parkett" && "seat");
                        // if this seat(row,col) is selected, set class to seat-selected
                        className = props.selectedSeats.filter(s => s.row === row && s.seat === seat).length === 0
                            ? className : "seat-selected";
                        return (
                            <td key={row, seat} onClick={e => !booked && onSeatClicked(s)}>
                                <div className={className}>
                                    {
                                        (handicap && <FontAwesomeIcon icon={faWheelchair} className="handicap-icon" />)
                                        || (category === "paarsitz" && <FontAwesomeIcon icon={faHeart} className="handicap-icon" />)
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
        return props.selectedSeats.map(seat => {
            let specification = `${props.movie.title} - ${seat.category}`;
            if (props.selectedShowEvent.is3D)
                specification += " - in 3D"
            if (seat.handicap)
                specification += " - rollstuhlgerecht";
            return (
                <tr className="price-table-row">
                    <td className="price-table-data">
                        {specification}
                    </td>
                    <td className="price-table-data">
                        {`${Math.round(seat.price * 100) / 100} €`}
                    </td>
                </tr>
            )
        })
    }

    function renderSum() {
        let totalPrice = 0;
        const totalSeats = props.selectedSeats.length;
        if (totalSeats !== 0) {
            totalPrice = props.selectedSeats.map(seat => seat.price).reduce((prev, curr) => prev + curr);
            totalPrice = Math.round(totalPrice * 100) / 100;
        }
        return (
            <tr className="price-table-row">
                <td className="price-table-data">{`${totalSeats} x ${props.movie.title}`}</td>
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
                    {seats.length !== 0 &&
                        (
                            <div className="seat-plan-table-wrapper">
                                <table id="seat-plan-table">
                                    <tbody>{renderSeatPlan()}</tbody>
                                </table>
                                <div className="movie-screen">
                                    Bildschirm
                                </div>
                            </div>
                        )
                    }
                    {seats.length === 0 && <div>Kein Sitzplan verfügbar</div>}
                </div>

                <div className="seats-prices" id="seats-prices">
                    <p><strong>Aktuelle Auswahl: {props.selectedSeats.length} {props.selectedSeats.length === 1 ? "Ticket" : "Tickets"}</strong></p>
                    <table className="price-table" id="ticketPriceTable">
                        <tbody>{renderPriceTable()}</tbody>
                    </table>
                    <hr id="sum-line" />
                    <table className="price-table">
                        <tbody>{renderSum()}</tbody>
                    </table>
                </div>
            </div>
        </div >
    );
}

export default SeatsWindow;