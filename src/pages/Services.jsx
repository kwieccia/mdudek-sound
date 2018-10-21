import React, { Component } from 'react';
import css from '../styles/styles';
import content from '../content/services';
import { Link } from 'react-router-dom';
import Radium from 'radium';
const StyledLink = Radium(Link);

class Entry extends Component {
  state = { maxHeight: 'auto' };
  descriptionRef = React.createRef();

  determineMaxHeight = () => {
    this.setState({
      maxHeight: ((this.descriptionRef || {}).current || {}).offsetHeight || 'auto'
    });
  };

  componentDidMount() {
    this.timerHandle = setTimeout(() => this.determineMaxHeight(), 1000);
  }

  componentWillUnmount = () => {
   if (this.timerHandle) {
       clearTimeout(this.timerHandle);
       this.timerHandle = 0;
   }
 };

  render() {
    return (
      <article onClick={() => this.props.onClick(this.props.counter - 1)}>
        <div style={styles.serviceLink}>
          <span style={styles.serviceArrows}>»</span>
          <span>
            <strong>{("0" + this.props.counter).slice(-2)}. </strong>
          </span>
          <h2 style={styles.serviceName}>{this.props.content.name}</h2>
          <div style={
            this.props.expanded
              ? {...styles.serviceDescExpanded, ...{maxHeight: this.state.maxHeight}}
              : styles.serviceDescHidden
          }>
            <div ref={this.descriptionRef}>
              {this.props.content.description}
              <StyledLink to="/contact" style={{...css.button, ...styles.button}}>Contact</StyledLink>
            </div>
          </div>
          <span style={styles.servicePrompt}>
            {this.props.expanded ? 'hide details' : 'see details'}
          </span>
        </div>
      </article>
    )
  }
}

const StyledEntry = Radium(Entry);

class Services extends Component {
  state = {
    expanded: content.map(e => false)
  };

  toggle = (i) => {
    if (this.state.expanded[i]) {
      this.setState({
        expanded: this.state.expanded.map(() => false)
      });
    } else {
      this.setState({
        expanded: this.state.expanded.map((e, j) => i === j)
      });
    }
  };

  render() {
    return (
      <section>
        <h1 style={css.h1}>Services</h1>
        {content.map((entry, i) => (
          <StyledEntry content={entry} counter={i+1} key={i}
            onClick={this.toggle}
            expanded={this.state.expanded[i]}
          />
        ))}
      </section>
    );
  }
}

export default Radium(Services);

const styles = {
  serviceName: {...css.h1, ...{
    opacity: 1,
    margin: '0.6rem 0 0',
    '@media screen and (max-width: 640px)': {
      fontSize: '3rem'
    }
  }},
  serviceLink: {...css.link, ...{
    maxWidth: css._contentWidth,
    display: 'block',
    margin: '0 auto',
    padding: '20px 0 23px',
    borderBottom: '1px solid white',
    ':hover': {
      cursor: 'pointer'
    }
  }},
  servicePrompt: {
    textTransform: 'uppercase',
    textDecoration: 'underline',
    marginTop: 10,
    display: 'inline-block',
    fontSize: '0.85em'
  },
  serviceDescHidden: {
    overflow: 'hidden',
    maxHeight: 0,
    transition: 'all 1s ease-in-out'
  },
  serviceDescExpanded: {
    overflow: 'hidden',
    transition: 'all 1s ease-in-out',
    marginBottom: 5
  },
  serviceArrows: {
    opacity: 1,
    fontSize: '7em',
    margin: 0,
    lineHeight: 1.15,
    fontWeight: 600,
    float: 'right',
    '@media screen and (max-width: 640px)': {
      fontSize: '5em',
      paddingTop: 5,
      lineHeight: 1.05
    }
  },
  button: {
    margin: '10px 0 25px'
  }
};
