import React, { Component, useEffect, useState } from 'react';
import "./styles.less";
import api from '../api';
import Dropdown from 'react-bootstrap/Dropdown';

const showDays = ["Freitag", "Samstag", "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnnerstag"];

const ShowtimesWindow = (props) => {

    const [selectedShow, setSelectedShow] = useState();
    const [showEventsGrouped, setShowEvents] = useState();

    useEffect(() => {
        api.get(`/showEvents/search/findByMid?mid=${props.movieId}`)
            .then(res => {
                // map date and time
                const showEvents = res.data._embedded.showEvents.map(showEvent => {
                    const { sid, showTime, is3D } = showEvent;
                    return {
                        sid: sid,
                        // showDateTime: showTime,
                        showDate: showTime.substring(0, showTime.indexOf('T')),
                        showTime: showTime.substr(showTime.indexOf('T') + 1),
                        is3D: is3D
                    };
                });
                // let b = {
                //     showEvents: [
                //         {
                //             sid: "1",
                //             showDate: "date",
                //             showTimes: [
                //                 {
                //                     sid: "1",
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
                setShowEvents(showEventsGrouped);
            });
    }, [])

    function renderShowDates() {
        return showEventsGrouped?.map(showEventGroup => {
            return (
                <Dropdown.Item onClick={e => setSelectedShow(showEventGroup.showEvents[0])}>
                    {showEventGroup.date}
                </Dropdown.Item>
            )
        })
    }

    function renderShowTimes() {
        return showEventsGrouped?.filter(showEventGroup => showEventGroup.date === selectedShow?.showDate)[0]
            ?.showEvents.map(s => {
                return (
                    <Dropdown.Item onClick={e => setSelectedShow(s)}>
                        {s.showTime}
                    </Dropdown.Item>
                )
            })
    }

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle>{selectedShow === undefined ? "Datum wählen" : selectedShow.showDate}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {renderShowDates()}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
                <Dropdown.Toggle>{selectedShow === undefined ? "Zeit wählen" : selectedShow.showTime}</Dropdown.Toggle>
                <Dropdown.Menu>
                    {renderShowTimes()}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default ShowtimesWindow;