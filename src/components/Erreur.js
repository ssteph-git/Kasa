import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Erreur extends Component {

    render() {
        return (
            <main>
                <div className="gestion_404">
                    <p className="code_404">404</p>
                    <p className="message_404">Oups! La page que vous demandez n'existe pas.</p>
                    <NavLink to="/erreur" className="lien_404"><span>Retourner sur la page d'accueil</span></NavLink>
                </div>
            </main>
        )
    }
}