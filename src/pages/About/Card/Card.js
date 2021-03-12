import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = ({
  image,
  name,
  skill,
  facebook = undefined,
  twitter = undefined,
  github = undefined,
  web = undefined,
}) => {
  return (
    <article className="profile-card">
      <div className="card-header">
        <picture className="card-image">
          <img src={image} alt="" />
        </picture>
        <p className="name">{name}</p>
        <p className="profession">{skill}</p>
        {name && (
          <div className="social-media">
            {facebook && (
              <a href={facebook} target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>{' '}
              </a>
            )}
            {twitter && (
              <a href={twitter} target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>{' '}
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
            )}
            {web && (
              <a href={web} target="_blank" rel="noreferrer">
                <i className="fas fa-globe"></i>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

Card.defaultProps = {
  image: 'https://i.ibb.co/Yt75y7B/favicon.png',
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  github: PropTypes.string,
  youtube: PropTypes.string,
};

export default Card;
