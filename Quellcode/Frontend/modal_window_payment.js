"use-strict";

const e = React.createElement;

class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // liked: false
        };
        // showPaypal();
    }

    showPaypal() {
        // calculate final sum for payment
        let priceEur = 0;
        selectedSeats.forEach(seat => priceEur += seat.price);
        // console.log(priceEur);
        paypal.Buttons({
            style: {
                shape: 'rect',
                color: 'gold',
                layout: 'vertical',
                label: 'pay',
            },
            // TODO: geht nicht richtig (Error in Konsole)
            createOrder: function (data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            currency_code: 'EUR',
                            value: priceEur
                        },
                        items: selectedSeats,
                    }]
                });
            },
            onApprove: function (data, actions) {
                return actions.order.capture().then(function (details) {
                    alert('Transaction completed by ' + details.payer.name.given_name + '!');
                    modalWindowState = "overview";
                });
            }
        }).render('#paypal-button-container');
    }

    render() {
        return (
            <div id="payment-popup">
                <h4>Zusammenfassung:</h4>
                <div className="seats-prices" id="seats-prices-summary">
                    <p><strong><span id="totalNoTicketsSummary">0</span> Tickets</strong></p>
                    <table className="price-table" id="ticketPriceTable-summary">
                    </table>
                    <hr id="sum-line" />
                    <table className="price-table">
                        <tbody>
                            <tr className="price-table-row">
                                <td className="price-table-data">Summe</td>
                                <td id="price-sum-summary" className="price-table-data">0.00 €</td>
                            </tr></tbody>
                    </table>
                </div>
                <h4>Bezahlmethode auswählen</h4>
                <div id="paypal-button-container"></div>
            </div>
        );
    }
}

const domContainer = document.querySelector("#modal-window-payment");
ReactDOM.render(e(Payment), domContainer);
