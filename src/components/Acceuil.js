import Accroche from './Accroche';
import Location from './Location';

const Acceuil = function (props) {

    let indexMalocation = -1;
    return (
        <main>
            <Accroche name="Chez vous, partout et ailleurs" src="./assets/accroche.png" alt="slogan du site kasa"></Accroche>
            <div className="les_locations">

                {props.logements.map((element, index) => {
                    indexMalocation++;
                    return <Location key={index} logement={element} indexMalocation={indexMalocation} cover={element.cover} title={element.title}></Location>
                })}


            </div>
        </main>
    )
}
export default Acceuil;