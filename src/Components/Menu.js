import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Menu.css'

function Menu() {

    return (
        <div>
                <nav className="nav-menu active">
                    <ul className="nav-menu-items">
                        <li className="navbar-toggle">
                            <Link to="/" className="menu-bars">
                                <span>Sign up</span>
                            </Link>
                        </li>
                        <li className="navbar-toggle">
                            <Link to="/universities" className="menu-bars">
                                <span>Universities</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
        </div>
    );
}

export default Menu;



