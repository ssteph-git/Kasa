import { NavLink } from "react-router-dom";

const Banner = function (props) {

    return (
        <header>
            <div className="div_header">
                <div className="logo">
                    <img className="image_logo" src="/assets/LOGO.png" alt="Logo du site Kasa" />
                </div>
                <div className="navigation">
                    <ul>
                        <li>
                            <NavLink to="/" className="lien_nav" activeclassname="selected"><span>Accueil</span></NavLink>
                        </li>
                        <li>
                            <NavLink to="/apropos" className="lien_nav" activeclassname="selected"><span>A Propos</span></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )

}
export default Banner;