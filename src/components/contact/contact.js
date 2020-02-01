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
				>
					<img src={Mail} />
				</a>
				<a
					href="https://www.facebook.com/mayankthemagician"
					target="_blank"
					data-aos="fade-up"
					data-aos-delay="100"
				>
					<img src={Fb} />
				</a>
				<a
					href="https://www.youtube.com/channel/UCygVdgXP52u4sesm8Ei2tuA"
					target="_blank"
					data-aos="fade-up"
					data-aos-delay="100"
				>
					<img src={Youtube} />
				</a>
				<a
					href="https://www.instagram.com/magicianmayank/"
					target="_blank"
					data-aos="fade-left"
				>
					<img src={Instagram} />
				</a>
			</div>
			<p className="contact-phone" data-aos="fade-up">M: +919953054029</p>
		</div>
	);
}

export default Contact;
