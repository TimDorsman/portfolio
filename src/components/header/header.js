import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

export default class Header extends Component {
	constructor (props) {
		super(props);
		this.state = {
			navOpen: false
		}
		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav () {
		this.setState((state) => {
			return { navOpen: !state.navOpen }
		})

		console.log('work!')
	}
	componentDidUpdate() {
		const body = document.querySelector('.body');
	
		this.state.navOpen ? body.classList.add('no-scroll-y') : body.classList.remove('no-scroll-y');
		window.scroll(0,0);
	}

	render() {

		return (
			<div className='header'>
				<span className='headerName'>{this.props.name}</span>
				<ul className={`headerList${this.state.navOpen ? ' open': ''}`}>
					<li className='headerItem'><Link to="/" onClick={this.toggleNav}>Home</Link></li>
					<li className='headerItem'><Link to="/project/0" onClick={this.toggleNav}>Project</Link></li>
					<li className='headerItem'><Link to="/about" onClick={this.toggleNav}>About</Link></li>
				</ul>
				<div className='headerToggleContainer' onClick={this.toggleNav}>
					<div className={`headerToggle ${this.state.navOpen ? 'open' : ''}`}>
						<div className={`headerLine headerLineTop ${this.state.navOpen ? 'open' : ''}`}/>
						<div className={`headerLine headerLineMiddle ${this.state.navOpen ? 'open' : ''}`}/>
						<div className={`headerLine headerLineBottom ${this.state.navOpen ? 'open' : ''}`} />
					</div>
				</div>
			</div>
		)
	}
}