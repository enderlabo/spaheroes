import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MarvelScreen } from '../components/Marvel/MarvelScreen'
import { HeroesScreen } from '../components/heroes/HeroesScreen'
import { DcScreen } from '../components/DC/DcScreen'
// import { LoginScreen } from '../components/Login/LoginScreen'

export const DashboardBoard = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/heroe/heroeId" component={ HeroesScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    {/* <Route exact path="/login" component={ LoginScreen } /> */}

                    <Redirect to="/" />

                </Switch>    
            </div>  
        </>
    )
}
