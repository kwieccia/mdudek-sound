import React, { Component } from 'react';
import Radium from 'radium';

class Error404 extends Component {
  render() {
    return (
      <div style={styles.error}>404 not found</div>
    );
  }
}

export default Radium(Error404);

const styles = {
  error: {
    fontSize: '5em',
    fontWeight: 800,
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 200px)',
    '@media screen and (min-width: 1440px)': {
        minHeight: 'calc(100vh - 300px)',
    }
  }
};
