import React, { Component } from 'react';
import "./styles.less";
import { OverviewWindow } from '../OverviewWindow/OverviewWindow';
import { ShowtimesWindow } from '../ShowtimesWindow/ShowtimesWindow';
import { SeatsWindow } from '../SeatsWindow/SeatsWindow';
import { PaymentWindow } from '../PaymentWindow/PaymentWindow';

const firstWindow = 0;
const lastWindow = 3;

export class MainModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentWindow: 0,
        };
    }

    nextWindow() {
        if (this.state.currentWindow < lastWindow)
            this.setState({
                currentWindow: this.state.currentWindow + 1
            })
        else
        // TODO: hier muss zuerst das Ticket gebucht & bestätigt werden, danach das Modal schließen
        this.closeModal();
    }

    previousWindow() {
        if (this.state.currentWindow > firstWindow)
            this.setState({
                currentWindow: this.state.currentWindow - 1
            })
        else this.closeModal();
    }

    closeModal() {
        this.props.modalListener(false);
    }

    render() {
        return (
            <div className="modal-background">
                <div className="modal">

                    <div className="modal-header">
                        <span className="close" onClick={e => this.closeModal()}>&times;</span>
                        <h2 id="modal-heading" className="modal-heading">Modal Header</h2>
                    </div>

                    <div className="modal-content">
                        {this.state.currentWindow === 0 && <OverviewWindow id="modal-window-overview"></OverviewWindow>}
                        {this.state.currentWindow === 1 && <ShowtimesWindow id="modal-window-showtimes"></ShowtimesWindow>}
                        {this.state.currentWindow === 2 && <SeatsWindow id="modal-window-seats" data-moviename="James Bond"></SeatsWindow>}
                        {this.state.currentWindow === 3 && <PaymentWindow id="modal-window-payment"></PaymentWindow>}
                    </div>

                    <div className="modal-footer">
                        <div className="button-footer-back">
                            <button id="btn-back" onClick={e => this.previousWindow()}>{this.state.currentWindow === firstWindow ? "Abbrechen" : "Zurück"}</button>
                        </div>
                        <div className="button-footer-continue">
                            <button id="btn-continue" onClick={e => this.nextWindow()}>{this.state.currentWindow === lastWindow ? "Bestätigen" : "Weiter"}</button>
                        </div>
                    </div>

                </div>

            </div>
        )
    }

}