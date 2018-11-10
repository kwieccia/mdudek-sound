import React, { Component } from 'react';
import './styles/animations.css';
import css from './styles/styles';
import Radium, {StyleRoot} from 'radium';
import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import SoundPlayer from './components/SoundPlayer';

import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import Gear from './pages/Gear';
import Services from './pages/Services';
import Works from './pages/Works';
import Work from './pages/Work';
import Error404 from './pages/Error404';

const StyledLink = Radium(Link);

class AppContent extends Component {

  state = {
    menuExpanded: false,
    playerActive: false,
    popup: false
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({playerActive: false})
    }
  }

  toggleMenu = () => {
    this.setState({ menuExpanded: !this.state.menuExpanded });
  }

  hideMenu = () => {
    this.setState({ menuExpanded: false });
  }

  playerActive = () => {
    this.setState({playerActive: true})
  };

  playerStopped = () => {
    this.setState({playerActive: false})
  };

  popup = (opened) => {
    this.setState({popup:opened, playerActive: false})
  };

  render() {
    return (
      <div style={styles.perspective}>
      <div style={[
          styles.pageBackground(this.props.location.pathname, this.state.playerActive)
      ]} />
      <div style={styles.pageWrapper}>
        <header style={styles.pageHeader}>
          <div style={styles.pageLogo}>
            <Link style={styles.pageTitle} to="/">Michael Dudek</Link>
            <span style={styles.pageCaption}>sound portfolio</span>
          </div>
          <nav
            style={this.state.menuExpanded
              ? [styles.pageMenu, styles.pageMenuVisible]
              : styles.pageMenu
            }
            onClick={this.hideMenu}
          >
            <StyledLink style={styles.pageMenuLink} to="/works">works</StyledLink>
            <StyledLink style={styles.pageMenuLink} to="/services">services</StyledLink>
            <StyledLink style={styles.pageMenuLink} to="/gear">gear & workplace</StyledLink>
            <StyledLink style={styles.pageMenuLink} to="/contact">contact</StyledLink>
          </nav>
          <div style={styles.hamburger} onClick={this.toggleMenu}>
            <div style={styles.hamburgerLine1} />
            <div style={styles.hamburgerLine2} />
            <div style={styles.hamburgerLine3} />
          </div>
        </header>
        <main style={styles.pageContent(this.props.location.pathname, this.state.playerActive)}>
          <TransitionGroup style={styles.pageTransitionWrapper}>
            <CSSTransition
              key={this.props.location.key}
              timeout={{ enter: 1000, exit: 0 }}
              classNames={'fade'}
              exit={false}
            >
              <Switch>
                <Route exact path="/"
                  render={(props) => <Homepage {...props}
                    popup={this.popup}
                  />}
                />
                <Route path="/contact" component={Contact} />
                <Route path="/gear" component={Gear} />
                <Route path="/services" component={Services} />
                <Route exact path="/works" component={Works} />
                <Route path="/works/:id" component={Work} />
                <Route component={Error404} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </main>
        {this.props.location.pathname === '/' && !this.state.popup ? <SoundPlayer
          content={{ url: 'portfolio_muzyka_C_studio_01.mp3' }}
          counter={1}
          onStart={this.playerActive}
          onStop={this.playerStopped}
          current={1}
        /> : null}
        </div>
      </div>
    );
  }
}

const App = withRouter(Radium(AppContent));

export default class WrappedApp extends Component {
  render = () => (
    <StyleRoot>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StyleRoot>
  )
}

const switchBackground = (page) => {
  const returnUrl = (img) =>
    'url("/' + process.env.PUBLIC_URL + 'images/tla_' + img + '04_bg.jpg") center center / cover no-repeat';
  switch (page) {
    case '/': return returnUrl('index');
    case '/works':    return returnUrl('works');
    case '/gear':     return returnUrl('gear');
    case '/services': return returnUrl('services');
    case '/contact':  return returnUrl('contact');
    case '/works/survival-game':
    case '/works/casual-game':
    case '/works/mystery-game':
    case '/works/farm-game':
    case '/works/logic-game':
    case '/works/horror-game':
      return returnUrl('works_details');
    default: return '#090909';
  }
};

const bgOpacity = (page, playerActive) => {
  if (page === '/' && !playerActive) {
    return 0.8;
  }
  return 1;
}

const textOpacity = (page, playerActive) => {
  if (page === '/' && playerActive) {
    return 0.8;
  }
  return 1;
}

const styles = {
  perspective: {
    height: '100vh',
    perspective: 2,
    overflowY: 'auto',
    overflowX: 'hidden',
    position: 'relative'
  },
  pageBackground: (page, playerActive) => ({
    background: switchBackground(page),
    opacity: bgOpacity(page, playerActive),
    minHeight: '100vh',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    transition: 'all 1s ease-in-out',
    boxShadow: page === '/' ? 'inset 0 -100px 100px 0 transparent': 'inset 0 -100px 100px 0 #090909',
    transform: 'translateZ(-2px) scale(2)',
    '@media screen and (orientation: portrait)': {
      backgroundSize: 'auto 100%'
    }
  }),
  pageWrapper: {
    position: 'relative',
    zIndex: 9,
    minHeight: '100vh',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '0 30px',
    transition: 'all 1s ease-in-out',
  },
  pageContent: (page, playerActive) => ({
    maxWidth: '100%',
    width: css._wrapperWidth,
    textAlign: 'left',
    paddingBottom: 80,
    transition: 'all 1s ease-out',
    opacity: textOpacity(page, playerActive)
  }),
  pageHeader: {
    textTransform: 'uppercase',
    maxWidth: '100%',
    width: css._wrapperWidth,
    padding: '50px 0 40px',
    display: 'flex',
    fontSize: '0.875rem',
    '@media screen and (max-width: 925px)': {
      padding: '25px 0 40px'
    },
    '@media screen and (min-width: 1440px)': {
      padding: '80px 0'
    }
  },
  pageLogo: {
    '@media screen and (max-width: 925px)': {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  pageMenu: {
    marginLeft: 'auto',
    fontWeight: 600,
    '@media screen and (max-width: 925px)': {
      flexDirection: 'column',
      display: 'flex',
      position: 'absolute',
      background: '#222035',
      top: 70,
      left: 0,
      right: 0,
      padding: 0,
      zIndex: 99,
      overflow: 'hidden',
      maxHeight: 0,
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
      transition: 'all 0.4s ease'
    }
  },
  pageMenuVisible: {
    '@media screen and (max-width: 925px)': {
      maxHeight: 150,
      padding: '10px 0'
    }
  },
  pageMenuLink: {...css.link,
    marginLeft: 50,
    '@media screen and (max-width: 925px)': {
      padding: '10px 30px',
      margin: 0,
      display: 'block'
    }
  } ,
  pageTitle: {...css.link, ...{
    fontWeight: 600
  }},
  pageCaption: {
    borderLeft: '1px solid white',
    padding: '0 0 0 10px',
    margin: '0 0 0 10px',
    '@media screen and (max-width: 925px)': {
      paddingLeft: 0,
      marginLeft: 0,
      borderLeft: 'none',
      fontSize: '0.9em'
    }
  },
  pageTransitionWrapper: {
    position: 'relative',
    animation: 'showPageOnLoad 1s ease-in-out 0s alternate'
  },
  hamburger: {
    height: 30,
    width: 40,
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'absolute',
    zIndex: 100,
    right: 30,
    top: 20,
    cursor: 'pointer',
    '@media screen and (max-width: 925px)': {
      display: 'flex'
    }
  },
  hamburgerLine1: {
    background: 'white',
    height: 5,
    width: '100%'
  },
  hamburgerLine2: {
    background: 'white',
    height: 5,
    width: '60%'
  },
  hamburgerLine3: {
    background: 'white',
    height: 5,
    width: '80%'
  }
};
