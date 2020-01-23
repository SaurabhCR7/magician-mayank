import React from 'react';
import './css/home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from './images/logo.png';

AOS.init();

function Home() {
	return (
		<div className="home-main-container" id="home">
			<div className="home-container">
				<br></br><br></br><br></br>
				<p className="home-text" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
					MAGICIAN
				</p>
				<p
					className="home-subtext"
					data-aos="fade-up"
					data-aos-delay="150"
					data-aos-duration="1200"
				>
					MAYANK
				</p>
				<p className="home-text" data-aos="fade-up" data-aos-delay="250" data-aos-duration="1000"> 
					WELCOME TO
				</p>
				<p
					className="home-subtext"
					data-aos="fade-up"
					data-aos-delay="300"
					data-aos-duration="1200"
				>
					THE ART OF ILLUSION
				</p>
			</div>
		</div>
	);
}

export default Home;
