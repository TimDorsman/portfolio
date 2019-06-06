import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import RouteURL from './components/route/route'
import './sass/main.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';

//Library
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo, faShoppingCart, faTimes)

class App extends Component {

	componentDidMount() {
		console.log('Run!')
	}
	render() {
		let currentUrl = window.location.pathname;
		currentUrl = currentUrl.substr(0, currentUrl.lastIndexOf("/"))

		console.log(currentUrl);


		return (
			<Router>
				<div className="App">

					{currentUrl !== '/project' && <Header /> }
					<div className="content">
					<RouteURL />
					</div>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
