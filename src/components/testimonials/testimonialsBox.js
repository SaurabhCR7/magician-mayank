import React from 'react';
import './css/testimonialsBox.css';

function TestimonialsBox(props) {
	return (
		<div className="testimonials-box-container" id="testimonials" >
      <img src={props.image} className="testimonials-pic" height="50px" width="50px" />
      <p className="testimonials-quote">{props.quote}</p>
      <p className="testimonials-name">{props.name}</p>
      {props.link ? <a href={props.link} target="_blank" className="testimonials-link" >(Watch here)</a> : <p className="blank-space"></p>}
		</div>
	);
}

export default TestimonialsBox;
