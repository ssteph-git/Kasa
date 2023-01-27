const Star = function (props) {
    const nbStarPlein = props.nbStarPlein;
    const nbStarVide = 5 - nbStarPlein;//5:nombre d'étoiles maximum possible du système

    //Calcul des étoiles à afficher
    const star = [];
    for (let i = 0; i < nbStarPlein; i++) {
        star.push(<i className="fa-solid fa-star starPlein" key={i + "starPlein"}></i>);
    }
    for (let i = 0; i < nbStarVide; i++) {
        star.push(<i className="fa-solid fa-star starVide" key={i + "starVide"}></i>);
    }

    return star;
}
export default Star;