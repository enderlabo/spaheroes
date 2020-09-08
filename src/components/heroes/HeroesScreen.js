import React, { useMemo } from 'react'
import { useParams, Redirect, useHistory } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

import './heroes.css';  

export const HeroesScreen = () => {

    const { heroId } = useParams();
    // const hero = getHeroById( heroId );
    const hero = useMemo(() => getHeroById( heroId ), [ heroId ]);
    const { replace } = useHistory();


        if ( !hero )
        { 
            return <Redirect exact to="/" /> 
        }
        
    const handleReturn = () => {
        replace(`/${publisher === "DC Comics" ? "dc" : "marvel"}`)
    }


    const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

    return (
        <div className="container2">
            <div className="row mt-5 ">
                <div className="col-4">
                    <img src={ `../assets/heroes/${ heroId }.jpg` } alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInTopLeft "  />
                </div>

                <div className="col-8 animate__animated animate__fadeIn">
                    <h3>{ superhero }</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>Alter Ego:</b> { alter_ego }
                        </li>
                        <li className="list-group-item">
                            <b>Publisher:</b> { publisher }
                        </li>
                        <li className="list-group-item">
                            <b>First Appearance:</b> { first_appearance }
                        </li>
                    </ul>

                    <h5>Characters</h5>
                    <p>{ characters }</p>

                    <button className="btn btn-outline-info" onClick={ handleReturn }>
                        Return
                    </button>
                </div>

            </div>
        </div>
    )
}
