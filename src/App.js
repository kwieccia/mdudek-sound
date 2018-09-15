import React, { Component } from 'react';
import './styles/animations.css';
import css from './styles/styles';
import Radium from 'radium';
import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import Gear from './pages/Gear';
import Services from './pages/Services';
import Works from './pages/Works';
import Work from './pages/Work';

class AppContent extends Component {
  render() {
    console.warn(this.props.location.key)
    return (
      <div style={styles.pageWrapper}>
        <header style={styles.pageHeader}>
          <span style={styles.pageTitle}>Michael Dudek</span>
          <span style={styles.pageCaption}>sound portfolio</span>
          <nav style={styles.pageMenu}>
            <Link style={styles.pageMenuLink} to="/works">works</Link>
            <Link style={styles.pageMenuLink} to="/services">services</Link>
            <Link style={styles.pageMenuLink} to="/gear">gear & workplace</Link>
            <Link style={styles.pageMenuLink} to="/contact">contact</Link>
          </nav>
        </header>
        <main style={styles.pageContent}>
          <TransitionGroup style={styles.pageTransitionWrapper}>
            <CSSTransition
              key={this.props.location.key}
              timeout={{ enter: 1000, exit: 0 }}
              classNames={'fade'}
            >
              <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route path="/contact" component={Contact} />
                <Route path="/gear" component={Gear} />
                <Route path="/services" component={Services} />
                <Route exact path="/works" component={Works} />
                <Route path="/works/:id" component={Work} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </main>
      </div>
    );
  }
}

const App = withRouter(Radium(AppContent));

export default class WrappedApp extends Component {
  render = () => (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

const styles = {
  pageWrapper: {
    background: '#222',
    minHeight: '100vh',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '0 30px'
  },
  pageContent: {
    maxWidth: '100%',
    width: 960,
    textAlign: 'left'
  },
  pageHeader: {
    textTransform: 'uppercase',
    maxWidth: '100%',
    width: 960,
    padding: '50px 0',
    display: 'flex'
  },
  pageMenu: {
    marginLeft: 'auto'
  },
  pageMenuLink: {...css.link, ...{
    marginLeft: 50
  }},
  pageTitle: {

  },
  pageCaption: {
    borderLeft: '1px solid white',
    padding: '0 0 0 10px',
    margin: '0 0 0 10px'
  },
  pageTransitionWrapper: {
    position: 'relative',
    animation: 'showPageOnLoad 1s ease-in-out 0s alternate'
  }
};
