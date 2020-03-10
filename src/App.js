import React from 'react';
import './App.css';

import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import Quote from './components/quote/quote';
import Videos from './components/videos/videos';
import Gallery from './components/gallery/gallery';
import Footer from './components/footer/footer';
import Social from './components/social/social';
import Book from './components/book/book';
import Contact from './components/contact/contact';
import Testimonials from './components/testimonials/testimonials';

import Background1 from './components/quote/images/background1.jpg';
import Background2 from './components/quote/images/background2.jpg';
import Background3 from './components/quote/images/background3.jpg';
import Background4 from './components/quote/images/background4.jpg';
import Background5 from './components/quote/images/background5.jpg';

function App() {
	return (
		<div className="App" itemscope itemtype="http://schema.org/Person">
			<Navbar />
			<Home />
			<About />
			<Quote
				text={
					'" Magic Lies in your Imagination, My job is to bring that imagination into life. " '
				}
				author={'~ Magician Mayank Shekhar'}
				img={Background1}
			/>
			<Videos />
			<Quote
				text={
					'" Those  who  do  not  believe  in  Magic  will  never  find  it. "'
				}
				img={Background2}
			/>
			<Gallery />
			<Quote
				text={
					'" Illusion is all about creating a moment of wonder & Astonishment. "'
				}
				img={Background3}
			/>
			<br></br>
			<br></br>
			<Testimonials />
			<br></br>
			<br></br>
			<Quote
				text={'" Magic becomes Art when it has nothing to hide. "'}
				img={Background4}
			/>
			<br></br>
			<br></br>
			<Contact />
			<br></br>
			<br></br>
			<Quote
				text={
					'" Magic is believing in yourself, if you can do that, you can make anything happen. "'
				}
				img={Background5}
			/>
			<br></br>
			<br></br>
			<br></br>
			<Book />
			<Social />
			<Footer />
		</div>
	);
}

export default App;
