import { useCallback, useEffect, useState } from 'react';

const Home = () => {
  const date = new Date();
  const hour = date.getHours();
  const [message, setmessage] = useState('');

  const greeting = useCallback(() => {
    if (hour >= 0 && hour <= 12) {
      setmessage('Good morning! ☀️');
    } else if (hour >= 1 && hour <= 18) {
      setmessage('Good afternoon! 🌄');
    } else {
      setmessage('Good night! 🌚');
    }
  }, [hour]);

  useEffect(() => {
    greeting();
  }, [message, greeting]);

  return (
    <>
      <section className="col-span-1 sm:col-span-3 p-3 row-start-1">
        <h1 className="text-2xl sm:text-4xl font-semibold text-gray-300 text-center sm:text-left">
          {message} <span className="text-indigo-400">Charlie</span>
        </h1>
        <h2 className="text-md text-gray-400 mt-3 text-center sm:text-left">
          We help you to find the best prices.
        </h2>
      </section>
      <div className="row-start-2 col-span-1 p-14 sm:p-1 lg:col-span-2 bg-white shadow-lg m-3 rounded-xl grid place-items-center">
        <h3 className="text-red-400 text-xl font-bold">
          Don't have stadistics yet
        </h3>
      </div>
      <div className="col-auto row-start-3 lg:row-start-2 bg-white shadow-lg rounded-xl md:col-start-3 m-3">
        <h3 className="text-1xl sm:text-2xl text-center">More searched</h3>
        <img
          className="mx-auto w-1/2 sm:w-3/4"
          src="https://cdn.picpng.com/clock/clock-illustration-31352.png"
          alt="clock"
        />
        <p className="text-center text">Simple clock</p>
        <p className="text-center text-3xl p-3">
          <span className="text-indigo-400 font-bold">14</span>
          <span className="text-lg ml-1">$</span>
        </p>
      </div>
    </>
  );
};

export default Home;
