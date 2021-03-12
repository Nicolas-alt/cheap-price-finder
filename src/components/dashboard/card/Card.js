import React from 'react';
import './Card.scss';

const Card = () => {
  return (
    <article className="card-contain">
      <picture className="avatar-image">
        <img
          className="avatar-image"
          src="https://i.ibb.co/nnGQ9tJ/face1.png"
          alt=""
        />
      </picture>
      <div className="body-card">
        <h2 className="Text-colour-name">computer</h2>
        <p className="Text-colour-proffesion">Full Stack Developer</p>
        <p className="Text-colour-place">Melbourne, AU</p>
      </div>
    </article>
  );
};

export default Card;
