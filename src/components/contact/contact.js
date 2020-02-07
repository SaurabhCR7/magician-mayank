import React from 'react';
import './css/contact.css';

import Mail from './images/mail.png';
import Fb from './images/fb.png';
import Youtube from './images/youtube.png';
import Instagram from './images/instagram.png';

function Contact() {
	return (
		<div className="contact-container" id="contact">
			<p className="contact-heading" data-aos="fade-up">
				CONTACT
			</p>
			<div className="contact-card-container">
				<a
					href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=mayankthemagician@gmail.com&tf=1"
					target="_blank"
					data-aos="fade-right"
					rel="noopener noreferrer"
				>
					<img src={Mail} alt="mail" />
				</a>
				<a
					href="https://www.facebook.com/mayankthemagician"
					target="_blank"
					data-aos="fade-up"
					data-aos-delay="100"
					rel="noopener noreferrer"
				>
					<img src={Fb} alt="facebook" />
				</a>
				<a
					href="https://www.youtube.com/channel/UCygVdgXP52u4sesm8Ei2tuA"
					target="_blank"
					data-aos="fade-up"
					data-aos-delay="100"
					rel="noopener noreferrer"
				>
					<img src={Youtube} alt="youtube" />
				</a>
				<a
					href="https://www.instagram.com/magicianmayank/"
					target="_blank"
					rel="noopener noreferrer"
					data-aos="fade-left"
				>
					<img src={Instagram} alt="instagram" />
				</a>
			</div>
			<p className="contact-phone" data-aos="fade-up">
				<i class="fas fa-phone-volume"></i> +919582589350
			</p>
		</div>
	);
}

export default Contact;
