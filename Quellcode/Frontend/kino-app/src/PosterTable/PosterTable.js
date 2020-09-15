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
        console.log(this.props);
    }

    onPosterClick() {
        this.props.modalListener(true);
    }

    renderMoviePosters() {
        return this.state.movies.map((movie, index) => {
            const { id, imgSrc, title } = movie;
            return (
                <div className="moviePoster" key={id} onClick={e => this.onPosterClick()}>
                    <img src={skyfallImg} className="moviePosterImage"></img>
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
                <div style={{clear:"both"}}></div>
            </div>
        )
    }

}