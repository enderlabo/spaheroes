import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { LoginScreen } from '../components/Login/LoginScreen';
import { DashboardBoard } from './DashboardBoard';
// import { PrivateRoutes } from './PrivateRoutes';
import { AuthContext } from '../auth/AuthContext';
import { Footer } from '../components/ui/Footer';
// import { HomeScreen } from '../components/Home/HomeScreen';
// import history from '../selectors/createHistory';


export const AppRoutes = ({...rest}) => {

    const { user} = useContext(AuthContext);

    return (
        <div>
            <Router>
                <div>
                    <Switch>
                        { user.logged ? 
                        ( <Route path="/" component= { DashboardBoard } /> )
                        : ( <> 
                            <Route exact path="/login" component= { LoginScreen } />
                            <Redirect to="/login" />
                        </> )}
                    </Switch>
                </div>
                {/* <Footer /> */}
            </Router>
        </div>
            
    )
}
