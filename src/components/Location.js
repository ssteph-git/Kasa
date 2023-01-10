import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Location extends Component {

    render() {
        // console.log(this.props.children.props.children[0].pictures[0]);
        // console.log(this.props.children.props.children[0]);
        console.log(this.props.indexMalocation);

        return (
            // <div className="location"><p>Titre de la location</p></div>
            // <div className="location"><p>Titre de la location</p></div>
            <div className='div_location'>
                <NavLink to="/logement">
                    <img className="location" src={this.props.children.props.children[this.props.indexMalocation].cover} alt="Logo du site Kasa" />
                </NavLink>
                <p>{this.props.children.props.children[this.props.indexMalocation].title}</p>
            </div>
        )
    }
}