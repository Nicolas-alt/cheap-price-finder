import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.scss';

const Dashboard = ({ children }) => {
  return (
    <section className="section__dashboard">
      <Link to="/user/home">Home</Link>
      <Link to="/user/profile">Profile</Link>
      <Link to="/user/chart">Chart</Link>
      <Link to="/user/about">About</Link>
      <Link to="/user/search">Search</Link>
      <div>{children}</div>
    </section>
  );
};

export default Dashboard;
