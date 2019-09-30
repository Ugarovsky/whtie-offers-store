import React from 'react';
import '../App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
export default class Header extends React.Component {
    render() {
        return (
            
                <header>
                    <ul>
                        <li>
                           <Link to='/home'> Página de inicio</Link>
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
}