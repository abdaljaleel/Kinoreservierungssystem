import React, { Component, useState } from 'react';
import "./styles.less";
import api from '../api';
import Dropdown from 'react-bootstrap/Dropdown';

const showDays = ["Freitag", "Samstag", "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnnerstag"];

const ShowtimesWindow = (props) => {
    const [selectedShow, setSelectedShow] = useState({});
    const [showEvents, setShowEvents] = useState([
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
    ])

    // componentDidMount() {
    //     // Cors-blocked:
    //     // api.get('/showEvents?mid=1')
    //     //     .then(res => {
    //     //         console.log(res);
    //     //     });
    // }

    function abc() {
        return showEvents.map(s => {
            return (
                <Dropdown.Item onClick={e => setSelectedShow(s)}>
                    {s.dateTime}
                </Dropdown.Item>
            )
        })
    }

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle>{selectedShow === undefined ? "Vorstellung wählen" : selectedShow.dateTime}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {abc()}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default ShowtimesWindow;