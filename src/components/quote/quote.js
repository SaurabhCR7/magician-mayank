import React from 'react';
import './css/quote.css';

function Quote(props) {
	return (
		<div className="quote">
			<hr></hr>
			<div
				className="quote-container"
				style={{ backgroundImage: `url(${props.img})` }}
			>
				<h1 className="quote-text">
					{props.text}
					<br></br>
					{props.author}
				</h1>
			</div>
			<hr></hr>
		</div>
	);
}

export default Quote;
