import React, { Component } from 'react';
import css from '../styles/styles';
import SoundPlayer from '../components/SoundPlayer';
import Radium from 'radium';
import { Link } from 'react-router-dom';

const StyledLink = Radium(Link);

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={styles.homeWrapper}>
          <h1 style={styles.h1}>Giving live to your world</h1>
          <div style={styles.homeSlogan}>
            <span style={styles.homeSloganItem}>Composition</span>
            <span style={styles.homeSloganItem}>Sound design</span>
            <span style={styles.homeSloganItem}>Mix</span>
            <span style={styles.homeSloganItem}>Post production</span>
          </div>
          <StyledLink to='/works' style={styles.homeButton}>Check latest works</StyledLink>
        </div>
      </React.Fragment>
    );
  }
}

export default Radium(Homepage);

const styles = {
  h1: {...css.h1, ...{
    opacity: 1,
    textAlign: 'center',
    marginBottom: '1.5rem'
  }},
  homeWrapper: {
    minHeight: 'calc(100vh - 220px)',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
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
    marginTop: '1rem'
  }}
};
