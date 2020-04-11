import React, { useState } from 'react';
import TrackVisibility from 'react-on-screen';
import MediaQuery from 'react-responsive';
import YouTubePlayer from 'react-player/lib/players/YouTube';
import './css/videos.css';

function Videos() {
	const [shouldPlay, updatePlayState] = useState(false);
	const Player = props => {
		updatePlayState(props.isVisible);
		return (
			<div>
				<MediaQuery minDeviceWidth={601}>
					<YouTubePlayer
						url="https://youtu.be/EWaNLBq-VgM?showinfo=0&enablejsapi=1&origin=https://www.magicianmayank.com"
						width="100%"
						height="100vh"
						playing={shouldPlay}
						loop={true}
						controls={false}
						muted={true}
					/>
				</MediaQuery>
				<MediaQuery maxDeviceWidth={600}>
					<YouTubePlayer
						url="https://youtu.be/EWaNLBq-VgM?showinfo=0&enablejsapi=1&origin=https://www.magicianmayank.com"
						width="100%"
						height="30vh"
						playing={shouldPlay}
						loop={true}
						controls={false}
						muted={true}
					/>
				</MediaQuery>
			</div>
		);
	};
	return (
		<div
			className="videos-container"
			id="videos"
			itemscope
			itemtype="http://schema.org/VideoObject"
		>
			<h1
				className="videos-heading"
				data-aos="fade-up"
				data-aos-delay="70"
				data-aos-duration="1200"
			>
				VIDEOS
			</h1>
			<TrackVisibility className="trackVisibility" partialVisibility>
				{Player}
			</TrackVisibility>
			<br />
			<br />
			<br />
			<br />
			<br />
			<div className="main-subvideos">
				<iframe
					data-aos="fade-right"
					src="https://www.youtube.com/embed/fGaM4ym38q8?showinfo=0&enablejsapi=1&origin=https://www.magicianmayank.com"
					frameBorder="1"
					allow="accelerometer; autoplay; encrypted-media;"
					allowFullScreen={true}
					title="Stage & Roaming interactive Illusions Performed at IndoRussian Friendship Celebration 2020"
					itemprop="thumbnail"
				></iframe>
				<iframe
					data-aos="fade-left"
					width="560"
					height="315"
					src="https://www.youtube.com/embed/9jCPorZO5mA?showinfo=0&enablejsapi=1&origin=https://www.magicianmayank.com"
					frameBorder="1"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen={true}
					title="Teaser"
					itemprop="thumbnail"
				></iframe>
			</div>
			<br />
			<br />
			<br />
			<h1
				className="subvideos-heading"
				data-aos="fade-up"
				data-aos-delay="70"
				data-aos-duration="1200"
				itemprop="thumbnail"
			>
				GLOBALLY PUBLISHED MAGIC TRICKS
			</h1>
			<div className="main-subvideos">
				<iframe
					data-aos="fade-right"
					src="https://www.youtube.com/embed/hq27x612hwI?showinfo=0&enablejsapi=1&origin=https://www.magicianmayank.com"
					frameBorder="1"
					allow="accelerometer; autoplay; encrypted-media;"
					allowFullScreen={true}
					title="Extraction"
					itemprop="thumbnail"
				></iframe>
				<iframe
					data-aos="fade-left"
					src="https://www.youtube.com/embed/iHUVKQV8mPc?showinfo=0&enablejsapi=1&origin=https://www.magicianmayank.com"
					frameBorder="1"
					allow="accelerometer; autoplay; encrypted-media;"
					allowFullScreen={true}
					title="Faded"
					itemprop="thumbnail"
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
