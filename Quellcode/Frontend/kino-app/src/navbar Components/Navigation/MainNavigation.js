import React from 'react';
import './MainNavigation.css';


const MainNavigation = props => (
<header className="Main-Navigation">
    <div className="Main-Navigation__logo">
    </div>

    <nav className="Main-Navigation__items">
    <ul>
    <li> <a href="#">Home</a> </li>
          <li> <a href="#">Contact</a> </li>
          <li> <a href="https://www.google.de/maps/place/Schmitthennerstra%C3%9Fe,+69124+Heidelberg/data=!4m2!3m1!1s0x4797c0b9876b62b7:0x94e37dcfab2eab09?sa=X&ved=2ahUKEwivyf6L3PXrAhWM2KQKHUEzCBkQ8gEwAHoECAQQAQ">Adress</a> </li>
          <li> <a href="#">Impressum</a> </li>

    </ul>
    </nav>
</header>

);
export default MainNavigation;