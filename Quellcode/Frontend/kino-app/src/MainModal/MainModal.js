import React, { Component, useState } from 'react';
import "./styles.less";
import OutsideClickHandler from 'react-outside-click-handler';
import OverviewWindow from '../OverviewWindow/OverviewWindow';
import ShowtimesWindow from '../ShowtimesWindow/ShowtimesWindow';
import SeatsWindow from '../SeatsWindow/SeatsWindow';
import PaymentWindow from '../PaymentWindow/PaymentWindow';

const firstWindow = 0;
const lastWindow = 3;

const MainModal = (props) => {
    const [currentWindow, setCurrentWindow] = useState(firstWindow);

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
        props.modalListener(false);
    }


    return (
        <div className="modal-background">
            <OutsideClickHandler onOutsideClick={() => {
                closeModal();
            }}>
                <div className="modal-wrapper">
                    <div className="modal-header">
                        <span className="close" onClick={e => closeModal()}>&times;</span>
                        <h2 id="modal-heading" className="modal-heading">Modal Header</h2>
                    </div>

                    <div className="modal-content">
                        {currentWindow === 0 && <OverviewWindow id="modal-window-overview"></OverviewWindow>}
                        {currentWindow === 1 && <ShowtimesWindow id="modal-window-showtimes"></ShowtimesWindow>}
                        {currentWindow === 2 && <SeatsWindow id="modal-window-seats" data-moviename="James Bond"></SeatsWindow>}
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
                </div>
            </OutsideClickHandler>
        </div>
    )
}

export default MainModal;