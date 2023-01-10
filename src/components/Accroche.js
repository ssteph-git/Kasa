// import Apropos from './Apropos'
import React, { Component } from 'react';

export default class Accroche extends Component {

    render() {

        return (
            <div className="accroche">

                <img className="image_accroche" src={this.props.src} alt={this.props.alt} />
                <p>{this.props.name}</p>

            </div>
        )
    }
}