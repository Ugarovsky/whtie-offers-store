import React from 'react';
import '../App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
export default class Header extends React.Component {
    render() {
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
}