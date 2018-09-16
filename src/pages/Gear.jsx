import React, { Component } from 'react';
import css from '../styles/styles';
import content from '../content/gear';
import Radium from 'radium';

class Gear extends Component {
  render() {
  console.warn('GEAR')
    return (
      <section>
        <h1 style={css.h1}>Gear</h1>
        <article style={{...styles.gearDescription, ...styles.gearListing}}>
          {content.map((entry, i) => (
            <dl key={i} style={styles.gearList}>
              <dt style={styles.gearListTitle}>{entry.name}</dt>
              <dd style={styles.gearListItems}>
                {entry.list.map((e, j) => <div style={styles.gearListItem} key={j}>{e}</div>)}
              </dd>
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

export default Radium(Gear);

const styles = {
  gearDescription: {
    maxWidth: css._contentWidth,
    display: 'block',
    margin: '0 auto'
  },
  gearList: {
    margin: '0 0 25px',
    padding: 0,
    textTransform: 'uppercase'
  },
  gearListTitle: {
    textTransform: 'uppercase',
    fontSize: '1.3em',
    margin: '0 0 5px',
    fontWeight: 800
  },
  gearListItem: {
    display: 'list-item',
    fontSize: '1.1em',
    lineHeight: 1.6
  },
  gearListItems: {
    margin: '0 0 0 16px'
  },
  gearListing: {
    columnCount: 3,
    marginBottom: 50,
    '@media screen and (max-width: 640px)': {
      columnCount: 2
    }
  }
};
