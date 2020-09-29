import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/type';
import { useForm } from '../../hooks/useForm';
import { Link } from 'react-router-dom';


export const LoginScreen = ({ history }) => {

    //Extract information from Context
    const { dispatch } = useContext(AuthContext);
    const lastPath = localStorage.getItem('lastPath') || '/';

    const [ formValues, handleInput ] = useForm({
        email: 'test@gmail.com',
        password: '123456'
    });

    //data from formS
    const { email, password } = formValues;
    const handleLogin = (e) => {
        e.preventDefault();
        // dispatch( startLoginEmailPass( email, password )  )

            dispatch({
            type: types.login,
            payload: {
                name: 'Enderson'
            }
        });

        history.replace( lastPath );
    }

    const handleGoogleLogin = () => {
        console.log('Google SingIn!!')
    }

    // const handleLogin = () => {
        
        
        
    //     dispatch({
    //         type: types.login,
    //         payload: {
    //             name: 'Enderson'
    //         }
    //     });
        
    //     history.replace( lastPath );
    // }


    return (
        <div className="login__main">
        <div className="login__container">
           <h3 className="auth__title">Login</h3>

           <form onSubmit={ handleLogin }>
                    <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    className="auth__input"
                    value={ email }
                    onChange={ handleInput }
                    />


                    <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }
                    onChange={ handleInput }
                    />

                    <button type="submit" 
                    className="btn btn-primary btn-block"
                    // disabled= { loading }
                    // disabled={ true }
                    >
                        Login
                    </button>
               

                    <div className="auth__social-networks">
                        <p>Login with Social Networks</p>

                        <div className="google-btn" 
                        onClick={ handleGoogleLogin }>
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link className="link" to="/auth/register">
                    Create New Account
                </Link>

           </form>         
        </div>
        </div>
    )
}
