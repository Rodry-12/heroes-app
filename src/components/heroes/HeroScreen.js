import React, { useMemo } from 'react'
import { Redirect, useHistory, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroScreen = () => {

    const { heroeId } = useParams();

    const heroe = useMemo(() => getHeroesById( heroeId ), [heroeId])
    //const heroe = getHeroesById( heroeId );
    const history = useHistory();

    if( !heroe ){
        return <Redirect to="/" />
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = heroe;


    const handleReturn = () =>{
        
        ( history.length <= 2 )
            ? history.push('/')
            : history.goBack() // volover a la pagina anterior
    }


    return (
        <div className="row mt-5"> 
           <div className="col-4">
                <img 
                 alt={ superhero }
                 src={`/../assests/heroes/${ heroeId }.jpg`} 
                 className="img-thumbnail animate__animated animate__fadeInLeft"/> 
           </div>
           
           <div className="col-8 animate__animated animate__fadeIn">

                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> { alter_ego }</li>
                    <li className="list-group-item"><b>Publisher:</b> { publisher }</li>
                    <li className="list-group-item"><b>First appearance:</b> { first_appearance }</li>
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                > 
                    Return
                </button>
           </div>
        </div>
    )
}
