import React from 'react';
import './App.css';

import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import Quote from './components/quote/quote';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
			<About />
			<br /><br /><br /><br /><br /><br /><br /><br />
			<Quote text={'" Magic is believing in yourself, if you can do that, you can make anything happen. "'} />
			<br /><br /><br /><br /><br /><br /><br /><br />
		</div>
	);
}

export default App;
