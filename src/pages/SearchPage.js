
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ProductList from '../components/productList';
import '../App.css';
import '../index.css';


export default class SearchPage extends React.Component{
  render() {
  return (
  <div>
<Header />
<div id="search-page-body">
    <h1>Search for Products...</h1>
<ProductList/>
</div>
<Footer />
</div>
  )
  }
}


