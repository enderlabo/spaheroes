import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/type';

import './login.css';

export const LoginScreen = ({ history }) => {

    //Extract information from Context
    const { dispatch } = useContext(AuthContext);
    const lastPath = localStorage.getItem('lastPath') || '/';

    const handleLogin = () => {
        
        // 
        
        dispatch({
            type: types.login,
            payload: {
                name: 'Enderson'
            }
        });
        
        history.replace( lastPath );
    }


    return (

        <div className=" mt-5">
            <div className="containerl">
                <h1>Login Screen</h1>

                <button 
                className="btn btn-danger"
                onClick={ handleLogin }  
                >Login</button>
            </div>
        </div>
    )
}
