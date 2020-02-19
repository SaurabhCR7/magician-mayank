import React from 'react';
import './css/about.css';
import aboutImg from './images/about.jpg';

function About() {
	return (
		<div className="about-container" id="about">
			<div className="about-section">
				<img
					src={aboutImg}
					data-aos="fade-right"
					alt="about"
				/>
				<div className="about-content-container" data-aos="fade-left">
					<h1
						className="about-section-heading"
					>
						WHO AM I?
					</h1>
					<h2
						className="about-section-content"
					>
						Magician Mayank is a theatre and corporate magician, who performs Visual Magic Worldwide. You can hire him for a Corporate Event, Product Launch, Brand promotion. <br />
						<br />
						His style of Magic is unique and unlike any other performer out
						there. Magician Mayank has made himself so skilled by practicing hours and hours
						for years that you'll almost feel like you're watching a Movie when
						you experience his special choreographed Close up Magic Acts
						performed live on stage. <br />
						<br />
						Magician Mayank has been fortunately blowing people's mind through his
						extraordinary Sleight of Hand Artistry at National and Abroad Venues
						for 5 years. And at such young age, he has established himself as an
						"International Magic Creator" by releasing his original creations of
						magic tricks on a global platform.
					</h2>
				</div>
			</div>
		</div>
	);
}

export default About;
