import React from 'react';
import './Landing.scss';
import Chart from '../../assets/svg/chart.svg';

const Landing = () => {
    return (
        <div className='landing-container'>
            <div className="clip-path-2"></div>
            <header className='header-container'>
                <nav className='nav-container'>
                    <ul className='ul-container'>
                        <li className='li-container'><a className='a-links-header' href="#">Home</a></li>
                        <li className='li-container'><a className='a-links-header' href="#">About Us</a></li>
                        <li className='li-container'><a className='a-links-header' href="#">Products</a></li>
                        <li className='li-container'><a className='a-links-header' href="#">Contact</a></li>
                        <li className='li-container bg-purple'><a className='a-links-header ' href="#">Login</a></li>
                        <li className='li-container bg-purple'><a className='a-links-header' href="#">Sign Up</a></li>
                    </ul>
                </nav>
            </header>
            <div className="chart">
                <img src={Chart} alt=""/>
            </div>
            <section className="about margen">
                <div className='about-titles'>
                    <h3 className='about-title'>Innovate solution for sourcing candidates</h3>
                    <br/>
                    <h2 className='about-subtitle'>Help us find the missing puzzle, get reward properly</h2>
                </div>
                <form>
                    <br/>
                    <input placeholder='Buscar' type="search" />
                    <i class="fas fa-search"></i>
                </form>
                <br/>
                <h2 className='margen text-muted'>Recent added:</h2>
            </section>
            <div className="clip-path"></div>
        </div>
    )
}

export default Landing
