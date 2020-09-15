import React, { Component } from 'react';
import "./styles.less";
import skyfallImg from "./Skyfall.jpg";

export class PosterTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: [
                {
                    id: 1,
                    imgSrc: "Skyfall.jpg",
                    title: "James Bond"
                },
                {
                    id: 2,
                    imgSrc: "Skyfall.jpg",
                    title: "James Bond"
                },
                {
                    id: 3,
                    imgSrc: "Skyfall.jpg",
                    title: "James Bond"
                },
                {
                    id: 4,
                    imgSrc: "Skyfall.jpg",
                    title: "James Bond"
                },
                {
                    id: 5,
                    imgSrc: "Skyfall.jpg",
                    title: "James Bond"
                },
                {
                    id: 6,
                    imgSrc: "Skyfall.jpg",
                    title: "James Bond"
                },
            ]
        };
    }

    onPosterClick() {
        console.log("Poster Click");
    }

    renderMoviePosters() {
        return this.state.movies.map((movie, index) => {
            const { id, imgSrc, title } = movie;
            return (
                <div className="moviePoster" key={id} onClick={this.onPosterClick}>
                    <img src={skyfallImg} className="moviePosterImage"></img>
                    <p className="moviePosterTitle">{title}</p>
                </div>
            )
        })
    }


    render() {
        return (
            <div>
                {this.renderMoviePosters()}
            </div>
        )
    }

}