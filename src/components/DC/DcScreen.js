import React from 'react'
import { HeroesList } from '../heroes/HeroesList'
// import { getHeroByPublisher } from '../../selectors/getHeroByPublisher'

export const DcScreen = () => {

    return (
        <div>
            <h1 className="text-center white">DC Heroes</h1>
            <hr />
            <HeroesList publisher={ "DC Comics" } />
        </div>
    )
}
