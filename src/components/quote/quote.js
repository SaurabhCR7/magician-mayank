import React from 'react';
import './css/quote.css';

function Quote(props) {
	return (
			<div
				className="quote-container"
				style={{ backgroundImage: `url(${props.img})` }}
			>
				<p className="quote-text">{props.text}</p>
			</div>
	);
}

export default Quote;
