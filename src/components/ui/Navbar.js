import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/type';
// import history from '../../selectors/createHistory'


export const Navbar = () => {
    //Extract info from COntext.
    const { user, dispatch } = useContext(AuthContext);
    const history = useHistory();

    console.log(history);

    const handleLogout = () => {

        history.replace('/login');
        dispatch({
            type: types.logout
        })
    }


    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                <span className="nav-item nav-link text-info" >
                    { user.name }
                </span>

                    <button 
                        className="nav-item nav-link btn"
                        onClick={ handleLogout } 
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}