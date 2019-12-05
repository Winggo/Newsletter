import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header.js';
import { Parallax } from 'react-spring/renderprops-addons';
import { Route } from 'react-router-dom'; 

import IntroPage from './components/IntroPage'; 
import MissionStatement from './components/MissionStatement';
// import SpiritualClimate from './components/SpiritualClimate';
import ThankYouPage from './components/ThankYouPage';

function App() {
  	return (
        <div className="App">  			
			<Parallax pages={5.9}>
				{/* <Route path='/' component={() => <IntroPage />} /> */}
				<Route path='/' component={() => <MissionStatement />} /> 
				{/* <SpiritualClimate /> */}
				{/* <ThankYouPage /> */}
            </Parallax>
        	<Header />
        </div>
  );
}

export default App;
