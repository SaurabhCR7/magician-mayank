import React from 'react';
import './css/home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from './images/logo.png';

AOS.init();

function Home() {
	return (
		<div className="home-main-container">
			<div className="home-logo-container">
				<img src={logo} width="200px" height="150px" />
				<p className="logo-text">
					MAYANK<span> SHEKHAR</span>
				</p>
				<p className="sublogo-text">CLOSEUP MAGICIAN</p>
			</div>
			<div className="home-container">
				<p className="home-text" data-aos="fade-up">
					WELCOME TO
				</p>
				<p
					className="home-subtext"
					data-aos="fade-up"
					data-aos-delay="70"
					data-aos-duration="1200"
				>
					THE ART OF ILLUSION
				</p>
			</div>
		</div>
	);
}

export default Home;
