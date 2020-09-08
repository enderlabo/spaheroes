import React from 'react'
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoutes = ({
    isAuthenticate, 
    component: Component,
    ...rest
}) => {



    return (
        <Route { ...rest }>
            Component={ ( props ) => (

                ( isAuthenticate )
                ? <Component { ...props } />
                : <Redirect to="/login" />
            )}

        </Route>
    )
}

PrivateRoutes.protoTypes = {
    isAuthenticate: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}