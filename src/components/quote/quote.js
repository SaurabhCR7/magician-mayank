import React from 'react';
import './css/quote.css';

function Quote(props) {
	return (
		<div className="quote-container">
			<p className="quote-text">{props.text}</p>
		</div>
	);
}

export default Quote;
