const Accroche = function ({ src, alt, name, type, page }) {

    let monType = "";
    if (type == "Desktop") {
        monType = "image_accroche_desktop";
    } else {
        monType = "image_accroche_mobile";
    }

    //Condition qui permet d'afficher la bonne image en responsive, avec la balise: picture
    if (page == "apropos") {
        return (
            <div className="accroche">
                <picture>
                    <source srcSet={src} media="(min-width: 668px)"></source>
                    <img className={monType} src="./assets/gustavo-alves.png" alt={alt} />
                </picture>
                <p>{name}</p>
            </div>
        )
    } else {
        return (
            <div className="accroche">
                <img className={monType} src={src} alt={alt} />
                <p>{name}</p>
            </div>
        )
    }

}
export default Accroche;