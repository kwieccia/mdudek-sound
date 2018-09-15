import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';
 import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import Gear from './pages/Gear';
import Services from './pages/Services';
import Works from './pages/Works';
import Work from './pages/Work';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/contact" component={Contact} />
          <Route path="/gear" component={Gear} />
          <Route path="/services" component={Services} />
          <Route exact path="/works" component={Works} />
          <Route path="/works/:id" component={Work} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
