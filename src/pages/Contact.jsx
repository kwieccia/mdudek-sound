import React, { Component } from 'react';
import css from '../styles/styles';
import Radium from 'radium';

class Contact extends Component {

  state = {
    contactName: '',
    contactEmail: '',
    contactMessage: ''
  };

  handleNameChange = (evt) => {
    this.setState({ contactName: evt.target.value });
  };
  handleEmailChange = (evt) => {
    this.setState({ contactEmail: evt.target.value });
  };
  handleMessageChange = (evt) => {
    this.setState({ contactMessage: evt.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ info: 'Sending…' });

    const _this = this;

    fetch('/mailer.php', {
      method: 'POST',
      body: JSON.stringify({
        "form_name": this.state.contactName,
        "form_email": this.state.contactEmail,
        "form_msg": this.state.contactMessage
      })})
    .then(function(res){
      res.text().then((text) => {
        if (res.status === 200) {
          _this.setState({
            contactName: '',
            contactEmail: '',
            contactMessage: ''
          })
        }
        _this.setState({
          info: text
        })
      });
    });
  };

  render() {
    return (
      <section>
        <h1 style={css.h1}>Contact</h1>
        <p>
          Email: michalesdudek@gmail.com<br/>
          mob.: + 48 502 764 786
        </p>
        <form id="contactForm" style={styles.form} method="POST" action="mailer.php" onSubmit={this.handleSubmit}>
          <label for="form_name" style={styles.formLabel}>Name</label>
          <input type="text" value={this.state.contactName} style={styles.input} id="form_name" onChange={this.handleNameChange} />

          <label for="form_email" style={styles.formLabel}>E-mail:</label>
          <input value={this.state.contactEmail} id="form_email" style={styles.input} type="email" onChange={this.handleEmailChange} />

          <label for="form_msg" style={styles.formLabel}>Message:</label>
          <textarea value={this.state.contactMessage} style={styles.textarea} id="form_msg" onChange={this.handleMessageChange} ></textarea>

          {this.state.info ? <blockquote style={styles.info}>{this.state.info}</blockquote> : null}
          <input type="submit" value="Send" style={css.button} />
        </form>
      </section>
    );
  }
}

export default Radium(Contact);

const styles = {
  form: {
    marginTop: 50
  },
  info: {
    margin: '0 0 20px',
    padding: 20,
    background: 'rgba(255,255,255,0.3)',
    width: 650,
    maxWidth: '100%',
    minWidth: '50%',
    boxSizing: 'border-box'
  },
  formLabel: {
    display: 'block',
    marginBottom: 5,
    textTransform: 'uppercase',
    fontWeight: 'bold'
  },
  input: {
    width: 650,
    maxWidth: '100%',
    minWidth: '50%',
    background: 'none',
    border: 'none',
    borderBottom: '2px solid rgba(255,255,255,0.4)',
    padding: 10,
    marginBottom: 20,
    color: 'white',
    transition: 'all 0.4s ease',
    boxSizing: 'border-box'
  },
  textarea: {
    width: 650,
    minWidth: '50%',
    maxWidth: '100%',
    border: 'none',
    background: 'rgba(0, 0, 0, 0.8)',
    padding: 10,
    marginBottom: 20,
    marginTop: 15,
    height: 100,
    color: 'white',
    display: 'block',
    transition: 'all 0.4s ease',
    boxSizing: 'border-box'
  }
};
