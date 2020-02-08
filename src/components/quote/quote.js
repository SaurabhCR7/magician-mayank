import React from 'react';
import './css/quote.css';

function Quote(props) {
	return (
		<div
			className="quote-container"
			style={{ backgroundImage: `url(${props.img})` }}
		>
			<h1 className="quote-text">{props.text}</h1>
			{props.author ? <h1 className="quote-author" >{props.author}</h1> : null}
		</div>
	);
}

export default Quote;
