import React, { Component } from 'react';
import css from '../styles/styles';
import content from '../content/works';
import { Link } from 'react-router-dom';

const Entry = (props) => (
  <article>
    <Link to={`/works/${props.content.url}`} style={styles.workLink}>
      <span>
        <strong>{("0" + props.counter).slice(-2)}. </strong>
        {props.content.description}
      </span>
      <h2>{props.content.name}</h2>
      <span style={styles.workPrompt}>see project</span>
      <span style={styles.workArrows}>»</span>
    </Link>
  </article>
);

export default class Works extends Component {
  render() {
    return (
      <section>
        <h1 style={css.h1}>Works</h1>
        {content.map((entry, i) => <Entry content={entry} counter={i+1} key={i} />)}
      </section>
    );
  }
}

const styles = {
  workLink: {...css.link, ...{
    textTransform: 'uppercase',
    maxWidth: css._contentWidth,
    display: 'block',
    margin: '0 auto'
  }},
  workPrompt: {
    textDecoration: 'underline'
  }
};
