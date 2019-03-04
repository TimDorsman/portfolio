import React, { Component } from 'react';
import './header.scss';

export default class Header extends Component {
	render() {
		return (
			<ul className='header'>
				<li className='headerItem'><a href="/">HOME</a></li>
				<li className='headerItem'><a href="/about">ABOUT</a></li>
				<li className='headerItem'><a href="/portfolio">PORTFOLIO</a></li>
			</ul>
		)
	}
}