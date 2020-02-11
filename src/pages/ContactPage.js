import React, { Component } from 'react';
import $ from 'jquery';
import '../styles/ContactPage.css';

class ContactPage extends Component {

  componentDidMount() {
    $('.contact-image').fadeTo(1000, 1);
  }

  render() {
    return (
      <div class="contact-image">
        <div class="contact-text">
          <h1 style={{ marginBottom: '10px' }}>Anita Pitura</h1>
          <h4>Telefon: +48 782 443 267</h4>
          <h4>E-mail: pituraanita@gmail.com</h4>
        </div>
      </div>
    );
  }
}

export default ContactPage;