import React, { Component } from 'react';
import css from '../styles/styles';
import content from '../content/gear';
import Radium from 'radium';

class Gear extends Component {
  render() {
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
          <img src={'/' + process.env.PUBLIC_URL + 'images/studio_zdjecie.jpg'} style={styles.img}/>
        </article>
      </section>
    );
  }
}

export default Radium(Gear);

const styles = {
  img: {
    maxWidth: '100%'
  },
  gearDescription: {
    maxWidth: css._contentWidth,
    display: 'block',
    margin: '0 auto',
    '@media screen and (max-width: 640px)': {
      marginTop: 50
    }
  },
  gearList: {
    margin: '0 0 40px',
    padding: 0,
    textTransform: 'uppercase'
  },
  gearListTitle: {
    textTransform: 'uppercase',
    fontSize: '1.375rem',
    margin: '0 0 10px',
    fontWeight: 800
  },
  gearListItem: {
    display: 'list-item',
    fontSize: '1em',
    lineHeight: 2.2
  },
  gearListItems: {
    margin: '0 0 0 16px'
  },
  gearListing: {
    columnCount: 3,
    columnGap: 40,
    marginBottom: '5rem',
    '@media screen and (max-width: 805px)': {
      marginTop: 50,
      columnCount: 2
    },
    '@media screen and (max-width: 480px)': {
      columnCount: 1
    }
  }
};
