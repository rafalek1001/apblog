import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "../styles/Header.css";

import img1 from '../images/header1.JPG';
import img2 from '../images/header2.JPG';
import img3 from '../images/header3.JPG';
import img4 from '../images/header4.JPG';
import img5 from '../images/header5.JPG';
import img6 from '../images/header6.JPG';

const Header = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact render={() => (
          <img src={img1} alt="akwarium" />
        )} />
        <Route path="/offer" render={() => (
          <img src={img2} alt="motyl" />
        )} />
        <Route path="/photos" render={() => (
          <img src={img4} alt="kwiaty" />
        )} />
        <Route path="/ratings" render={() => (
          <img src={img3} alt="zachod" />
        )} />
        <Route path="/contact" render={() => (
          <img src={img5} alt="ptak" />
        )} />
        <Route render={() => (
          <img src={img6} alt="surykatka" />
        )} />
      </Switch>
    </>
  );
}

export default Header;