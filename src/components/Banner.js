// import Apropos from './Apropos'
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";

export default class Banner extends Component {

    render() {
        return (
            <header>
                <div className="div_header">
                    <div className="logo">
                        <img className="image_logo" src="./assets/LOGO.png" alt="Logo du site Kasa" />
                    </div>
                    <div className="navigation">
                        <ul>
                            <li>
                                {/* <a href="#" className="lien_nav"><span>Acceuil</span></a> */}
                                {/* <Link to="/" className="lien_nav"><span>Acceuil</span></Link> */}
                                <NavLink to="/" className="lien_nav"><span>Acceuil</span></NavLink>
                            </li>
                            <li>
                                {/* <a href="#" className="lien_nav"><span>A Propos</span></a> */}
                                {/* <Link to="/apropos" className="lien_nav"><span>A Propos</span></Link> */}
                                <NavLink to="/apropos" className="lien_nav"><span>A Propos</span></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}