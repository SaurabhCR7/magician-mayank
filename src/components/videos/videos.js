import React from 'react';
import './css/videos.css';

function Videos() {
	return (
		<div className="videos-container">
			<p
				className="videos-heading"
				data-aos="fade-up"
				data-aos-delay="70"
				data-aos-duration="1200"
			>
				VIDEOS
			</p>
			<iframe
				id="existing-iframe-example"
				width="100%"
				height="600px"
				src="https://www.youtube.com/embed/EWaNLBq-VgM?autoplay=1&mute=1&enablejsapi=1"
				frameborder="0"
				allowFullScreen
			></iframe>
			<br />
			<br />
			<br />
			<br />
			<br />
			<div className="main-subvideos">
				<iframe
					data-aos="fade-right"
					width="49%"
					height="400px"
					src="https://www.youtube.com/embed/hZhcCu-uzD4"
					frameborder="1"
					allow="accelerometer; autoplay; encrypted-media;"
					allowfullscreen
				></iframe>
				<iframe
					data-aos="fade-left"
					width="49%"
					height="400px"
					src="https://www.youtube.com/embed/f0QHG-sVhZo"
					frameborder="1"
					allow="accelerometer; autoplay; encrypted-media;"
					allowfullscreen
				></iframe>
			</div>
			<br />
			<br />
			<br />
			<p
				className="subvideos-heading"
				data-aos="fade-up"
				data-aos-delay="70"
				data-aos-duration="1200"
			>
				GLOBALLY PUBLISHED MAGIC TRICKS
			</p>
			<div className="main-subvideos">
				<iframe
					data-aos="fade-right"
					width="49%"
					height="400px"
					src="https://www.youtube.com/embed/hq27x612hwI"
					frameborder="1"
					allow="accelerometer; autoplay; encrypted-media;"
					allowfullscreen
				></iframe>
				<iframe
					data-aos="fade-left"
					width="49%"
					height="400px"
					src="https://www.youtube.com/embed/iHUVKQV8mPc"
					frameborder="1"
					allow="accelerometer; autoplay; encrypted-media;"
					allowfullscreen
				></iframe>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</div>
	);
}

export default Videos;
