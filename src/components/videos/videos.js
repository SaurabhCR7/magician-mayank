import React, { useState } from 'react';
import TrackVisibility from 'react-on-screen';
import ReactPlayer from 'react-player';
import './css/videos.css';

function Videos() {
	const [shouldPlay, updatePlayState] = useState(false);
	const Player = props => {
		updatePlayState(props.isVisible);
		return (
			<ReactPlayer
				url="https://youtu.be/EWaNLBq-VgM"
				width="100%"
				height="70vh"
				playing={shouldPlay}
				loop="true"
				controls="false"
				muted="true"
				forceVideo="true"
			/>
		);
	};
	return (
		<div className="videos-container" id="videos">
			<p
				className="videos-heading"
				data-aos="fade-up"
				data-aos-delay="70"
				data-aos-duration="1200"
			>
				VIDEOS
			</p>
			<TrackVisibility className="trackVisibility">{Player}</TrackVisibility>
			<br />
			<br />
			<br />
			<br />
			<br />
			<div className="main-subvideos">
				<iframe
					data-aos="fade-right"
					src="https://www.youtube.com/embed/hZhcCu-uzD4"
					frameborder="1"
					allow="accelerometer; autoplay; encrypted-media;"
					allowfullscreen="true"
					title="52 Shades Of Red"
				></iframe>
				<iframe
					data-aos="fade-left"
					width="560"
					height="315"
					src="https://www.youtube.com/embed/9jCPorZO5mA"
					frameborder="1"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen="true"
					title="Teaser"
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
					src="https://www.youtube.com/embed/hq27x612hwI"
					frameborder="1"
					allow="accelerometer; autoplay; encrypted-media;"
					allowfullscreen="true"
					title="Extraction"
				></iframe>
				<iframe
					data-aos="fade-left"
					src="https://www.youtube.com/embed/iHUVKQV8mPc"
					frameborder="1"
					allow="accelerometer; autoplay; encrypted-media;"
					allowfullscreen="true"
					title="Faded"
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
