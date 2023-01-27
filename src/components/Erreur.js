import { NavLink } from "react-router-dom";

const Erreur = function (props) {

    return (
        <main>
            <div className="gestion_404">
                <p className="code_404">404</p>
                <p className="message_404">Oups! La page que vous demandez n'existe pas.</p>
                <NavLink to="/" className="lien_404"><span>Retourner sur la page d'accueil</span></NavLink>
            </div>
        </main>
    )
}
export default Erreur;