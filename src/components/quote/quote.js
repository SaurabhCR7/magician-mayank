import React from 'react';
import './css/quote.css';
import Background1 from './images/background1.png';
import Background2 from './images/background2.png';
import Background3 from './images/background3.jpg';
import Background4 from './images/background4.png';
import Background5 from './images/background5.png';

function Quote(props) {
	return (
	<div>
		<br /><br /><br /><br /><br /><br /><br /><br />
			<div className="quote-container" style={{backgroundImage: `url(${props.img})`}}>
			<p className="quote-text">{props.text}</p>
		</div>
		<br /><br /><br /><br /><br /><br /><br /><br />
	</div>
		
	);
}

export default Quote;
