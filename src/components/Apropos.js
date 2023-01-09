// import Apropos from './Apropos'
import React, { Component } from 'react';

export default class Apropos extends Component {

    render() {
        return (
            <main>
                <div className="accroche">

                    <img className="image_accroche" src="./assets/accroche_apropos.png" alt="slogan du site kasa" />

                </div>
                <div className="argument">
                    <div className="argument_titre">
                        <p>Fiabilité</p>
                        <i className="fa-solid fa-angle-down"></i>
                    </div>
                    <div className="argument_details"></div>
                </div>
                <div className="argument">
                    <div className="argument_titre">
                        <p>Respect</p>
                    </div>
                    <div className="argument_details">
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </div>
                </div>
                <div className="argument">
                    <div className="argument_titre">
                        <p>Service</p>
                    </div>
                    <div className="argument_details"></div>
                </div>
                <div className="argument">
                    <div className="argument_titre">
                        <p>Responsabilité</p>
                    </div>
                    <div className="argument_details"></div>
                </div>
            </main>
        )
    }
}