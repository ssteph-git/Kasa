import React, { useEffect, useState } from 'react';

const Slideshow = function ({pictures}) {
    // const [pic, setPic] = useState(props.mesLogements[props.monIndex].cover)
    const [counter, setCounter] = useState(0);//compteur de départ de l'image à 1, car elle est déja de 0: lors du chargement du composant
    // let totalPics = props.mesLogements[props.monIndex].pictures.length;
    
    const handleClickLeft = event => {
        if (counter != 0){
                    setCounter(counter -1);
                    // setPic(props.mesLogements[props.monIndex].pictures[counter-1]);
                } else {
                    // setPic(props.mesLogements[props.monIndex].pictures[totalPics-1]);
                    setCounter(pictures.length-1);
                };
    }

    const handleClickRight = event => {
        if (counter != (pictures.length-1))
        {
                    setCounter(counter + 1);
                    // setPic(props.mesLogements[props.monIndex].pictures[counter+1]);
                    
                } else {
                    // setPic(props.mesLogements[props.monIndex].pictures[0]);
                    setCounter(0);
                };
    }

    return (
        <div className="slideshow">
            <img className="img_slideshow" src={pictures[counter]} alt="slogan du site kasa" />
            <div>
                <i className="fa-solid fa-angle-left" aria-label="image ou vidéo précédente" alt="Previous image" onClick={handleClickLeft}></i>
                <i className="fa-solid fa-angle-right" aria-label="image ou video suivante" alt="Next image" onClick={handleClickRight}></i>
            </div>
        </div>
    )
}
export default Slideshow;