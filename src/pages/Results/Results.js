import React from 'react';
import Card from '../../components/dashboard/card/Card';
import Input from '../../components/input/Input';
import './results.scss';

const Results = () => {
  return (
    <section className="animate__animated animate__fadeInRight">
      <Input />
      <div>
        <div>
          <h2>More economical:</h2>
        </div>
        <div>
          <h3>Other results</h3>
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Results;
