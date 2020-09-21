import React, { Component, useState, useEffect } from 'react';
import "./styles.less";
import api from '../api';
import OutsideClickHandler from 'react-outside-click-handler';
import Button from 'react-bootstrap/Button';
import OverviewWindow from '../OverviewWindow/OverviewWindow';
import ShowtimesWindow from '../ShowtimesWindow/ShowtimesWindow';
import SeatsWindow from '../SeatsWindow/SeatsWindow';
import PaymentWindow from '../PaymentWindow/PaymentWindow';

const firstWindow = 0;
const lastWindow = 3;
const infoStages = ["Überblick", "Vorstellung wählen", "Sitzplätze wählen", "Tickets buchen"];

const MainModal = (props) => {
    const [currentWindow, setCurrentWindow] = useState(firstWindow);
    const [selectedMovie, setSelectedMovie] = useState({});
    const [selectedShowEvent, setSelectedShowEvent] = useState({});
    const [selectedSeats, setSelectedSeats] = useState([]);
    const tempBooking = {
        Booking: {},
        seats: [{ seatId: undefined, isDiscounted: undefined }],
        cuId: "1",
        showEventId: undefined,
    }
    // senden
    // const booking_DB = {
    //     Booking: {},
    //     Seats: [{ seatId: "id", isDiscounted: "true" }],
    //     cuId: "1",
    //     showEventId: "1"
    // }
    // empfangen, wenn price ==, dann an paypal schicken, dann zurück ans backend die gleiche Buchung mit isPaid = true, sonst abbrechen
    // const booking = {
    //     totalPrice: "1"
    // }

    const handleAddSeat = (seat) => {
        setSelectedSeats([...selectedSeats, seat]);
    }
    const handleRemoveSeat = (seat) => {
        setSelectedSeats(selectedSeats.filter(s => !(s.row === seat.row && s.seat === seat.seat)));
    }
    const handleShowEventChange = (showEvent) => {
        console.log(showEvent);
        setSelectedShowEvent(showEvent);
    }



    useEffect(() => {
        api.get(`/movies/${props.movieId}`)
            .then(res => {
                console.log(res.data);
                const movie = res.data;
                const { title, description, prodCountry, trailer, length, fsk, bookedCounter } = movie;
                setSelectedMovie({
                    title: title,
                    description: description,
                    prodCountry: prodCountry,
                    trailer: trailer,
                    length: length,
                    fsk: fsk,
                    bookedCounter: bookedCounter
                })
            });
    }, [])

    function nextWindow() {
        if (currentWindow < lastWindow)
            setCurrentWindow(currentWindow + 1);
        else
            // TODO: hier muss zuerst das Ticket gebucht & bestätigt werden, danach das Modal schließen
            closeModal();
    }

    function previousWindow() {
        if (currentWindow > firstWindow)
            setCurrentWindow(currentWindow - 1);
        else closeModal();
    }

    function closeModal() {
        props.setSelectedMovieId(-1);
    }


    return (
        <div className="movie-modal-background">
            <div className="movie-modal-wrapper">
                <OutsideClickHandler onOutsideClick={() => {
                    console.log("abc");
                    closeModal();
                }}>
                    <div className="movie-modal-header">
                        <h2 className="movie-modal-heading">{selectedMovie.title}</h2>
                        <span className="close" onClick={e => closeModal()}>&times;</span>
                    </div>

                    <div className="movie-modal-content">
                        {currentWindow === 0 && <OverviewWindow id="modal-window-overview" movie={selectedMovie}></OverviewWindow>}

                        {currentWindow === 1 && <ShowtimesWindow id="modal-window-showtimes" selectedShowEvent={selectedShowEvent}
                            handleShowEventChange={handleShowEventChange} movieId={props.movieId}></ShowtimesWindow>}

                        {currentWindow === 2 && <SeatsWindow id="modal-window-seats"
                            handleAddSeat={handleAddSeat} handleRemoveSeat={handleRemoveSeat} selectedSeats={selectedSeats}
                            movie={selectedMovie} selectedShowEvent={selectedShowEvent}></SeatsWindow>}

                        {currentWindow === 3 && <PaymentWindow id="modal-window-payment"></PaymentWindow>}
                    </div>

                    <div className="movie-modal-footer">
                        <div className="button-footer-back">
                            <Button id="btn-back" onClick={e => previousWindow()}>
                                {currentWindow === firstWindow ? "Abbrechen" : "Zurück"}
                            </Button>
                        </div>
                        <div className="movie-modal-stage-text">
                            {infoStages[currentWindow]}
                        </div>
                        <div className="button-footer-continue">
                            <Button id="btn-continue" onClick={e => nextWindow()}>
                                {currentWindow === lastWindow ? "Bestätigen" : "Weiter"}
                            </Button>
                        </div>
                    </div>
                </OutsideClickHandler>
            </div>
        </div>
    )
}

export default MainModal;