import React, { Component } from 'react';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import '../styles/HomePage.css';

class HomePage extends Component {

  componentDidMount() {
    $('.hero-container').fadeTo(1000, 1);
  }

  render() {
    return (
      <div class="hero-container">
        <div class="hero-image">
          <div class="hero-text">
            <h1>Anita Pitura</h1>
            <p>Fotograf</p>
            <NavLink to="/offer">
              <button>OFERTA</button>
            </NavLink>
          </div>
        </div>
        <div class="hero-image-half">
          <div class="hero-text-half">
            <h3>ZDJĘCIA</h3>
            <NavLink to="/photos">
              <button>ZOBACZ</button>
            </NavLink>
          </div>
        </div>
        <div class="hero-image-half2">
          <div class="hero-text-half">
            <h3>OPINIE</h3>
            <NavLink to="/ratings">
              <button>ZOBACZ</button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;