import React, { Component, useState } from 'react';
import "./styles.less";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWheelchair } from '@fortawesome/free-solid-svg-icons'

const SeatsWindow = () => {
    const [seats, setSeats] = useState([
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
    ]);


    // componentDidMount() {
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
    // }

    // const randomBookStatus = [0, 2][Math.floor(Math.random() * 2)];
    // const randomCategory = [["normal", 9], ["handicap", 3]][Math.floor(Math.random() * 2)];


    function onSeatClicked(id, row) {
        console.log(id, row);
        setSeats(seats.map((seatRow, index) => {
            if (index === row) {
                seatRow = seatRow.map(seat => {
                    return (seat.id === id && seat.bookStatus !== "2") ? { ...seat, bookStatus: seat.bookStatus === "0" ? "1" : "0" } : seat;
                })
            }
            return seatRow;
        }));
        console.log(seats);
    }

    function renderSeatPlan() {
        return seats.map(seatRow => {
            return (
                <tr>
                    {seatRow.map(seat => {
                        const { id, row, col, category, bookStatus } = seat;
                        const className = (bookStatus === "2" && "seat-occupied")
                            || (bookStatus === "1" && "seat-selected")
                            || (category === "handicap" && "seat-handicap")
                            || (category === "normal" && "seat");
                        return (
                            <td key={id} onClick={e => onSeatClicked(id, row)}>
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
                        <tbody>a</tbody>
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

export default SeatsWindow;