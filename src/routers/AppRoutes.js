import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from "react-router-dom";

import { LoginScreen } from '../components/Login/LoginScreen';
import { DashboardBoard } from './DashboardBoard';
// import { PrivateRoutes } from './PrivateRoutes';
import { AuthContext } from '../auth/AuthContext';
import { HomeScreen } from '../components/Home/HomeScreen';
import { Footer } from '../components/ui/Footer';
// import history from '../selectors/createHistory';


export const AppRoutes = () => {

    const { user} = useContext(AuthContext);
    const history = useHistory();
    console.log(history)

    //  localStorage.setItem('pathName', location?.pathname);
    

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
                        {/* <Route exact path="/login" component={ LoginScreen } />  */}
{/*                         
                        <PrivateRoutes 
                        path="/" 
                
                        component={ DashboardBoard }
                         /> */}
                    </Switch>
                </div>
            <Footer />
            </Router>
        </div>
    )
}
