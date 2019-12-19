import React, { useState } from 'react';
import './css/navbar.css';

const inactiveStyle = {
	color: '	#303030'
};

function Navbar() {
	const [style1, setStyle1] = useState();
	const [style2, setStyle2] = useState();
	const [style3, setStyle3] = useState();
	const [style4, setStyle4] = useState();
	const [style5, setStyle5] = useState();
	const [style6, setStyle6] = useState();
	const [style7, setStyle7] = useState();
	return (
		<div className="navbar-container">
			<div className="nav-links-container">
				<a
					href="#"
					className="nav-links"
					style={style1}
					onMouseEnter={() => {
						setStyle2(inactiveStyle);
						setStyle3(inactiveStyle);
						setStyle4(inactiveStyle);
						setStyle5(inactiveStyle);
						setStyle6(inactiveStyle);
						setStyle7(inactiveStyle);
					}}
					onMouseLeave={() => {
						setStyle2();
						setStyle3();
						setStyle4();
						setStyle5();
						setStyle6();
						setStyle7();
					}}
				>
					HOME
				</a>
				<a
					href="#"
					className="nav-links"
					style={style2}
					onMouseEnter={() => {
						setStyle1(inactiveStyle);
						setStyle3(inactiveStyle);
						setStyle4(inactiveStyle);
						setStyle5(inactiveStyle);
						setStyle6(inactiveStyle);
						setStyle7(inactiveStyle);
					}}
					onMouseLeave={() => {
						setStyle1();
						setStyle3();
						setStyle4();
						setStyle5();
						setStyle6();
						setStyle7();
					}}
				>
					ABOUT
				</a>
				<a
					href="#"
					className="nav-links"
					style={style3}
					onMouseEnter={() => {
						setStyle1(inactiveStyle);
						setStyle2(inactiveStyle);
						setStyle4(inactiveStyle);
						setStyle5(inactiveStyle);
						setStyle6(inactiveStyle);
						setStyle7(inactiveStyle);
					}}
					onMouseLeave={() => {
						setStyle1();
						setStyle2();
						setStyle4();
						setStyle5();
						setStyle6();
						setStyle7();
					}}
				>
					VIDEOS
				</a>
				<a
					href="#"
					className="nav-links"
					style={style4}
					onMouseEnter={() => {
						setStyle1(inactiveStyle);
						setStyle2(inactiveStyle);
						setStyle3(inactiveStyle);
						setStyle5(inactiveStyle);
						setStyle6(inactiveStyle);
						setStyle7(inactiveStyle);
					}}
					onMouseLeave={() => {
						setStyle1();
						setStyle2();
						setStyle3();
						setStyle5();
						setStyle6();
						setStyle7();
					}}
				>
					GALLERY
				</a>
				<a
					href="#"
					className="nav-links"
					style={style5}
					onMouseEnter={() => {
						setStyle1(inactiveStyle);
						setStyle2(inactiveStyle);
						setStyle3(inactiveStyle);
						setStyle4(inactiveStyle);
						setStyle6(inactiveStyle);
						setStyle7(inactiveStyle);
					}}
					onMouseLeave={() => {
						setStyle1();
						setStyle2();
						setStyle3();
						setStyle4();
						setStyle6();
						setStyle7();
					}}
				>
					TESTIMONIALS
				</a>
				<a
					href="#"
					className="nav-links"
					style={style6}
					onMouseEnter={() => {
						setStyle1(inactiveStyle);
						setStyle2(inactiveStyle);
						setStyle3(inactiveStyle);
						setStyle4(inactiveStyle);
						setStyle5(inactiveStyle);
						setStyle7(inactiveStyle);
					}}
					onMouseLeave={() => {
						setStyle1();
						setStyle2();
						setStyle3();
						setStyle4();
						setStyle5();
						setStyle7();
					}}
				>
					CONTACT
				</a>
				<a
					href="#"
					className="nav-links"
					style={style7}
					onMouseEnter={() => {
						setStyle1(inactiveStyle);
						setStyle2(inactiveStyle);
						setStyle3(inactiveStyle);
						setStyle4(inactiveStyle);
						setStyle5(inactiveStyle);
						setStyle6(inactiveStyle);
					}}
					onMouseLeave={() => {
						setStyle1();
						setStyle2();
						setStyle3();
						setStyle4();
						setStyle5();
						setStyle6();
					}}
				>
					BOOK
				</a>
			</div>
		</div>
	);
}

export default Navbar;
