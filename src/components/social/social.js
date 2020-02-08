import React from 'react';
import './css/social.css';

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
					<i class="fab fa-facebook-f"></i>
				</a>
				<a
					href="https://www.instagram.com/magicianmayank/"
					className="social-link"
					target="_blank"
					rel="noopener noreferrer"
					data-aos="fade-up-right"
				>
					<i class="fab fa-instagram"></i>
				</a>
				<a
					href="https://twitter.com/MShekhar1998"
					className="social-link"
					target="_blank"
					rel="noopener noreferrer"
					data-aos="fade-up"
				>
					<i class="fab fa-twitter"></i>
				</a>
				<a
					href="https://www.linkedin.com/in/mayank-shekhar-82248aa2/"
					className="social-link"
					target="_blank"
					rel="noopener noreferrer"
					data-aos="fade-up-left"
				>
					<i class="fab fa-linkedin-in"></i>
				</a>
				<a
					href="https://www.youtube.com/channel/UCygVdgXP52u4sesm8Ei2tuA"
					className="social-link"
					target="_blank"
					rel="noopener noreferrer"
					data-aos="fade-left"
				>
					<i class="fab fa-youtube"></i>
				</a>
			</div>
		</div>
	);
}

export default Social;
