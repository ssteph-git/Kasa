import { NavLink } from "react-router-dom";

const Location = function ({ logement }) {

    return (
        <div className='div_location'>
            <NavLink to={"/logement/" + logement.id} >
                <img className="location" src={logement.cover} alt="Logo du site Kasa" />
            </NavLink>
            <p>{logement.title}</p>
        </div>
    )

}
export default Location;