import React, { useEffect, useState } from 'react';

const Gallery = function ({ pictures }) {
    const [counter, setCounter] = useState(0);//compteur de départ de l'image
    const handleClickLeft = event => {
        if (counter != 0) {
            setCounter(counter - 1); //on décrémente la valeur: pour obtenir l'image précédente
        } else {
            setCounter(pictures.length - 1);//si l'on ne peut plus décrémenter d'image: on remet le compteur du nombre d'image total: et on redécrémente
        };
    }

    const handleClickRight = event => {
        if (counter != (pictures.length - 1)) {
            setCounter(counter + 1); //incrémentation d'une image
        } else {
            setCounter(0);//si l'on ne peut plus incrémenter d'image: on remet la valeur à zero pour reincrémenter de nouveau
        };
    }

    let display = "SlideshowBlock";
    if (pictures.length == 1) {//s'il n'y a qu'une seule image à charger dans le Slideshow: on cache les chevrons
        display = "SlideshowNone";
    } else {
        display = "SlideshowBlock";
    }

    return (
        <div className="slideshow">
            <img className="img_slideshow" src={pictures[counter]} alt="slogan du site kasa" />
            <div className={display}>
                <i className="fa-solid fa-angle-left" aria-label="image ou vidéo précédente" alt="Previous image" onClick={handleClickLeft}></i>
                <i className="fa-solid fa-angle-right" aria-label="image ou video suivante" alt="Next image" onClick={handleClickRight}></i>
                <p className="Pagination">{counter + 1}/{pictures.length}</p>
            </div>
        </div>
    )
}
export default Gallery;