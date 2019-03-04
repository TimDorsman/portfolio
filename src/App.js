import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import RouteURL from './components/route/route'
import './sass/main.scss';
import Header from './components/header/header';


//Library
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo, faShoppingCart, faTimes)

class App extends Component {
	render() {
		console.log(FontAwesomeIcon)
		return (
		<Router>
			<div className="App">
				<Header />
				<div className="content">
				<RouteURL />
				</div>
			</div>
		</Router>
		);
	}
}

export default App;
