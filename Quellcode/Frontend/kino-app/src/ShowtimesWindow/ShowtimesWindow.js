import React, { Component, useEffect, useState } from 'react';
import "./styles.less";
import api from '../api';
import Dropdown from 'react-bootstrap/Dropdown';

const showDays = ["Freitag", "Samstag", "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnnerstag"];

const ShowtimesWindow = (props) => {

    const [showEventsGrouped, setShowEventsGrouped] = useState();

    useEffect(() => {
        api.get(`/showEvents/search/findByMid?mid=${props.movieId}`)
            .then(res => {
                // map date and time
                const showEvents = res.data._embedded.showEvents.map(showEvent => {
                    const { sID, showTime, is3D } = showEvent;
                    return {
                        sid: sID,
                        // showDateTime: showTime,
                        showDate: showTime.substring(0, showTime.indexOf('T')),
                        showTime: showTime.substr(showTime.indexOf('T') + 1),
                        is3D: is3D
                    };
                });
                // let b = {
                //     showEvents: [
                //         {
                //             date: "date",
                //             showTimes: [
                //                 {
                //                     sid: "1",
                //                     showDate: "01-01-2020",
                //                     showTime: "11:00",
                //                     is3D: true
                //                 }
                //             ]
                //         }
                //     ]
                // }
                // find unique dates
                let uniqueDates = showEvents.map(s => s.showDate).filter((date, i, array) => array.indexOf(date) === i);
                // group by those dates
                let showEventsGrouped = [];
                for (const date of uniqueDates) {
                    let showEventsTemp = [];
                    for (const showEvent of showEvents) {
                        if (showEvent.showDate === date) {
                            showEventsTemp.push(showEvent);
                        }
                    }
                    showEventsGrouped.push({
                        date: date,
                        showEvents: showEventsTemp
                    });
                }
                console.log(showEventsGrouped);
                // set grouped show events as state
                setShowEventsGrouped(showEventsGrouped);
            });
    }, [])

    function renderShowDates() {
        return showEventsGrouped?.map(showEventGroup => {
            return (
                <Dropdown.Item key={showEventGroup.date} onClick={e => props.handleShowEventChange(showEventGroup.showEvents[0])}>
                    {showEventGroup.date}
                </Dropdown.Item>
            )
        })
    }

    function renderShowTimes() {
        return showEventsGrouped?.filter(
            showEventGroup => showEventGroup.date === props.selectedShowEvent?.showDate
        )[0]?.showEvents.map(s => {
            return (
                <Dropdown.Item key={s.sid} onClick={e => props.handleShowEventChange(s)}>
                    {s.showTime}
                </Dropdown.Item>
            )
        })
    }

    return (
        <div>
            <div className="dropdown-showDates">
                <Dropdown>
                    <Dropdown.Toggle>{props.selectedShowEvent === undefined ? "Datum wählen" : props.selectedShowEvent.showDate}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {renderShowDates()}
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <div className="dropdown-showTime">
                <Dropdown>
                    <Dropdown.Toggle>{props.selectedShowEvent === undefined ? "Zeit wählen" : props.selectedShowEvent.showTime}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {renderShowTimes()}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default ShowtimesWindow;