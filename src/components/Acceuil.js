import React, { Component } from 'react';
import Accroche from './Accroche';
import Location from './Location';

export default class Acceuil extends Component {

    render() {
        console.log(this.props.children);
        let indexMalocation=-1;
        return (
            <main>
                <Accroche name="Chez vous, partout et ailleurs" src="./assets/accroche.png" alt="slogan du site kasa"></Accroche>
                <div className="les_locations">
                    {/* <div className="location"><p>Titre de la location</p></div> */}

                    {this.props.children.map ((element,index) => {
                        indexMalocation++;
                       return <Location key={index} index={index} indexMalocation={indexMalocation}>{this}</Location>
                    })}
                        
                   
                </div>
            </main>
        )
    }
}