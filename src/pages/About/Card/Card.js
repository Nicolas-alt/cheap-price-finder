import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({
  name,
  skill,
  facebook = undefined,
  twitter = undefined,
  github = undefined,
  youtube = undefined,
}) => {
  return (
    <div className="profile-card">
      <div className="card-header">
        <div className="card-image">
          <img src="https://i.ibb.co/Yt75y7B/favicon.png" alt="" />
        </div>
        <div className="name">{name}</div>
        <div className="profession">{skill}</div>
        {name && (
          <div className="social-media">
            {facebook && (
              <a href={facebook}>
                <i className="fab fa-facebook-f"></i>{' '}
              </a>
            )}
            {twitter && (
              <a href={twitter}>
                <i className="fab fa-twitter"></i>{' '}
              </a>
            )}
            {github && (
              <a href={github}>
                <i className="fab fa-github"></i>
              </a>
            )}
            {youtube && (
              <a href={youtube}>
                <i className="fab fa-youtube"></i>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  github: PropTypes.string,
  youtube: PropTypes.string,
};

export default Card;
