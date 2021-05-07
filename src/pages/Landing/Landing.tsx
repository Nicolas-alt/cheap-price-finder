import chart from 'assets/svg/chart.svg';
import Nav from 'components/navbar/Nav';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <section className="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
        <Nav />
        <div className="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
          <div className="container mx-auto px-6 flex relative pt-8">
            <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
              <span className="w-20 h-2 bg-indigo-400 dark:bg-white mb-6"></span>
              <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-indigo-400">
                Find the best prices
                <span className="text-5xl sm:text-7xl">Ever</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                Innovative solution for compare prices. We help you to find the
                best prices <span className="text-indigo-500">ever</span>!
              </p>
              <div className="flex mt-8">
                <Link
                  to="/about"
                  className="uppercase py-2 px-4 rounded-lg bg-indigo-400 border-2 border-transparent text-white text-md mr-4 hover:bg-indigo-300"
                >
                  Get started
                </Link>
              </div>
            </div>
            <div className="hidden sm:w-1/3 lg:w-3/5 relative sm:flex justify-center items-center">
              <img
                src={chart}
                className="max-w-xs md:max-w-sm m-auto"
                alt="Svg logo"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
