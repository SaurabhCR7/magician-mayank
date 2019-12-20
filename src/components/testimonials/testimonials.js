import React from 'react';
import './css/testimonials.css';
import TestimonialsBox from './testimonialsBox';

import Test1 from './images/test1.jpg';
import Test2 from './images/test2.jpg';
import Test3 from './images/test3.jpg';
import Test4 from './images/test4.jpg';

function Testimonials() {
	return (
		<div className="testimonials-container">
			<p
				className="testimonials-heading"
				data-aos="fade-up"
				data-aos-delay="50"
				data-aos-duration="1000"
			>
				TESTIMONIALS
			</p>
			<div className="testimonials-subcontainer" data-aos="fade-up" data-aos-delay="100"
				data-aos-duration="1000">
				<TestimonialsBox image={Test1} quote={'"Mayank made our diwali party so fabulous, he is an amazing magician."'} name={"~ Ms. Neelu, Sara Int. Pvt. Ltd."} link={"https://youtu.be/wHXALGYjeXk"} />
				<TestimonialsBox image={Test2} quote={'"You’re very very Good Mayank"'} name={"~ SHAHNAZ HUSSAIN"}  />
				<TestimonialsBox image={Test3} quote={'"We’ve never seen anything like this before, absolutely fantastic"'} name={"~ RBS"} />
				<TestimonialsBox image={Test4} quote={'"You are the real magic, so humble and kind, and the tricks are outstanding as well. Mayank, You are my lucky find."'} name={"~ Shivankit Mehta, Hitchki, Dubai"} link={"https://youtu.be/41NZH71xIOo"}/>
			</div>
		</div>
	);
}

export default Testimonials;
