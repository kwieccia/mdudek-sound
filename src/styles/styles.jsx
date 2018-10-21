export default {
  _wrapperWidth: 1400,
  _contentWidth: 960,
  h1: {
    fontSize: '5.625rem',
    opacity: 0.3,
    textTransform: 'uppercase',
    fontWeight: 600,
    lineHeight: 1,
    margin: '20px 0 50px',
    '@media screen and (max-width: 640px)': {
      fontSize: '3em',
      margin: '10px 0 20px'
    }
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  },
  button: {
    border: '1px solid white',
    padding: '10px 15px',
    display: 'inline-block',
    color: 'white',
    background: 'transparent',
    cursor: 'pointer',
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: 'all 0.4s ease',
    fontWeight: 'bold',
    textShadow: '1px 1px 3px rgba(0,0,0,0.9)',
    ':hover': {
      background: '#0045D2',
      boxShadow: '0 0 10px #0045D2',
      borderColor: '#0045D2'
    }
  }
};
