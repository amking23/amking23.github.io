import React from 'react';
import '../App.css';
import Navbar from './Navbar';
import About from './About';
import Resume from './Resume';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<Navbar />
				<About />
				<Resume />
			</header>
		</div >
	);
}

export default App;
