import React from 'react'
import { useHistory } from 'react-router-dom'

export const LoginScreen = () => {

    const history = useHistory();

    const handleLogin = () => {
        history.push('/'); // vuelve a una pagina en especifico
       
        //history.replace('/') // borra el historial
    }


    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
