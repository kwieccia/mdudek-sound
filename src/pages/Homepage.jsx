import React, { Component } from 'react';
import css from '../styles/styles';
import SoundPlayer from '../components/SoundPlayer';
import Popup from '../components/Popup';
import Radium from 'radium';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';

const StyledLink = Radium(Link);

class Homepage extends Component {

  state = {popup: false};

  openPopup = (event) => {
    event.preventDefault();
    this.setState({popup: true});
    this.props.popup(true);
  };

  closePopup = () => {
    this.setState({popup: false});
    this.props.popup(false);
  };

  render() {
    const animate = this.props.entryAnimation;

    return (
      <React.Fragment>
        <div style={styles.homeWrapper}>
          <h1 style={styles.h1} className={animate ? 'fade-enter-text' : null}>
            MAKING YOUR WORLD ALIVE
          </h1>
          <div style={styles.homeSlogan}>
            <span style={styles.homeSloganItem}>Composition</span>
            <span style={styles.homeSloganItem}>Sound design</span>
            <span style={styles.homeSloganItem}>Mix</span>
            <span style={styles.homeSloganItem}>Post production</span>
          </div>
          <div style={styles.buttons} className={animate ? 'fade-buttons' : null}>
            <a onClick={this.openPopup} style={styles.homeButton}>see how i work</a>
            <StyledLink to='/works/warplanes-ww1' style={styles.homeButton}>Check the latest work</StyledLink>
          </div>
        </div>
        {this.state.popup ? (
          <Popup close={this.closePopup}>
            <Iframe url="https://www.youtube.com/embed/IJZn8qw7EeA?wmode=opaque"
              styles={{ zIndex: 0 }}
              width="100%"
              height="100%"
              id="IJZn8qw7EeA"
              display="initial"
              position="relative"
              allowFullScreen
            />
        </Popup>
      ) : null}
      </React.Fragment>
    );
  }
}

export default Radium(Homepage);

const styles = {
  h1: {...css.h1, ...{
    opacity: 1,
    textAlign: 'center',
    marginBottom: '1.5rem',
    fontWeight: 800,
    letterSpacing: -0.5
  }},
  homeWrapper: {
    minHeight: 'calc(100vh - 200px)',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    '@media screen and (min-width: 1440px)': {
        minHeight: 'calc(100vh - 300px)',
    }
  },
  homeSlogan: {
    textTransform: 'uppercase',
    fontWeight: 600,
    marginBottom: '3rem',
    '@media screen and (max-width: 640px)': {
      display: 'none'
    }
  },
  homeSloganItem: {
    margin: '0 1rem'
  },
  homeButton: {...css.button, ...{
    marginTop: '1rem',
    marginLeft: '1rem',
    marginRight: '1rem',
    textAlign: 'center'
  }},
  buttons: {
    '@media screen and (max-width: 570px)': {
        display: 'flex',
        flexDirection: 'column'
    }
  }
};
