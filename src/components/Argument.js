import React, { useEffect, useState } from 'react';

const Argument = function (props) {

    const [argument_details, setArgument_details] = useState("argument_details");
    const [angle, setAngle] = useState("fa-solid fa-angle-down");

    //Gère l'ouverture et la fermeture du collape
    const collapseClick = event => {
        if (argument_details == "argument_details") {
            setArgument_details("argument_none");
            setAngle("fa-solid fa-angle-up");
        } else {
            setArgument_details("argument_details");
            setAngle("fa-solid fa-angle-down");
        }
    }

    //Verification: si l'on doit afficher les elements: pour la page "Apropos" ou "Logement"
    let titreArgument = "";
    const mesArguments = [];
    if (props.description != undefined) {
        //Description
        mesArguments.push(<p className={props.typeClass} key={0}>{props.description} </p>);
    } else {
        //Listes
        for (let i = 0; i < props.equipments.length; i++) {
            mesArguments.push(<p className="Liste" key={i}>{props.equipments[i]}</p>);
        }
    }
    titreArgument = props.titre;//Titre de la catégorie du composant

    return (
        <div className={props.page}>
            <div className="argument_titre">
                <p>{titreArgument}</p>
                <i className={angle} onClick={collapseClick}></i>
            </div>
            <div className={argument_details}>
                {mesArguments}
            </div>
        </div>
    )
}

export default Argument