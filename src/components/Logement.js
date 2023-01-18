import Banner from './Banner';
import Slideshow from './Slideshow';
import { useParams } from "react-router";
import Star from './Star';
import Tags from './Tags';
import Argument from './Argument';
import { useState } from 'react';
import Erreur from './Erreur';

const Logement = function ({logements}) {
    let { LogId } = useParams();
    console.log(logements);
    const [logement,setLogement]=useState(logements.find(item=>item.id === LogId));
    return (<>
         {logement==null ? (<Erreur/>):
       ( <main>
            
            <Slideshow pictures={logement.pictures} ></Slideshow>
            <div className="Denomination_total">
                <div className="Denomination_gauche">
                    <div className="Titre">
                        <p className="Destination">{logement.title}</p>
                        <p className="Region">{logement.location}</p>
                    </div>
                    <div className="All_tag" >
                       <Tags Tags={logement.tags} host={logement.host}/>
                    </div>
                </div>
                <div className="Denomination_droite">
                    <div className="Avatar">
                        <p className="Nom">{logement.host.name}</p>
                        <div className="Photo">
                            <img className="Photo_host" src={logement.host.picture} alt="Logo du site Kasa" />
                        </div>
                    </div>
                    <div className="Evaluation">
                        <Star nbStarPlein={logement.rating} host={logement.host}/>
                    </div>
                </div>
            </div>
            <div className="Details">
                       <Argument page="argumentLogement" typeClass="DescriptionLogement" titre="Description" description={logement.description}/>
                       <Argument page="argumentLogement" titre="Équipements" equipments={logement.equipments}/>
            </div>
        </main>)}
        </> )
}
export default Logement;