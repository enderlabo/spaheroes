import React from 'react'
import { Link } from 'react-router-dom'


export const HeroesCards = (heroes) => {



    return (
    
        // <div className="card ms-3" style={{ maxWidth: 520 }}>
        //     <div className="row">
        //         <div className="col-md-4">
        //             <img src={ `./assets/heroes/${ heroes.id }.jpg` } className="card-img" alt={ heroes.superhero } />
        //         </div>
        //         <div className="col-md-8">
        //             <div className="card-body">
        //                 <h5 className="card-title"> { heroes.superhero } </h5>
        //                 <p className="card-text">{ heroes.alter_ego } </p>

        //                 {
        //                     ( heroes.alter_ego !== heroes.characters )
        //                     && <p className="card-text"> { heroes.characters } </p>
        //                 }
        //                 <p className="card-text">
        //                     <small>{ heroes.first_appearence }</small>
        //                 </p>

        //                 <Link to={ `./hero/${ heroes.id }` }>
        //                 Más...
        //                 </Link>
        //             </div>
        //         </div>

        //     </div>
        // </div>

        <div className="row row-cols-2 row-cols-md-2.5"  >
                <div className="col mb-2">
                    <div className="card">
                        <img src={ `./assets/heroes/${ heroes.id }.jpg` }
                         className="card-img-top" alt={ heroes.superhero } 
                         style={{ maxWidth: 540 }} />

                        <div className="card-body">
                        <h5 className="card-title">{ heroes.superhero }</h5>
                        <p className="card-text">{ heroes.alter_ego }</p>

                        {/* {
                            ( heroes.alter_ego !== heroes.characters )
                            && <p className="card-text"> { heroes.characters } </p>
                        } */}
                        <p className="card-text">
                            <small>{ heroes.first_appearence }</small>
                        </p>

                        <Link to={ `./hero/${ heroes.id }` }>
                        Más...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
  
    
    )
}
