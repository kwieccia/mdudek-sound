export default {
  _wrapperWidth: 960,
  _contentWidth: 600,
  h1: {
    fontSize: '5em',
    opacity: 0.3,
    textTransform: 'uppercase',
    fontWeight: 700,
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
    textDecoration: 'none',
    textTransform: 'uppercase'
  }
};
