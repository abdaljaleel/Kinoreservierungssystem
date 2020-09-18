import React, { Component, useState, useEffect } from 'react';
import "./styles.less";
import api from '../api';
import OutsideClickHandler from 'react-outside-click-handler';
import OverviewWindow from '../OverviewWindow/OverviewWindow';
import ShowtimesWindow from '../ShowtimesWindow/ShowtimesWindow';
import SeatsWindow from '../SeatsWindow/SeatsWindow';
import PaymentWindow from '../PaymentWindow/PaymentWindow';

const firstWindow = 0;
const lastWindow = 3;

const MainModal = (props) => {
    const [currentWindow, setCurrentWindow] = useState(firstWindow);
    const [selectedMovie, setSelectedMovie] = useState({});
    const [tempBooking, setTempBooking] = useState({
        Booking: {},
        Seats: [{ seatId: undefined, isDiscounted: undefined }],
        cuId: "1",
        showEventId: undefined,
    });

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
        <div className="modal-background">
            <div className="modal-wrapper">
                <OutsideClickHandler onOutsideClick={() => {
                    console.log("abc");
                    closeModal();
                }}>
                    <div className="modal-header">
                        <span className="close" onClick={e => closeModal()}>&times;</span>
                        <h2 id="modal-heading" className="modal-heading">{selectedMovie.title}</h2>
                    </div>

                    <div className="modal-content">
                        {currentWindow === 0 && <OverviewWindow id="modal-window-overview" movie={selectedMovie}></OverviewWindow>}
                        {currentWindow === 1 && <ShowtimesWindow id="modal-window-showtimes" movieId={props.movieId}></ShowtimesWindow>}
                        {currentWindow === 2 && <SeatsWindow id="modal-window-seats" movieId={props.movieId}></SeatsWindow>}
                        {currentWindow === 3 && <PaymentWindow id="modal-window-payment"></PaymentWindow>}
                    </div>

                    <div className="modal-footer">
                        <div className="button-footer-back">
                            <button id="btn-back" onClick={e => previousWindow()}>{currentWindow === firstWindow ? "Abbrechen" : "Zurück"}</button>
                        </div>
                        <div className="button-footer-continue">
                            <button id="btn-continue" onClick={e => nextWindow()}>{currentWindow === lastWindow ? "Bestätigen" : "Weiter"}</button>
                        </div>
                    </div>
                </OutsideClickHandler>
            </div>
        </div>
    )
}

export default MainModal;