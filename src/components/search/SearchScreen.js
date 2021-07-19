import React, { useMemo } from 'react'
import queryString from 'query-string'
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = () => {

    const history = useHistory();
    const location = useLocation();
    const { q= '' } = queryString.parse( location.search );

    const [formValues, handleInputChange] = useForm( {
        seachText:q
    } );

    const { seachText } = formValues;
    const horesFiltered = useMemo(() => getHeroesByName( q ), [q]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        history.push(`?q=${seachText}`)
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">

                <div className="col-5">

                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input 
                            autoComplete="off"
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="seachText"
                            value={ seachText }
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>

                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />


                    {
                        ( q === '' )
                            &&
                            <div className="alert alert-info">
                                Search a hero
                            </div>
                    }

                    {
                        ( q !== '' && horesFiltered.length === 0)
                            &&
                            <div className="alert alert-danger">
                                There is not a hero with { q }
                            </div>
                    }

                    {
                        horesFiltered.map( hero => (
                            <HeroCard 
                                key={ hero.id }
                                {...hero}
                            />
                        ))
                    }

                </div>


            </div>

        </div>
    )
}
