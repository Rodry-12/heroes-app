import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const Marvel = () => {
    return (
        <div>
            <h1>MarVel</h1>
            <hr />

            <HeroList publisher='Marvel Comics' />
        </div>
    )
}
