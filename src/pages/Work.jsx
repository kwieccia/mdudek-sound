import React, { Component } from 'react';
import Error404 from './Error404';
import { Link } from 'react-router-dom';
import css from '../styles/styles';

import survivalGame from '../content/works/survivalGame';

const returnContentByUrl = (id) => {
  const works = {
    'survival-game': survivalGame
  };
  return works[id];
};

const Sound = (props) => (
  <div>{props.content.name} {props.content.url}</div>
);

const Video = (props) => (
  <div>
    <h3 style={styles.h3}>{props.content.name}</h3>
    {props.content.url}
  </div>
);

export default class Work extends Component {
  render() {
    const content = returnContentByUrl(this.props.match.params.id);
    if (content) {
      return (
        <section>
          <h1 style={styles.h1}>Works</h1>
          <Link to='/works' style={styles.backLink}>Projects list</Link>
          <article style={styles.workContent}>
            <h2 style={styles.h2}>{content.name}</h2>
            <h3 style={styles.h3}>What is this?</h3>
            {content.description}
            <h3 style={styles.h3}>What I've done?</h3>
            <p style={styles.workCategory}>{content.category}</p>
            {(content.music || {}).length
              ? (
                <div>
                  <h3 style={styles.h3}>Listen music:</h3>
                  {content.music.map((sound, i) => <Sound content={sound} key={i} />)}
                </div>
              )
              : null
            }
            {content.video
              ? content.video.map((video, i) => <Video content={video} key={i} />)
              : null
            }
          </article>
        </section>
      )
    }
    return (
      <Error404 />
    );
  }
}

const styles = {
  h1: {...css.h1, ...{
    marginBottom: 0
  }},
  h2: {...css.h1, ...{
    opacity: 1
  }},
  h3: {
    textTransform: 'uppercase',
    fontSize: '1.4rem'
  },
  backLink: {
    color: 'white',
    float: 'right',
    textTransform: 'uppercase'
  },
  workContent: {
    maxWidth: css._contentWidth,
    margin: '0 auto'
  },
  workCategory: {
    textTransform: 'uppercase'
  }
};
