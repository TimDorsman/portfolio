import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/button';
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

	f() {
	}

	componentDidUpdate() {
		const body = document.querySelector('.body');
		const footer = document.querySelector('.footer');
	
		this.state.navOpen ? body.classList.add('no-scroll-y') : body.classList.remove('no-scroll-y');

		if(footer)
		this.state.navOpen ? footer.classList.add('footerNav') : footer.classList.remove('footerNav');

		window.scroll(0,0);
	}

	render() {

		return (
			<div className='header'>
				<span className='headerName'>{this.props.name}</span>
				<ul className={`headerList${this.state.navOpen ? ' open': ''}`}>
					<li className='headerItem'><Button method={this.state.navOpen ? this.toggleNav : null} link='/'>Home</Button></li>
					<li className='headerItem'><Button method={this.state.navOpen ? this.toggleNav : null} link='/about'>about</Button></li>
					<li className='headerItem'><Button method={this.state.navOpen ? this.toggleNav : null} link='/project/0'>Projects</Button></li>
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