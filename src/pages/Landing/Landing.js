import React from 'react';
import { ReactComponent as Chart } from '../../assets/svg/chart.svg';
import Nav from '../../components/navbar/Nav';
import './Landing.scss';

const Landing = () => {
  return (
    <section className="section__container">
      <Nav />
      <div className="div__principal">
        <div>
          <h3>Innovative solution for compare prices.</h3>
          <h2>
            We help you to find the best prices <span>ever</span>!
          </h2>
          <form>
            <input placeholder="Search..." type="search" />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        <Chart className="sgv__principal" />
      </div>
    </section>
  );
};

export default Landing;
