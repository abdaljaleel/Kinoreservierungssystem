import React, { Component, useState, useEffect } from 'react';
import "./styles.less";
import api from '../api';
import skyfallImg from "./Skyfall.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

const PosterTable = (props) => {
    const [movies, setMovies] = useState([{}]);

    useEffect(() => {
        api.get('/movies')
            .then(res => {
                const movies = res.data._embedded.movies;
                setMovies(
                    movies.map(movie => {
                        const { mid, title, imgSrc } = movie;
                        return {
                            id: mid,
                            title: title,
                            imgSrc: imgSrc
                        };
                    })
                );
            })
    }, [])


    function onPosterClick(id) {
        console.log(id);
        console.log(props);
        props.setSelectedMovieId(id);
    }

    function renderMoviePosters() {
        return movies.map((movie) => {
            const { id, title, imgSrc } = movie;
            return (
                <div className="moviePoster" key={id} onClick={e => onPosterClick(id)}>
                    { imgSrc !== undefined ? <img src={imgSrc} className="moviePosterImage"></img>
                        : <FontAwesomeIcon className="moviePosterImage" icon={faFilm} size="3x"></FontAwesomeIcon>}
                    <p className="moviePosterTitle">{title}</p>
                </div>
            )
        })
    }

    return (
        <div>
            <div>
                {renderMoviePosters()}
            </div>
            <div style={{ clear: "both" }}></div>
        </div>
    )
}

export default PosterTable;