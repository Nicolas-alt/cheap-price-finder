import React from 'react';
import { ReactComponent as Chart } from '../../assets/svg/chart.svg';
import Nav from '../../components/navbar/Nav';
import './Landing.scss';

const Landing = () => {
  return (
    <section className="section__container">
      <Nav />
      <div className="">
        <div>
          <h3 className="">Innovate solution for sourcing candidates</h3>
          <h2 className="">
            Help us find the missing puzzle, get reward properly
          </h2>
          <form>
            <input placeholder="Search..." type="search" />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        <Chart />
      </div>
    </section>
  );
};

export default Landing;
