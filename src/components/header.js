import React from 'react';
import {Link, BrowserRouter as Router } from 'react-router-dom'
import '../App.css';

const Header = () => {
    return (

        <header>
            <ul>
                <li>
                    <Link to='/home'> <img src={"https://lympo.io/wp-content/themes/lympoio/images/huobi.png"}></img></Link>
                </li>
                <li>
                    <Link to='/search'>Buscar</Link>
                </li>
                <li>
                    <Link to='/about'>  Acerca de </Link>
                </li>
                <li>
                    <Link to='/feedbacks'>Сomentarios</Link>
                </li>
            </ul>
        </header>

    );
}

export default Header;