import React from 'react';
import '../App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

export default class Footer extends React.Component {
    render() {

        const NameCheapURL = 'https://www.namecheap.com/';
        const CookiesURL = 'http://cookies.unidadeditorial.es/'
        return (

            <footer>
                <p>

                    Todos los derechos de los materiales en el sitio están protegidos de conformidad con la legislación de la Federación Rusa. Con cualquier uso de los materiales del sitio se requiere el consentimiento por escrito. Las marcas comerciales, los logotipos y las marcas de servicio en este sitio son propiedad de NameCheap.COM Domain Registrar LLC o de terceros.
                 </p>
                <p>
                    <a href={NameCheapURL}> NameCheap.com 2019.</a>
                    <br/>

                    <a href={CookiesURL}> Política de cookies.</a>
                </p>
            </footer>

        );
    }
}