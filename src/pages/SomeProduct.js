
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import pickedProduct from '../services/productBuf';
import '../App.css';
import '../index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Swal from 'sweetalert2'


export default class SomeProduct extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            product: {},
        };
    }


    componentDidMount() {
        this.setState({
            product : pickedProduct,
        })
        Swal.fire({
            title: 'Atencion',
            text: `El sitio utiliza la política de cookies, 
            Si estás en contra de esta política, deja el recurso.`,
            imageUrl: 'http://home.bt.com/images/internet-cookies-136394253835903901-141107145132.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            animation: false
          })

    }

  render() {

  return (
  <div>
<Header />
<div id="product-body">
<div id="some-product-template">
    <h1>{this.state.product.name}</h1>
    <img src={this.state.product.imgSrc} width='30%' />
    <p>{this.state.product.price}</p>
    <h2>{this.state.product.firstP}</h2>
    <p>{this.state.product.secondP}</p>
    <p>{this.state.product.thirdP}</p>
    <p>{this.state.product.fourthP}</p>
    <form id="buy-form">
        <input tupe="text" required placeholder="your name..." />
        <input tupe="email" required placeholder="your mail..." />
        <input tupe="number" required placeholder="phone number..." />
       <Link to='/SUPage'><button type="submit">Pedir</button></Link> 
    </form>
    </div>
    </div>
<Footer />
</div>
  )
  }
}


