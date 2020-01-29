import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navigation.css";

const list = [
  { name: "start", path: "/", exact: true },
  { name: "oferta", path: "/offer" },
  { name: "zdjęcia", path: "/photos" },
  { name: "opinie", path: "/ratings" },
  { name: "kontakt", path: "/contact" },
]

const Navigation = () => {

  const menu = list.map(item => (
    <li key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
    </li>
  ))

  return (
    <nav className="main">
      <ul>
        {menu}
      </ul>
    </nav>
  );
}

export default Navigation;