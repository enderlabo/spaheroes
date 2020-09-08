import React, { useMemo } from 'react'
import querystring from 'query-string';
// import { heroes } from '../../data/heroes';
import { HeroesCards } from '../heroes/HeroesCards';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { geHeroesByName } from '../../selectors/getHeroByName';

export const SearchBar = ({ history }) => {

    const location = useLocation();
    // const { q = '' } = querystring.parse( location.search );
    const { q = '' } = useMemo( () => querystring.parse( location.search ), [location] );
    const query = q.trim();
    
    const [ formValues, handleInputChange ] = useForm({
        searchText: query

    });
    const { searchText } = formValues;
    //filter by name
    const heroesFiltered = useMemo( () => geHeroesByName( query ), [query] );

    const handleForm = (e) => {

        e.preventDefault();
        history.push(`?q=${ searchText }`)
       
    }


    return (
        <div className="animate__animated animate__fadeIn">
            <h1>Search Bar</h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />

                    <form onSubmit={ handleForm } >
                        <input 
                        type="text" 
                        placeholder="Find You Heroe" 
                        className="form-control"
                        name="searchText"
                        autoComplete="off"
                        value={searchText}
                        onChange={ handleInputChange }
                        />

                        <button  type="submit" 
                        className="btn m-1 btn-block btn-info">
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">

                    <h2 > Results </h2>
                    <hr />
                    {
                        ( query === '' ) && 
                        <div className="alert alert-success animate__animated animate__fadeInRight"> Search Hero </div>
                    }

{
                        ( query !== '' && heroesFiltered.length === 0 ) && 
                        <div className="alert alert-danger animate__animated animate__shakeX"> There is no a Heroe name: { query } </div>
                    }

                    {
                           heroesFiltered.map( heroes => (
                               <div className="animate__animated animate__fadeInTopRight" key={ heroes.id }>
                                    <HeroesCards 
                                    
                                    { ...heroes }
                                    />
                                </div>
                            ))
                        
                    }
                </div>

            </div>
        </div>
    )
}
