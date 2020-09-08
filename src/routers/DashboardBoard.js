import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom'
import { MarvelScreen } from '../components/Marvel/MarvelScreen'
import { HeroesScreen } from '../components/heroes/HeroesScreen'
import { DcScreen } from '../components/DC/DcScreen'
import { SearchBar } from '../components/Search/SearchBar'
import { HomeScreen } from '../components/Home/HomeScreen'
// import { LoginScreen } from '../components/Login/LoginScreen'

export const DashboardBoard = () => {
    return (
        <>
            <Navbar />
            <HomeScreen />
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/hero/:heroId" component={ HeroesScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Route exact path="/search" component={ SearchBar } />
                    {/* <Route exact path="/home" component={ HomeScreen } /> */}
                    {/* <Route exact path="/login" component={ LoginScreen } /> */}

                    <Redirect to="/" />

                </Switch>    
            </div>  
        </>
    )
}
