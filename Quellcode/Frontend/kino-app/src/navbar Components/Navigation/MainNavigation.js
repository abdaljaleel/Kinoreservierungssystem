import React from 'react';
import './MainNavigation.less';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const MainNavigation = (props) => {

/* 
    < {nav className="Main-Navigation__items">
    <ul>
    <li> <a href="#">Home</a> </li>
          <li> <a href="#contact">Contact</a> </li>
          <li> <a href="https://www.google.de/maps/place/Schmitthennerstra%C3%9Fe,+69124+Heidelberg/data=!4m2!3m1!1s0x4797c0b9876b62b7:0x94e37dcfab2eab09?sa=X&ved=2ahUKEwivyf6L3PXrAhWM2KQKHUEzCBkQ8gEwAHoECAQQAQ">Adress</a> </li>
          <li> <a href="#">Impressum</a> </li> } */
    return ( 
        <Navbar sticky="top">
            <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
            <Nav.Link href="#home">as</Nav.Link>
            <Nav.Link href="#home">b</Nav.Link>

            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )

    /* <header className="Main-Navigation">
        <div className="Main-Navigation__logo">
        </div>

        <nav className="Main-Navigation__items">
            <ul>
                <li > <a onClick={e => props.setCurrentWindow(0)} href="#">Home</a> </li>
                <li onClick={e => props.setCurrentWindow(1)}> <a href="#">Contact</a> </li>
                <li onClick={e => props.setCurrentWindow(1)}> <a href="https://www.google.de/maps/place/Schmitthennerstra%C3%9Fe,+69124+Heidelberg/data=!4m2!3m1!1s0x4797c0b9876b62b7:0x94e37dcfab2eab09?sa=X&ved=2ahUKEwivyf6L3PXrAhWM2KQKHUEzCBkQ8gEwAHoECAQQAQ">Adress</a> </li>
                <li onClick={e => props.setCurrentWindow(2)}> <a href="#">Impressum</a> </li>

            </ul>
        </nav>
    </header> */

};
export default MainNavigation;