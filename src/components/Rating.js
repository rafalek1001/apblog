import React from 'react';
import '../styles/Rating.css';
import stargold from '../images/stargold.png';
import starblank from '../images/starblank.png';

const Rating = ({ title, author, stars, text }) => {

  function handleShowRating(stars) {
    let rating = [];
    for (let i = 0; i < stars; i++) {
      rating.push(<img src={stargold} alt="*" />)
    }
    for (let i = 0; i < 5 - stars; i++) {
      rating.push(<img src={starblank} alt="" />)
    }
    return rating
  }

  return (
    <article className="rating">
      <h3>{title}</h3>
      <span>{author}</span>
      {handleShowRating(stars)}
      <p>{text}</p>
    </article>
  );
}

export default Rating;