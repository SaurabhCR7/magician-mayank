import React from 'react';
import './css/about.css';
import aboutImg from './images/about.jpg';

function About() {
	return (
		<div
			className="about-container"
			id="about"
			itemscope
			itemtype="http://schema.org/Person"
		>
			<div className="about-section">
				<img
					src={aboutImg}
					data-aos="fade-right"
					alt="Best Magician in Delhi"
					itemprop="photo"
				/>
				<div className="about-content-container" data-aos="fade-left">
					<h1 className="about-section-heading" itemprop="description">
						WHO AM I?
					</h1>
					<h2 className="about-section-content" itemprop="description">
						<strong>Magician Mayank</strong> is one of the <strong>Best Magician in Delhi India</strong>. He is a
						<strong> Theatre and Corporate Magician</strong>, who performs Visual Magic Worldwide.
						Hire for an Event incuding Corporate Event, Product Launch, Brand
						promotion, Birthday Party. <br />
						<br />
						His style of Magic is unique and unlike any other performer out
						there. <strong>Magician Mayank</strong> has made himself so skilled by practicing
						hours and hours for years that you'll almost feel like that he is probably the <strong>Best Magician in Delhi India</strong>. <br />
						<br />
						<strong>Magician Mayank</strong> has been fortunately blowing people's mind through
						his extraordinary Sleight of Hand Artistry at National and Abroad
						Venues for 5 years. And at such young age, he has established
						himself as an "International Magic Creator" by releasing his
						original creations of magic tricks on a global platform.
					</h2>
				</div>
			</div>
		</div>
	);
}

export default About;
