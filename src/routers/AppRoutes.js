import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Navbar } from '../components/ui/Navbar'


import { LoginScreen } from '../components/Login/LoginScreen';
// import { MarvelScreen } from '../components/Marvel/MarvelScreen';
import { DashboardBoard } from './DashboardBoard';


export const AppRoutes = () => {
    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/login" component={ LoginScreen } /> 
                        
                        <Route  path="/" component={ DashboardBoard } />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
