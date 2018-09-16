import React, { Component } from 'react';
import Error404 from './Error404';
import { Link } from 'react-router-dom';
import css from '../styles/styles';
import SoundPlayer from '../components/SoundPlayer';
import Radium from 'radium';

import survivalGame from '../content/works/survivalGame';

const returnContentByUrl = (id) => {
  const works = {
    'survival-game': survivalGame
  };
  return works[id];
};

const Video = (props) => (
  <div>
    <h3 style={styles.h3}>{props.content.name}:</h3>
    <iframe width="100%" height={0.5625 * 600}
      src={"https://www.youtube.com/embed/" + props.content.url + "?rel=0"}
      frameborder="0" allow="autoplay; encrypted-media" allowfullscreen
    />
  </div>
);

class Work extends Component {
  state = {
    playing: null
  };

  pauseOtherPlayers = (i) => {
    this.setState({ playing: i });
  };

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
                  {content.music.map((sound, i) => (
                    <SoundPlayer content={sound} counter={i} key={i}
                      onStart={this.pauseOtherPlayers}
                      current={this.state.playing}
                    />
                  ))}
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

export default Radium(Work);

const styles = {
  h1: {...css.h1, ...{
    marginBottom: 0,
    '@media screen and (max-width: 767px)': {
      display: 'none'
    }
  }},
  h2: {...css.h1, ...{
    opacity: 1,
    marginTop: 40,
    clear: 'both',
    '@media screen and (max-width: 767px)': {
      paddingTop: 20
    },
    '@media screen and (max-width: 640px)': { 
      fontSize: '3em'
    }
  }},
  h3: {
    textTransform: 'uppercase',
    fontSize: '1.3em',
    margin: '3em 0 1.5em'
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
