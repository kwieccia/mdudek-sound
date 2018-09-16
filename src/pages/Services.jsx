import React, { Component } from 'react';
import css from '../styles/styles';
import content from '../content/services';
import { Link } from 'react-router-dom';

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
          <span>
            <strong>{("0" + this.props.counter).slice(-2)}. </strong>
          </span>
          <h2 style={styles.serviceName}>{this.props.content.name}</h2>
          <div style={
            this.props.expanded
              ? {...styles.serviceDescExpanded, ...{maxHeight: this.state.maxHeight + 40}}
              : styles.serviceDescHidden
          }>
            <div ref={this.descriptionRef}>
              {this.props.content.description}
              <Link to="/contact" style={css.button}>Contact</Link>
            </div>
          </div>
          <span style={styles.servicePrompt}>
            {this.props.expanded ? 'hide details' : 'see details'}
          </span>
          <span style={styles.serviceArrows}>»</span>
        </div>
      </article>
    )
  }
}

export default class Services extends Component {
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
          <Entry content={entry} counter={i+1} key={i}
            onClick={this.toggle}
            expanded={this.state.expanded[i]}
          />
        ))}
      </section>
    );
  }
}

const styles = {
  serviceName: {
    textTransform: 'uppercase'
  },
  serviceLink: {...css.link, ...{
    maxWidth: css._contentWidth,
    display: 'block',
    margin: '0 auto',
    ':hover': {
      cursor: 'pointer',
      color: 'red'
    }
  }},
  servicePrompt: {
    textTransform: 'uppercase',
    textDecoration: 'underline'
  },
  serviceDescHidden: {
    overflow: 'hidden',
    maxHeight: 0,
    transition: 'all 1s ease-in-out'
  },
  serviceDescExpanded: {
    overflow: 'hidden',
    transition: 'all 1s ease-in-out'
  }
};
