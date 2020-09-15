"use-strict";

const e = React.createElement;

class MovieOverview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movieName: props.movieName
        };
    }

    render() {
        document.getElementById("modal-heading").innerHTML = movieName;
        return (
            <div className="modal-body" id="modal-body-ID">
                <div className="movie-description-left">
                    <p className="movie-description-headings">Beschreibung</p>
                    <div className="movie-description">
                        <p className="movie-description-content-div">Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                            ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                            diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                            gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                            sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                            est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>

                <div className="movie-description-center">
                    <div className="movie-fsk">
                        <i className="fas fa-2x fa-user-slash"></i>
                        <a className="movie-description-content">12</a>
                    </div>
                    <div className="movie-length">
                        <i className="fas fa-2x fa-stopwatch"></i>
                        <a className="movie-description-content">120</a>
                    </div>
                    <div className="movie-genre">
                        <i className="fas fa-2x fa-info-circle"></i>
                        <a className="movie-description-content">Action</a>
                    </div>
                    <div className="movie-actors">
                        <i className="fas fa-2x fa-users"></i>
                        <a className="movie-description-content">Daniel Craig</a>
                        <p></p>
                        <a className="movie-description-content">Daniel Craig</a>
                    </div>
                    <div className="movie-regisseur">
                        <i className="fas fa-2x fa-star"></i>
                        <a className="movie-description-content">Sam Mendes</a>
                    </div>
                </div>

                <div className="movie-description-right">
                    <iframe src="https://www.youtube.com/embed/xZaZEQPSZd0" width="100%" height="300"
                        style={{border:"none"}}></iframe>
                </div>

            </div>
        );
    }
}

const domContainer = document.querySelector("#modal-window-overview");
const movieName = domContainer.dataset.moviename;
ReactDOM.render(e(MovieOverview, {movieName: movieName}), domContainer);
