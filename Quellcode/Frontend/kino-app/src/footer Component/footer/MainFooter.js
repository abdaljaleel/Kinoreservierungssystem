import React from 'react';
import './MainFooter.less';


const MainFooter = (props) => {


    return (
        <div className="footer">
            <nav className="Main-Footer__items">
                <a href="#" >Ways to Watch</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#">Privacy Policy</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="css/style.css">Terms of Service</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#">Jobs</a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#">FAQ</a>
            </nav>
            <i className="fab fa-twitter"></i>

            <div className="icon-container">
                <h3 className="footer.Header">Contact:<br></br>
                    <h5>
                        <div id="contact"></div>
        E-mail WWI19SEA@movie.de<br></br>
        Questions? Call : 017XX-XXX-XXXX
        </h5></h3>
            </div>
            <i className="fab fa-js"></i>
            <p className="footer-text">
                &copy; Copyright 2012-2025- WWI19SEA<br></br>
           ALL Rights Reserved.
       </p>
        </div>
    )



};
export default MainFooter;