import React from 'react';
import './App.css';
import HomePage from './pages/HomePage.js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import SearchPage from './pages/SearchPage';
import SomeProduct from './pages/SomeProduct';
import AboutPage from './pages/About';
import FeedbacksPage from './pages/FeedbacksPage';
import SUPage from './pages/SUPage';
 
export default class App extends React.Component {

  render() {

    return (
      <Router>
      <div>
        <Route path="/" exact component={SomeProduct}  />
        <Route path="/search" exact component={SearchPage} />
        <Route path="/home"  exact component={HomePage}/>
        <Route path="/About" exact component={AboutPage} />
        <Route path='/Feedbacks' exact component={FeedbacksPage} />
        <Route path='/SUPage' exact component={SUPage} />
      </div>
      </Router>
    )

  }

}



