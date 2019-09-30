
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Content from '../components/content';
import '../App.css';
import '../index.css';


export default class HomePage extends React.Component{
  render() {
  return (
  <div>
<Header />
<Content/>
<Footer />
</div>
  )
  }
}


