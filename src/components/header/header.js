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
	}
	componentDidUpdate() {
		const body = document.querySelector('.body');
		console.log(body);
	
		this.state.navOpen ? body.classList.add('no-scroll-y') : body.classList.remove('no-scroll-y');

		window.scroll(0,0);
	}

	render() {

		return (
			<div className='header'>
				<span className='headerName'>Tim</span>
				<ul className={`headerList${this.state.navOpen ? ' open': ''}`}>
					<li className='headerItem'><a href="/">home</a></li>
					<li className='headerItem'><a href="/about">about</a></li>
					<li className='headerItem'><Link to={"/project/1"}>Project</Link></li>
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