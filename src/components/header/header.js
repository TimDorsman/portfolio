import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	constructor (props) {
		super(props);
		this.state = {
			navOpen: false,
			showAbout: false
		}
		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav () {
		this.setState((state) => {
			return { navOpen: !state.navOpen }
		})
	}

	scrollToSlider = () => {
		const slider = document.querySelector('.sliderContainer');
		this.setState({navOpen: false}, () => slider.scrollIntoView({behavior: "smooth", block: "center"}))	
	}

	showAbout =() => {
		this.setState({showAbout: true, navOpen: false})
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
					<li className='headerItem'><Link to='/' onClick={this.state.navOpen ? this.toggleNav : null}>Home</Link></li>
					<li className='headerItem'><Link to='/about' onClick={this.state.navOpen ? this.toggleNav : null}>About</Link></li>	
					<li className='headerItem'><Link to='/project/0' onClick={this.state.navOpen ? this.toggleNav : null}>Projects</Link></li>					
					{/* <li className='headerItem' onClick={this.scrollToSlider}>Projects</li> */}
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