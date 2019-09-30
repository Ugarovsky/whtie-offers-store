import React from 'react';
import SearchField from "react-search-field";
import '../App.css';
import { pohudalka, oProducts } from '../data/jsonData.js'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import pickedProduct from '../services//productBuf'


function searchingFor(term) {
    return function (x) {
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

export default class ProuctList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: oProducts,
            term: '',
            sorting: 'no',
        };
        this.searchHendeler = this.searchHendeler.bind(this);
    }

    searchHendeler(event) {
        this.setState({
            term: event.target.value,
        })
    }

    pickTheProduct(item) {

    }


    getProductList = (e) => {
        const ProuctList = this.state.products.filter(searchingFor(this.state.term)).map(function (item) {
            return <div className="some-product" key={item.id}>
                <img src={item.imgSrc} widht="100%" />
                <p>{item.name}</p>
                <h2>{item.price}</h2>
                <Link to='/'><button>Pedir</button></Link>
            </div>
        })
        return ProuctList;
    }




    render() {

        return (
            <div id="product-template">
                <input type="text"
                    placeholder="Search..."
                    className="test-class"
                    value={this.state.term}
                    onChange={this.searchHendeler}
                />
                <div id="black-line" />
                <div id="product-list">
                    {this.getProductList()}
                </div>
            </div>

        );
    }
}