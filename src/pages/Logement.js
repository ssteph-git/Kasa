import Gallery from '../components/Gallery';
import { useParams } from "react-router";
import Star from '../components/Star';
import Tags from '../components/Tags';
import Collapse from '../components/Collapse';
import { useEffect, useState } from 'react';
import Erreur from './Erreur';

const Logement = function ({ logements }) {
    let { LogId } = useParams();
    const [logement, setLogement] = useState(logements.find(item => item.id === LogId));
    // const [logement,setLogement]=useState(null);

    useEffect(() => {//Permet de récupérer les données après le fetch
        setLogement(logements.find(item => item.id === LogId))
    }, [logements, setLogement, LogId]);

    return (<>
        {logement == null ? (<Erreur />) :
            (<main>

                <Gallery pictures={logement.pictures} ></Gallery>
                <div className="Denomination_total">
                    <div className="Denomination_gauche">
                        <div className="Titre">
                            <p className="Destination">{logement.title}</p>
                            <p className="Region">{logement.location}</p>
                        </div>
                        <div className="All_tag" >
                            <Tags Tags={logement.tags} host={logement.host} />
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
                            <Star nbStarPlein={logement.rating} host={logement.host} />
                        </div>
                    </div>
                </div>
                <div className="Details">
                    {/* page: propriété de class css(argumentLogement ou argumentApropos) 
                    typeClass: class css pour la page de logement: et description d'un logement
                    titre: p html: Équipements ou Description
                    description ou equipments: données du json*/}
                    <Collapse page="argumentLogement" typeClass="DescriptionLogement" titre="Description" description={logement.description} />
                    <Collapse page="argumentLogement" titre="Équipements" equipments={logement.equipments} />
                </div>
            </main>)}
    </>)
}
export default Logement;