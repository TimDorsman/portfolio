import React from 'react';
import RouteURL from './components/route/route'
import { BrowserRouter } from 'react-router-dom';
import './sass/main.scss';
import {withRouter} from 'react-router';
import Header from './components/header/header';
import Footer from './components/footer/footer';

//Library
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo, faShoppingCart, faTimes);

function forHeader(path) {
	let h = path.replace(/^\/([^/]*).*$/, '$1');

	return h !== 'project';
}

function forFooter(path) {
	let h = path.replace(/^\/([^/]*).*$/, '$1');
	console.log(h);
	return h !== 'project' && h !== 'about';
}

const App = ({location}) => (
	<div className="App">
		{ forHeader(location.pathname) && <Header name={location.pathname.replace(/^\/([^\/]*).*$/, '$1') !== '' && 'Tim'} /> }
		<div className={`content ${!forFooter(location.pathname) ? 'no-footer' : ''}`}>
		<RouteURL />
		</div>
		{ forFooter(location.pathname) && <Footer /> }
	</div>
)

export default withRouter(App);
