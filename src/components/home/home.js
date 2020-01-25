import React from 'react';
import './css/home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Home() {
	return (
		<div className="home-main-container" id="home">
			<div className="home-container">
				<p className="home-text" data-aos="fade-up"> 
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
