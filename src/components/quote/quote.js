import React from 'react';
import './css/quote.css';

function Quote(props) {
	return (
		<div
			className="quote-container"
			style={{ backgroundImage: `url(${props.img})` }}
		>
			<p className="quote-text">{props.text}</p>
			{props.author ? <p className="quote-author" >{props.author}</p> : null}
		</div>
	);
}

export default Quote;
