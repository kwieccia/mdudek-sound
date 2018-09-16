import Player from 'react-sound';
import React, { Component } from 'react';
import Radium from 'radium';

class SoundPlayer extends Component {
  state = {
    status: Player.status.STOPPED,
    position: 0,
    duration: 0,
    buffered: 0
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.current !== nextProps.counter) {
      this.setState({ status: Player.status.PAUSED });
    }
  }

  pause = () => {
    this.setState({ status: Player.status.PAUSED });
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

  render() {
    const played = (this.state.position / (this.state.duration + 0.01)) * 100 + '%';
    return (
      <div
        onClick={this.handleClick}
        style={this.state.status === Player.status.PLAYING
          ? {...styles.player, ...styles.playing}
          : styles.player
        }
      >
        {this.props.content.name}
        <div style={styles.soundTotal}>
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
}

export default Radium(SoundPlayer);

const styles = {
  player: {
    border: '1px solid white',
    marginBottom: 15,
    textAlign: 'center',
    padding: 15,
    fontSize: '0.85em',
    fontWeight: 600,
    textTransform: 'uppercase',
    transition: 'all 0.5s ease-in-out',
    ':hover': {
      cursor: 'pointer'
    }
  },
  playing: {
    background: 'navy'
  },
  soundTotal: {
    background: 'rgba(255, 255, 255, 0.5)',
    height: 7,
    marginTop: 10
  },
  soundPlayed: {
    background: 'white',
    height: 7
  },
  soundBuffered: {

  }
};
