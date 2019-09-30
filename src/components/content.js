import React from 'react';
import '../App.css';
import '../index.css';
import {pohudalka,oProducts} from '../data/jsonData.js'
import Slider from './slider.js'
import ProductList from './productList.js'
export default class Content extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            Offer: this.props.offer,
        };
    }

    render() {
        return (
            <div id="content">
                <div id="header-content">
                <h1>{pohudalka.h1Tittle}</h1>
                <h2>{pohudalka.h2Tittle}</h2>
                <p>{pohudalka.firstP}</p>
                <div className="colorLabels">
                <div className="redLabel"><p>{pohudalka.redLabel}</p></div>
                <div className="greyLabel"><p>{pohudalka.greyLabel}</p></div>
                </div>
                </div>
            
         
              
                <div className="header-pr"><h2 >nuestros productos</h2>
                <ProductList offer={this.props.offer} />
                <Slider />
            </div>
            </div>

        );
    }
}