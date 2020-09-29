import React, { useMemo } from 'react'
import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'
import { HeroesCards } from './HeroesCards';

export const HeroesList = ({ publisher }) => {

    const heroes =  useMemo(() => getHeroByPublisher( publisher ), [ publisher ])
    // const heroes = getHeroByPublisher( publisher );

    return (
        <div className="card-columns animate__animated animate__fadeInUp">
            {
                heroes.map( hero => (
                    <HeroesCards key={ hero.id } 
                        { ...hero }
                        publisher = { publisher } 
                    />
                ))
            }
        </div>
    )
}
