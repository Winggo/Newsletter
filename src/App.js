import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header.js';
import { Parallax } from 'react-spring/renderprops-addons';
import { Route } from 'react-router-dom'; 

import MissionStatement from './components/MissionStatement';

class App extends Component {
	render() {
		return (
			<div className="App">  			
				<Parallax pages={5.9} ref={ref => (this.parallax = ref)}>
					<Route path='/' component={() => <MissionStatement />} /> 					
				</Parallax>
				<div onClick={() => console.log(this.parallax.scrollTo(0))}>
					<Header />
				</div>
				
			</div>
		);
	}
}

export default App;
