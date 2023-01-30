import Accroche from '../components/Accroche';
import Location from '../components/Location';

const Accueil = function (props) {

    return (
        <main>
            <Accroche name="Chez vous, partout et ailleurs" src="./assets/accroche.png" alt="slogan du site kasa" type="Desktop"></Accroche>
            <div className="les_locations">
                {props.logements.map((element, index) => {
                    return <Location key={index} logement={element}></Location>
                })}
            </div>
        </main>
    )
}
export default Accueil;