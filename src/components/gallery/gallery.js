import React, { useState } from 'react';
import './css/gallery.css';
import SubGallery from './subgallery';

import leftPic from './images/main/1.jpg';
import rightPic1 from './images/main/2.png';
import rightPic2 from './images/main/3.png';
import p1 from './images/1.jpg';
import p2 from './images/2.jpg';
import p3 from './images/3.jpg';
import p4 from './images/4.jpg';
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
import p15 from './images/15.jpg';
import p16 from './images/16.jpg';
import p17 from './images/17.jpg';
import p18 from './images/18.jpg';

function Gallery() {
	const handleViewBtn = () => {
		setCount(count + 1);
		if (count % 2 == 0) {
			setAngle('90deg');
			setShowSub('');
		} else {
			setAngle('0deg');
			setShowSub('none');
		}
	};
	const [count, setCount] = useState(0);
	const [angle, setAngle] = useState('0deg');
	const [showSub, setShowSub] = useState('none');
	return (
		<div className="gallery-container" id="gallery">
			<p
				className="gallery-heading"
				data-aos="fade-up"
				data-aos-delay="50"
				data-aos-duration="1200"
			>
				GALLERY
			</p>
			<div className="gallery-main-section">
				<div className="gallery-left-images" data-aos="fade-right">
					<img src={leftPic} />
				</div>
				<div className="gallery-right-images">
					<img
						src={rightPic1}
						data-aos="fade-left"
					/>
					<img src={rightPic2} data-aos="fade-up" />
				</div>
			</div>
			<button
				className="gallery-view-btn"
				onClick={handleViewBtn}
			>
				VIEW MORE &nbsp;{' '}
				<i
					class="fas fa-chevron-right"
					style={{ transform: `rotate(${angle})` }}
				></i>
			</button>
			<div className="gallery-subsection" style={{display:`${showSub}`}} >
				<SubGallery image={p1} title={'NSUT'}  />
				<SubGallery image={p2} title={'THEATRE'} />
				<SubGallery image={p3} title={'IITF 2019'} />
				<SubGallery image={p4} title={'IIT-D'} />
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
				<SubGallery image={p15} title={'ARSD'} />
				<SubGallery image={p16} title={'THEATRE'} />
				<SubGallery image={p17} title={'DUBAI'} />
				<SubGallery image={p18} title={'CORPORATE'} />
			</div>
		</div>
	);
}

export default Gallery;
