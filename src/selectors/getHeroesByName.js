import { heroes } from "../data/heroes"


export const getHeroesByName = ( name = '' ) => {

    // Si no ha escrito nada, no va a retornar nada
    if( name === '' ){
        return [];
    }
    name = name.toLocaleLowerCase();
    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes(name));
}

// toLocaleLowerCase().includes(name) lo hace sensible a las busquedas;
// name = name.toLowerCase(); para pasar todo a minuscula
// name = '' null por si no manda nada, se muestren todos los heroes