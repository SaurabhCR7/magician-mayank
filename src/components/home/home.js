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
				<img
					src={logo}
					width="140px"
					height="100px"
					data-aos="fade-down"
					data-aos-duration="1500"
				/>
				<div className="logo-txt-container">
					<div
						className="logo-txt-mayank"
						data-aos="fade-right"
						data-aos-duration="1300"
					>
						MAYANK
					</div>
					<div
						className="logo-txt-shekhar"
						data-aos="fade-left"
						data-aos-duration="1300"
					>
						SHEKHAR
					</div>
				</div>
				<div className="sublogo-txt-container">
					<div
						className="sublogo-txt-closeup"
						data-aos="fade-up-right"
						data-aos-delay="80"
						data-aos-duration="1500"
					>
						CLOSE-UP
					</div>
					<div
						className="sublogo-txt-magician"
						data-aos="fade-up-left"
						data-aos-delay="80"
						data-aos-duration="1500"
					>
						MAGICIAN
					</div>
				</div>
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
