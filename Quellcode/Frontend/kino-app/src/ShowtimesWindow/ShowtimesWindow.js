import React, { Component } from 'react';
import "./styles.less";
import api from '../api';
import Dropdown from 'react-bootstrap/Dropdown';

const showDays = ["Freitag", "Samstag", "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnnerstag"];

export class ShowtimesWindow extends Component {

    componentDidMount() {
        // Cors-blocked:
        // api.get('/showEvents?mid=1')
        //     .then(res => {
        //         console.log(res);
        //     });
    }

    constructor(props) {
        super(props);
        // Mock data:
        this.state = {
            selectedShow: {},
            showEvents: [
                {
                    is3D: false,
                    mid: 1,
                    sepId: 1,
                    dateTime: "2020-10-14T16:30:00",
                },
                {
                    is3D: false,
                    mid: 1,
                    sepId: 2,
                    dateTime: "2020-10-15T19:30:00",
                },
                {
                    is3D: false,
                    mid: 1,
                    sepId: 3,
                    dateTime: "2020-10-17T21:00:00",
                }
            ]
        };
        console.log(this.state);
    }

    abc() {
        return this.state.showEvents.map(s => {
            return (
                <Dropdown.Item onClick={e => { this.setState({ selectedShow: s, showEvents: this.state.showEvents }) }}>
                    {s.dateTime}
                </Dropdown.Item>
            )
        })
    }


    render() {
        // console.log(this.state);
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle>{this.state.selectedShow === undefined ? "Vorstellung wählen" : this.state.selectedShow.dateTime}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {this.abc()}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    }

}