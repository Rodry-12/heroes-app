import React, { useMemo } from 'react'
import { getHeroeByPublisher } from '../../selectors/getHeroeByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroeByPublisher( publisher ), [publisher]);
    //const heroes = getHeroeByPublisher( publisher );

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <HeroCard 
                        key={hero.id}
                        {...hero}
                    />
                ))
            }
        </div>
    )
}
