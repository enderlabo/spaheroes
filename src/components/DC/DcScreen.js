import React from 'react'
import { HeroesList } from '../heroes/HeroesList'
// import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'

export const DcScreen = () => {

    return (
        <div>
            <h1>DC Screen</h1>
            <hr />
            <HeroesList publisher={ "DC Comics" } />
        </div>
    )
}
