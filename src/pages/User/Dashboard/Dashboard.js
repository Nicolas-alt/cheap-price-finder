import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.scss';

const Dashboard = ({ children }) => {
  return (
    <section className="section__dashboard">
      <aside>
        <Link to="/user/home">
          <i className="bx bx-home-heart"></i>
          Home
        </Link>
        <Link to="/user/profile">
          <i className="bx bx-user"></i>
          Profile
        </Link>
        <Link to="/user/chart">
          <i className="bx bx-line-chart"></i>
          Chart
        </Link>
        <Link to="/user/about">
          <i className="bx bx-info-square"></i>
          About
        </Link>
        <Link to="/user/search">
          <i className="bx bx-search-alt-2"></i>
          Search
        </Link>
      </aside>
      <div>{children}</div>
    </section>
  );
};

export default Dashboard;
