import React, { Component } from 'react';
import "./styles.less";
import api from '../api';
import skyfallImg from "./Skyfall.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@fortawesome/free-solid-svg-icons'

export class PosterTable extends Component {

    componentDidMount() {
        api.get('/movies')
            .then(res => {
                const movies = res.data;
                this.setState({
                    movies: movies.map(movie => {
                        const { mid, title, imgSrc } = movie;
                        return { id: mid, title: title, imgSrc: imgSrc };
                    })
                });
            });
    }

    constructor(props) {
        super(props);
        this.state = { movies: [] };
        // this.state = {
        //     movies: [
        //         {
        //             id: 1,
        //             imgSrc: "Skyfall.jpg",
        //             title: "James Bond"
        //         },
        //         {
        //             id: 2,
        //             imgSrc: "Skyfall.jpg",
        //             title: "James Bond"
        //         },
        //         {
        //             id: 3,
        //             imgSrc: "Skyfall.jpg",
        //             title: "James Bond"
        //         },
        //         {
        //             id: 4,
        //             imgSrc: "Skyfall.jpg",
        //             title: "James Bond"
        //         },
        //         {
        //             id: 5,
        //             imgSrc: "Skyfall.jpg",
        //             title: "James Bond"
        //         },
        //         {
        //             id: 6,
        //             imgSrc: "Skyfall.jpg",
        //             title: "James Bond"
        //         },
        //     ]
        // };
    }

    onPosterClick() {
        this.props.modalListener(true);
    }

    renderMoviePosters() {
        return this.state.movies.map((movie, index) => {
            const { id, imgSrc, title } = movie;
            return (
                <div className="moviePoster" key={id} onClick={e => this.onPosterClick()}>
                    { imgSrc !== undefined ? <img src={imgSrc} className="moviePosterImage"></img>
                        : <FontAwesomeIcon className="moviePosterImage" icon={faFilm} size="3x"></FontAwesomeIcon>}
                    <p className="moviePosterTitle">{title}</p>
                </div>
            )
        })
    }


    render() {
        return (
            <div>
                <div>
                    {this.renderMoviePosters()}
                </div>
                <div style={{ clear: "both" }}></div>
            </div>
        )
    }

}