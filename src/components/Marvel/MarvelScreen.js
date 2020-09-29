import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const MarvelScreen = () => {
    
    return (
        <div className="marvel__container">
            <h1 className="text-center">Marvel Heroes</h1>
            <hr />
            <HeroesList publisher={ "Marvel Comics" } />
        </div>
        )
    
}
