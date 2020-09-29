import React from 'react'
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom'

export const PrivateRoutes = ({
    isAuthenticate, 
    component: Component,
    ...rest
}) => {



    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route { ...rest }>
                        Component={ ( props ) => (

                            ( isAuthenticate )
                            ? <Component { ...props } />
                            : <Redirect to="/login" />
                        )}

                    </Route>
                </Switch>
            </div>
        </div>
    )
}

PrivateRoutes.protoTypes = {
    isAuthenticate: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}