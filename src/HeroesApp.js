import React, { useReducer, useEffect } from 'react'
import { AppRoutes } from './routers/AppRoutes'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer';


const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

export const HeroesApp = () => {
            //authReducer, state = {}, value from localStorage
    const [user, dispatch] = useReducer(authReducer, {}, init)
        //make persistence data on localStorage
    useEffect(() => {
         
        localStorage.setItem('user', JSON.stringify(user));
    }, [user])
    
    return (
        <AuthContext.Provider value={{ user, dispatch }}>

            <AppRoutes />

        </AuthContext.Provider>

    )
}
