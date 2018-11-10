import Player from 'react-sound';
import React, { Component } from 'react';
import Radium from 'radium';
import ReactSVG from 'react-svg';

class SoundPlayer extends Component {
  state = {
    status: Player.status.STOPPED,
    position: 0,
    duration: 0,
    buffered: 0
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.current !== nextProps.counter) {
      this.setState({ position: 0 });
      this.setState({ status: Player.status.STOPPED });
    }
  }

  pause = () => {
    this.setState({ position: 0 });
    this.setState({ status: Player.status.STOPPED });
    this.props.onStop && this.props.onStop();
  };

  play = () => {
    this.props.onStart(this.props.counter);
    this.setState({ status: Player.status.PLAYING });
  };

  handleClick = () => {
   switch (this.state.status) {
    case Player.status.PLAYING:
      this.pause();
      break;
    default:
      this.play();
      break;
   }
  };

  updateSoundBar = (info) => {
    this.setState({
      ...this.state,
      ...{
        position: info.position,
        duration: info.duration,
        //buffered: (info.buffered || [{}])[0].end || 0
      }
    })
  };

  handleFinishedPlaying = () => {
    this.setState({ position: 0 });
  };

  renderTrigger(playing) {
    return (
      <div
        onClick={this.handleClick}
        style={styles[`svgWrapper${playing ? 'Active' : ''}`]} className="svgWrapper"
      >
        <ReactSVG
          svgStyle={styles.svg}
          src={playing
            ? '/' + process.env.PUBLIC_URL + 'images/stop.svg'
            : '/' + process.env.PUBLIC_URL + 'images/ikony_play.svg'
          }
        />
      </div>
    );
  }

  render() {
    const played = (this.state.position / (this.state.duration + 0.01)) * 100 + '%';
    const playing = this.state.status === Player.status.PLAYING;
    if (this.props.content.name) {
      return ( // work details version with time-bar
        <div style={styles.player}>
          {this.props.content.name}
          {this.renderTrigger(playing)}
          <div style={playing ? [styles.soundTotal, styles.playingTotal] : styles.soundTotal}>
            <div style={styles.soundBuffered} />
            <div style={{...styles.soundPlayed, ...{width: played}}} />
          </div>
          <Player
            url={'/' + process.env.PUBLIC_URL + 'mp3s/' + this.props.content.url}
            playStatus={this.state.status}
            onPlaying={this.updateSoundBar}
          />
        </div>
      );
    }
    return ( // index page simple and looped version
      <div style={styles.homeTrigger} className="fade-enter">
        {this.renderTrigger(playing)}
        <Player
          url={'/' + process.env.PUBLIC_URL + 'mp3s/' + this.props.content.url}
          playStatus={this.state.status}
          onPlaying={this.updateSoundBar}
          position={this.state.position}
          onFinishedPlaying={this.handleFinishedPlaying}
        />
    </div>
    );
  }
}

export default Radium(SoundPlayer);

const styles = {
  svgWrapper: {
    width: 48,
    height: 48, 
    border: '8px solid transparent',
    borderRadius: '50%',
    margin: '1em auto',
    cursor: 'pointer',
    transition: 'all 0.4s ease',
    ':hover': {
      background: '#0045D2',
      boxShadow: '0 0 10px #0045D2'
    }
  },
  svgWrapperActive: {
    width: 48,
    height: 48,
    transition: 'background 0.4s ease',
    border: '8px solid #0045D2',
    borderRadius: '50%',
    margin: '1em auto',
    cursor: 'pointer',
    background: '#0045D2',
    boxShadow: '0 0 10px #0045D2'
  },
  svg: {
    width: 48,
    height: 48,
    fill: 'white',
  },
  player: {
    marginBottom: 15,
    textAlign: 'center',
    padding: 25,
    fontSize: '0.85em',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
  soundTotal: {
    background: 'rgba(255, 255, 255, 0.5)',
    height: 7,
    marginTop: 15,
    transition: 'all 0.4s ease'
  },
  playingTotal: {
    background: '#0045D2'
  },
  soundPlayed: {
    background: 'white',
    height: 7
  },
  soundBuffered: {

  },
  homeTrigger: {
    position: 'fixed',
    top: 'calc(100% - 100px)',
    right: '3rem'
  }
};
