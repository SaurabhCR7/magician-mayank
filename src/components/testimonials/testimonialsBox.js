import React from 'react';
import './css/testimonialsBox.css';

function TestimonialsBox(props) {
	return (
		<div className="testimonials-box-container" id="testimonials" >
         <img src={props.image} className="testimonials-pic" alt="Best Magician in Delhi"/>
      <h2 className="testimonials-quote">{props.quote}</h2>
      <h3 className="testimonials-name">{props.name}</h3>
         {props.link ? <a href={props.link} target="_blank" rel="noopener noreferrer"className="testimonials-link" >(Watch here)</a> : <p className="blank-space"></p>}
		</div>
	);
}

export default TestimonialsBox;
