import React, { Component } from 'react';
import "./styles.less";
import { OverviewWindow } from '../OverviewWindow/OverviewWindow';
import { SeatsWindow } from '../SeatsWindow/SeatsWindow';
import { PaymentWindow } from '../PaymentWindow/PaymentWindow';

export class MainModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentWindow: 0,
        };
    }

    nextWindow() {
        if (this.state.currentWindow < 2) this.setState({
            currentWindow: this.state.currentWindow + 1
        })
    }

    previousWindow() {
        if (this.state.currentWindow > 0) this.setState({
            currentWindow: this.state.currentWindow - 1
        })
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
                        {this.state.currentWindow === 1 && <SeatsWindow id="modal-window-seats" data-moviename="James Bond"></SeatsWindow>}
                        {this.state.currentWindow === 2 && <PaymentWindow id="modal-window-payment"></PaymentWindow>}
                    </div>

                    <div className="modal-footer">
                        <div className="button-footer-back">
                            <button id="btn-back" onClick={e => this.previousWindow()}>Zurück</button>
                        </div>
                        <div className="button-footer-continue">
                            <button id="btn-continue" onClick={e => this.nextWindow()}>Weiter</button>
                        </div>
                    </div>

                </div>

            </div>
        )
    }

}