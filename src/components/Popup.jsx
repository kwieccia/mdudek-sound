import React from 'react';
import Radium from 'radium';

class Popup extends React.Component {
  render() {
    return (
      <div style={styles.overlay} onClick={this.props.close}>
          <div style={styles.popup}>
            <div className="loader" style={styles.loader}/>
            <div onClick={this.props.close} style={styles.close}>❌</div>
            {this.props.children}
          </div>
      </div>
    );
  }
}

const styles = {
  overlay: {
    background: 'rgba(0,0,0,0.5)',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 9999999
  },
  popup: {
    background: '#090909',
    padding: 20,
    position: 'relative',
    width: '70vw',
    height: '70vh',
    maxHeight: '60vw'
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  },
  close: {
    color: 'white',
    cursor: 'pointer',
    fontSize: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: -10,
    top: -10,
    background: '#090909',
    border: '2px solid white',
    borderRadius: '50%',
    width: 44,
    height: 44,
    transition: 'all 0.4s ease',
    boxShadow: '0 0 0 8px transparent',
    zIndex: 99999,
    ':hover': {
      background: '#0045d2',
      boxShadow: '0 0 0 8px #0045d2',
    }
  }
};

export default Radium(Popup);
