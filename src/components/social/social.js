import React from 'react';
import './css/social.css';
import fb from './images/facebook.svg';
import insta from './images/instagram.svg';
import twitter from './images/twitter.svg';
import linkedin from './images/linkedin.svg';
import yt from './images/youtube.svg';

function Social() {
	return (
		<div className="social-container">
			<h1 className="social-heading" data-aos="fade-up">
				ON SOCIAL NETWORKS
			</h1>
			<div className="social-links-container">
				 <a
					href="https://www.facebook.com/mayankthemagician"
					className="social-link"
					target="_blank"
					rel="noopener noreferrer"
					data-aos="fade-right"
				>
					<img src={fb} alt="fb" />
				</a>
				<a
					href="https://www.instagram.com/magicianmayank/"
					className="social-link"
					target="_blank"
					rel="noopener noreferrer"
					data-aos="fade-up-right"
				>
					<img src={insta} alt="insta" />
				</a>
				<a
					href="https://twitter.com/MShekhar1998"
					className="social-link"
					target="_blank"
					rel="noopener noreferrer"
					data-aos="fade-up"
				>
					<img src={twitter} alt="twitter" />
				</a>
				<a
					href="https://www.linkedin.com/in/mayank-shekhar-82248aa2/"
					className="social-link"
					target="_blank"
					rel="noopener noreferrer"
					data-aos="fade-up-left"
				>
					<img src={linkedin} alt="linkedin" />
				</a>
				<a
					href="https://www.youtube.com/channel/UCygVdgXP52u4sesm8Ei2tuA"
					className="social-link"
					target="_blank"
					rel="noopener noreferrer"
					data-aos="fade-left"
				>
					<img src={yt} alt="yt" />
				</a>
			</div>
		</div>
	);
}

export default Social;
