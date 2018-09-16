import React, { Component } from 'react';
import css from '../styles/styles';
import content from '../content/gear';

export default class Gear extends Component {
  render() {
  console.warn('GEAR')
    return (
      <section>
        <h1 style={css.h1}>Gear</h1>
        <article style={{...styles.gearDescription, ...{columnCount: 3}}}>
          {content.map((entry, i) => (
            <dl key={i} style={styles.gearList}>
              <dt>{entry.name}</dt>
              <dd>{entry.list.map((e, j) => <div key={j}>{e}</div>)}</dd>
            </dl>
          ))}
        </article>
        <h1 style={css.h1}>Workplace</h1>
        <article style={styles.gearDescription}>
          <p>Lorem ipsum dolor sit amet</p>
        </article>
      </section>
    );
  }
}

const styles = {
  gearDescription: {
    maxWidth: css._contentWidth,
    display: 'block',
    margin: '0 auto'
  },
  gearList: {
    margin: 0,
    padding: 0,
    textTransform: 'uppercase'
  }
};
