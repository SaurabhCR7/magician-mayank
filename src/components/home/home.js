import React from 'react';
import './css/home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Home() {
	return (
		<div className="home-main-container" id="home">
			<div className="home-container">
				<h1 className="home-text" data-aos="fade-up"> 
					WELCOME TO
				</h1>
				<h1
					className="home-subtext"
					data-aos="fade-up"
					data-aos-delay="300"
					data-aos-duration="1200"
				>
					THE ART OF ILLUSION
				</h1>
			</div>
		</div>
	);
}

export default Home;
