import React from 'react';
import './css/testimonials.css';
import TestimonialsBox from './testimonialsBox';
import { Slide } from 'react-slideshow-image';

import Test1 from './images/test1.jpg';
import Test2 from './images/test2.jpg';
import Test3 from './images/test3.jpg';
import Test4 from './images/test4.jpg';

const properties = {
	duration: 5000,
	transitionDuration: 500,
	infinite: true,
	indicators: true,
	arrows: true,
	onChange: (oldIndex, newIndex) => {
		console.log(`slide transition from ${oldIndex} to ${newIndex}`);
	}
};

function Testimonials() {
	return (
		<div className="testimonials-container" id="testimonials">
			<p
				className="testimonials-heading"
				data-aos="fade-up"
				data-aos-delay="50"
				data-aos-duration="1000"
			>
				TESTIMONIALS
			</p>
			<div
				className="testimonials-subcontainer"
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="200"
			>
				<Slide {...properties}>
					<div className="each-slide">
						<TestimonialsBox
							image={Test1}
							quote={
								'"Magician Mayank made our Diwali Party so fabulous, he is an amazing magician"'
							}
							name={'~ Ms. Neelu, Sara Int. Pvt. Ltd.'}
							link={'https://youtu.be/wHXALGYjeXk'}
						/>
					</div>
					<div className="each-slide">
						<TestimonialsBox
							image={Test2}
							quote={'"You’re very very Good Magician Mayank"'}
							name={'~ SHAHNAZ HUSSAIN'}
						/>
					</div>
					<div className="each-slide">
						<TestimonialsBox
							image={Test3}
							quote={
								'"We’ve never seen anything like this before, absolutely fantastic"'
							}
							name={'~ RBS'}
						/>
					</div>
					<div className="each-slide">
						<TestimonialsBox
							image={Test4}
							quote={
								'"You are the real magic, so humble and kind, and the tricks are outstanding as well"'
							}
							name={'~ Shivankit Mehta, Hitchki, Dubai'}
							link={'https://youtu.be/41NZH71xIOo'}
						/>
					</div>
				</Slide>
			</div>
		</div>
	);
}

export default Testimonials;
