import React, { useState } from 'react';
import './css/gallery.css';
import SubGallery from './subgallery';
import { Slide } from 'react-slideshow-image';
import MediaQuery from 'react-responsive';

import leftPic from './images/main/4.jpg';
import rightPic1 from './images/main/6.jpg';
import rightPic2 from './images/main/11.jpg';
import p1 from './images/1.jpg';
import p2 from './images/2.jpg';
import p3 from './images/3.jpg';
import p5 from './images/5.jpg';
import p6 from './images/6.jpg';
import p7 from './images/7.jpg';
import p8 from './images/8.jpg';
import p9 from './images/9.jpg';
import p10 from './images/10.jpg';
import p11 from './images/11.jpg';
import p12 from './images/12.jpg';
import p13 from './images/13.jpg';
import p14 from './images/14.jpg';
import p16 from './images/16.jpg';
import p17 from './images/17.jpg';
import p18 from './images/18.jpg';
import p19 from './images/19.jpg';
import p20 from './images/20.jpg';
import p21 from './images/21.jpg';
import p22 from './images/22.jpg';

const properties = {
	duration: 15000,
	transitionDuration: 500,
	infinite: false,
	arrows: true,
};

function Gallery() {
	const handleViewBtn = () => {
		setCount(count + 1);
		if (count % 2 === 0) {
			setHide('LESS');
			setShowSub('');
		} else {
			setHide('MORE');
			setShowSub('none');
		}
	};
	const [count, setCount] = useState(0);
	const [hide, setHide] = useState('MORE');
	const [showSub, setShowSub] = useState('none');
	return (
		<div
			className="gallery-container"
			id="gallery"
			itemscope
			itemtype="http://schema.org/ImageGallery"
		>
			<h1
				className="gallery-heading"
				data-aos="fade-up"
				data-aos-delay="50"
				data-aos-duration="1200"
			>
				GALLERY
			</h1>
			<MediaQuery minDeviceWidth={601}>
				<div className="gallery-main-section">
					<div className="gallery-left-images" data-aos="fade-right">
						<img src={leftPic} alt="Best Magician in Delhi" itemprop="photo" />
					</div>
					<div className="gallery-right-images">
						<div className="gallery-right-image-1" data-aos="fade-left">
							<img
								src={rightPic1}
								alt="Best Magician in Delhi"
								itemprop="photo"
							/>
						</div>
						<div className="gallery-right-image-2" data-aos="fade-up">
							<img
								src={rightPic2}
								alt="Best Magician in Delhi"
								itemprop="photo"
							/>
						</div>
					</div>
				</div>
				<button className="gallery-view-btn" onClick={handleViewBtn}>
					SHOW {hide}
				</button>
				<div className="gallery-subsection" style={{ display: `${showSub}` }}>
					<SubGallery image={p1} title={'NSUT'} />
					<SubGallery image={p2} title={'THEATRE'} />
					<SubGallery image={p3} title={'IITF 2019'} />
					<SubGallery image={p5} title={'MAYA MAYA'} />
					<SubGallery image={p6} title={'CORPORATE'} />
					<SubGallery image={p7} title={'THEATRE'} />
					<SubGallery image={p8} title={'SHAHNAZ HUSSAIN'} />
					<SubGallery image={p9} title={'THEATRE'} />
					<SubGallery image={p10} title={'DTU'} />
					<SubGallery image={p11} title={'CORPORATE'} />
					<SubGallery image={p12} title={'CLOSE UP'} />
					<SubGallery image={p13} title={'CORPORATE'} />
					<SubGallery image={p14} title={'AWARD'} />
					<SubGallery image={p16} title={'THEATRE'} />
					<SubGallery image={p17} title={'DUBAI'} />
					<SubGallery image={p18} title={'CORPORATE'} />
					<SubGallery image={p19} title={'CCI'} />
					<SubGallery image={p20} title={'CCI'} />
					<SubGallery image={p21} title={'CCI'} />
					<SubGallery image={p22} title={'INDO RUSSIAN'} />
				</div>
			</MediaQuery>
			<MediaQuery maxDeviceWidth={600}>
				<Slide {...properties} className="gallery-slide-container">
					<div className="each-slide">
						<img
							src={leftPic}
							alt="Best Magician in Delhi"
							height="500px"
							width="100%"
							itemprop="photo"
						/>
					</div>
					<div className="each-slide">
						<img
							src={rightPic1}
							alt="Best Magician in Delhi"
							height="300px"
							width="100%"
							itemprop="photo"
						/>
					</div>
					<div className="each-slide">
						<img
							src={rightPic2}
							alt="Best Magician in Delhi"
							height="300px"
							width="100%"
							itemprop="photo"
						/>
					</div>
					<div className="each-slide">
						<img
							src={p1}
							alt="Best Magician in Delhi"
							height="300px"
							width="100%"
							itemprop="photo"
						/>
					</div>
					<div className="each-slide">
						<img
							src={p2}
							alt="Best Magician in Delhi"
							height="300px"
							width="100%"
							itemprop="photo"
						/>
					</div>
					<div className="each-slide">
						<img
							src={p3}
							alt="Best Magician in Delhi"
							height="300px"
							width="100%"
							itemprop="photo"
						/>
					</div>
					<div className="each-slide">
						<img
							src={p5}
							alt="Best Magician in Delhi"
							height="300px"
							width="100%"
							itemprop="photo"
						/>
					</div>
					<div className="each-slide">
						<img
							src={p6}
							alt="Best Magician in Delhi"
							height="300px"
							width="100%"
							itemprop="photo"
						/>
					</div>
					<div className="each-slide">
						<img
							src={p7}
							alt="Best Magician in Delhi"
							height="300px"
							width="100%"
							itemprop="photo"
						/>
					</div>
					<div className="each-slide">
						<img
							src={p8}
							alt="Best Magician in Delhi"
							height="500px"
							width="100%"
							itemprop="photo"
						/>
					</div>
					<div className="each-slide">
						<img
							src={p9}
							alt="Best Magician in Delhi"
							height="300px"
							width="100%"
							itemprop="photo"
						/>
					</div>
					<div className="each-slide">
						<img
							src={p10}
							alt="Best Magician in Delhi"
							height="300px"
							width="100%"
							itemprop="photo"
						/>
					</div>
					<div className="each-slide">
						<img
							src={p11}
							alt="Best Magician in Delhi"
							height="300px"
							width="100%"
							itemprop="photo"
						/>
					</div>
					<div className="each-slide">
						<img
							src={p12}
							alt="Best Magician in Delhi"
							height="300px"
							width="100%"
							itemprop="photo"
						/>
					</div>
					<div className="each-slide">
						<img
							src={p13}
							alt="Best Magician in Delhi"
							height="300px"
							width="100%"
							itemprop="photo"
						/>
					</div>
					<div className="each-slide">
						<img
							src={p14}
							alt="Best Magician in Delhi"
							height="500px"
							width="100%"
							itemprop="photo"
						/>
					</div>
					<div className="each-slide">
						<img
							src={p16}
							alt="Best Magician in Delhi"
							height="300px"
							width="100%"
							itemprop="photo"
						/>
					</div>
					<div className="each-slide">
						<img
							src={p17}
							alt="Best Magician in Delhi"
							height="500px"
							width="100%"
							itemprop="photo"
						/>
					</div>
					<div className="each-slide">
						<img
							src={p18}
							alt="Best Magician in Delhi"
							height="300px"
							width="100%"
							itemprop="photo"
						/>
					</div>
					<div className="each-slide">
						<img
							src={p19}
							alt="Best Magician in Delhi"
							height="300px"
							width="100%"
							itemprop="photo"
						/>
					</div>
					<div className="each-slide">
						<img
							src={p20}
							alt="Best Magician in Delhi"
							height="300px"
							width="100%"
							itemprop="photo"
						/>
					</div>
					<div className="each-slide">
						<img
							src={p21}
							alt="Best Magician in Delhi"
							height="300px"
							width="100%"
							itemprop="photo"
						/>
					</div>
					<div className="each-slide">
						<img
							src={p22}
							alt="Best Magician in Delhi"
							height="300px"
							width="100%"
							itemprop="photo"
						/>
					</div>
				</Slide>
				<br></br>
				<br></br>
			</MediaQuery>
		</div>
	);
}

export default Gallery;
