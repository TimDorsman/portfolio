import React from 'react';
import RouteURL from './components/route/route'
import './sass/main.scss';
import {withRouter} from 'react-router';
import Header from './components/header/header';
import Footer from './components/footer/footer';

//Library
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo, faShoppingCart, faTimes);

const App = ({location}) => (
	<div className="App">
		{location.pathname.replace(/^\/([^\/]*).*$/, '$1') !== 'project' && <Header name={location.pathname.replace(/^\/([^\/]*).*$/, '$1') !== '' && 'Tim'} /> }
		<div className="content">
		<RouteURL />
		</div>
		{ location.pathname.replace(/^\/([^\/]*).*$/, '$1') !== 'project' && <Footer /> }
	</div>
)

export default withRouter(App);
