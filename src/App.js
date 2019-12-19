import React from 'react';
import './App.css';

import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import Quote from './components/quote/quote';
import Videos from './components/videos/videos';
import Gallery from './components/gallery/gallery';
import Footer from './components/footer/footer';
import Background1 from './components/quote/images/background1.png';
import Background2 from './components/quote/images/background2.png';
import Background3 from './components/quote/images/background3.jpg';
import Background4 from './components/quote/images/background4.png';
import Background5 from './components/quote/images/background5.png';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
			<About />
			<Quote text={'" Magic is believing in yourself, if you can do that, you can make anything happen. "'} img={Background1}/>
			<Videos />
			<Quote text={'" Illusion is all about creating a moment of wonder & Astonishment. "'} img={Background2}/>
			<Gallery />
			<Quote text={'" Those  who  do  not  believe  in  Magic  will  never  find  it. "'} img={Background3}/>

			<Quote text={'" Magic becomes Art when it has nothing to hide. "'} img={Background4}/>

			<Quote text={'" The #1 Sleight of Hand Artist in the World. "'} img={Background5}/>
			
			
			<Footer />
		</div>
	);
}

export default App;
