import React from "react";
import "./Card.scss";

const Card = ({ name, skill }) => {
  return (
    <div className="profile-card">
      <div className="card-header">
        <div className="card-image">
          <img src="https://i.ibb.co/Yt75y7B/favicon.png" alt="" />
        </div>
        <div className="name">{name}</div>
        <div className="profession">{skill}</div>
        <div className="social-media">
          <a href="#" className="fab fa-facebook-f"></a>
          <a href="#" className="fab fa-twitter"></a>
          <a href="#" className="fab fa-github"></a>
          <a href="#" className="fab fa-youtube"></a>
        </div>
      </div>
    </div>
  );
};

export default Card;
