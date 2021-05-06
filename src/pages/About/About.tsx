import Card from './Card/Card';
import './About.scss';
import { Nav } from 'components';

const About = () => {
  return (
    <section className="about___container ">
      <Nav />
      <h2 className="about___title">About Project</h2>
      <div className="about___paragraph">
        <p className="paragraph">
          This project is a product searcher, and it has a particular function
          of filtering so many prices in Internet and to show the user the most
          low.
          <br />
          This project was developed by two enthusiasts developers.
        </p>
      </div>
      <h2 className="about___title">Colaborators</h2>
      <div className="cards___container">
        <Card
          image="https://avatars.githubusercontent.com/u/57303802?s=460&u=a79e7d6d3854104efa335b6f1b9fa95eff18a9bf&v=4"
          name="Daniel Páez"
          skill="Frontend Developer"
          github="https://github.com/DanielPaezb"
        />
        <Card
          image="https://avatars.githubusercontent.com/u/52179095?s=460&u=3c32f626fcbc00f39db5da407a76ce7a0bb3e7f3&v=4"
          name="Nicolás Jimenez"
          skill="Front dev"
          twitter="https://twitter.com/Nicolas35103573"
          github="https://github.com/Nicolas-alt"
          web="https://nicolas-alt.vercel.app"
        />
      </div>
    </section>
  );
};

export default About;
