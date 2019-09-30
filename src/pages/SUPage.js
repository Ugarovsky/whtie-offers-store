import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import '../App.css';
import '../index.css';


export default class HomePage extends React.Component{
  render() {
  return (
  <div id="SUPage">
      <div id="Su-template">
          <h1>Gracias!</h1>
          <h2>Su pedido es aceptado!</h2>
          <p>Nuestro operador se pondrá en contacto con usted para confirmar el pedido. </p>
          <p>La entrega se realiza por correo o mensajería. Pago - a la recepción!</p>
          <h2>¡Participa en la acción!</h2>
          <p>espera a que nuestro operador te contacte</p>
        <Link to="/home"><button>Inicio</button></Link>
      </div>
</div>
  )
  }
}