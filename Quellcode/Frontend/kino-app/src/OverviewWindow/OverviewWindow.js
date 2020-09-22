import React, { Component, useState, useEffect } from 'react';
import "./styles.less";
import api from '../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWheelchair } from '@fortawesome/free-solid-svg-icons';
import { faUsersSlash } from '@fortawesome/free-solid-svg-icons';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'

const OverviewWindow = (props) => {
        return (
            <div className="modal-body" id="modal-body-ID">
                <div className="movie-description-left">
                    <p className="movie-description-headings">Beschreibung</p>
                    <div className="movie-description">
                        <p className="movie-description-content-div">{props.movie.description}</p>
                    </div>
                </div>

                <div className="movie-description-center">
                    <div className="movie-fsk">
                        <FontAwesomeIcon icon={faUsersSlash}></FontAwesomeIcon>
                        <a className="movie-description-content">{props.movie.fsk}</a>
                    </div>
                    <div className="movie-length">
                        <FontAwesomeIcon icon={faStopwatch}></FontAwesomeIcon>
                        <a className="movie-description-content">{props.movie.length} Min.</a>
                    </div>
                    <div className="movie-genre">
                        <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
                        <a className="movie-description-content">Action</a>
                    </div>
                    <div className="movie-country">
                        <FontAwesomeIcon icon={faGlobeAmericas}></FontAwesomeIcon>
                        <a className="movie-description-content">{props.movie.prodCountry}</a>
                    </div>
                    <div className="movie-actors">
                        <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
                        <a className="movie-description-content">Daniel Craig</a>
                        <p></p>
                        <a className="movie-description-content">Daniel Craig</a>
                    </div>
                    <div className="movie-regisseur">
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <a className="movie-description-content">Sam Mendes</a>
                    </div>
                </div>

                <div className="movie-description-right">
                    <iframe src={props.movie.trailer} width="100%" height="300"
                        style={{ border: "none" }}></iframe>
                </div>

            </div>
        )
    }

export default OverviewWindow;