import React, { Component } from 'react';
import css from '../styles/styles';
import content from '../content/works';
import { Link } from 'react-router-dom';
import Radium from 'radium';

const Entry = (props) => (
  <article>
    <Link to={`/works/${props.content.url}`} style={styles.workLink}>
    <span style={styles.workArrows}>»</span>
      <span>
        <strong>{("0" + props.counter).slice(-2)}. </strong>
        {props.content.description}
      </span>
      <h2 style={styles.workName}>{props.content.name}</h2>
      <span style={styles.workPrompt}>see project</span>
    </Link>
  </article>
);

const StyledEntry = Radium(Entry);

class Works extends Component {
  render() {
    return (
      <section>
        <h1 style={css.h1}>Works</h1>
        {content.map((entry, i) => <StyledEntry content={entry} counter={i+1} key={i} />)}
      </section>
    );
  }
}

export default Radium(Works);

const styles = {
  workLink: {...css.link, ...{
    textTransform: 'uppercase',
    maxWidth: css._contentWidth,
    display: 'block',
    margin: '0 auto',
    borderBottom: '1px solid white',
    padding: '40px 0'
  }},
  workPrompt: {
    textDecoration: 'underline',
    fontSize: '0.85em'
  },
  workName: {...css.h1, ...{
    opacity: 1,
    margin: '16px 0',
    '@media screen and (max-width: 640px)': {
      fontSize: '3em',
      marginBottom: 12
    }
  }},
  workArrows: {
    opacity: 1,
    fontSize: '7em',
    margin: '5px 0',
    fontWeight: 700,
    float: 'right',
    paddingLeft: 25,
    '@media screen and (max-width: 640px)': {
      fontSize: '5em',
      paddingTop: 0
    },
    '@media screen and (max-width: 519px)': {
      display: 'none'
    }
  }
};
