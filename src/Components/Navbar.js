import React from "react";
import {Link} from "react-router-dom";
import '../App';
export default function Navbar() {
    return(
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li> <Link to={"/"}> Is Triangle? </Link></li>
                        <li> <Link to={"/Quiz"}> Quiz </Link></li>
                        <li> <Link to={"/Hypotenuse"}> Hypotenuse </Link></li>
                        <li> <Link to={"/Area"}> Area </Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}