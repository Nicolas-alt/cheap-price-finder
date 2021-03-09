import React from "react";
import './Card.scss';

const Card = () => {
  return (
    <section className="card-contain">
      <div className="card">
        <div className="avatar-image">
          <img className="avatar-image" src="https://i.ibb.co/nnGQ9tJ/face1.png" alt=""/>
        </div>
        <div className="body-card">
          <h2 className='Text-colour-name'>Daniel Páez</h2>
          <p className='Text-colour-proffesion'>Full Stack Developer</p>
          <p className='Text-colour-place'>Melbourne, AU</p>
        </div>
      </div>
    </section>
  );
};

export default Card;
