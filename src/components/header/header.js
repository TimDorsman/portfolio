import React, { Component } from 'react';
import './header.scss';

export default class Header extends Component {
	constructor () {
		super();
		this.state = {
			navOpen: false
		}
		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav () {
		this.setState((state) => {
			return { navOpen: !state.navOpen }
		})
	}

	render() {
		console.log(this.props);
		return (
			<div className='header'>
				<span className='headerName'>Tim</span>
				<ul className={`headerList${this.state.navOpen ? ' open': ''}`}>
					<li className='headerItem'><a href="/">home</a></li>
					<li className='headerItem'><a href="/about">about</a></li>
					<li className='headerItem'><a href="/project/1">Project</a></li>
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