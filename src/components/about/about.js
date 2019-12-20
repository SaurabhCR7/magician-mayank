import React from 'react';
import './css/about.css';
import aboutImg from './images/about.jpg';

function About() {
	return (
		<div className="about-container" id="about" >
			<p
				className="about-heading"
				data-aos="fade-up"
				data-aos-delay="70"
				data-aos-duration="1200"
			>
				ABOUT
			</p>
			<div className="about-section">
				<img
					src={aboutImg}
					width="46%"
					height="40%"
					data-aos="fade-right"
					data-aos-delay="50"
					data-aos-duration="1200"
				/>
				<div
					className="about-content-container"
					data-aos="fade-left"
					data-aos-delay="50"
					data-aos-duration="1200"
				>
					<p className="about-section-heading">MAYANK SHEKHAR</p>
					<p className="about-section-content">
						Mayank Shekhar, is a Close-up Illusionist based in New Delhi, India.
						Heavily inspired by the famous film series "Harry Potter", He
						started doing magic at the age of 16. <br />
						<br />
						His style of Magic is unique and unlike any other performer out
						there. He has made himself so skilled by practicing hours and hours
						for years that you'll almost feel like you're watching a Movie when
						you experience his special choreographed Close-up Magic Acts
						performed live on stage. <br />
						<br />
						He has been fortunately blowing people's mind through his
						extraordinary Sleight of Hand Artistry at National and Abroad Venues
						for 5 years. And at such young age, he has established himself as an
						"International Magic Creator" by releasing his original creations
						of magic tricks on a global platform.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
