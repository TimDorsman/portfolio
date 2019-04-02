import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import RouteURL from './components/route/route'
import './sass/main.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer';
//Redux
import { connect } from 'react-redux';
import { removeUser, addUser } from './actions/user-actions';

//Library
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo, faShoppingCart, faTimes)

class App extends Component {
	constructor(props) {
		super(props);

		this.onAddUser = this.onAddUser.bind(this);
	}
	
	onAddUser(e) {
		this.props.onAddUser(e.target.value);
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					<div className="content">
					<RouteURL />
					</div>
					<Footer />
				</div>
			</Router>
		);
	}
}

const mapStateToProps = state => ({
	user: state.user,
	users: state.users
})

const mapActionsToProps = {
	onAddUser: addUser
};
export default connect(mapStateToProps, mapActionsToProps) (App);
