import React, { Component } from 'react';
import Button from '../../components/button/button'
import './title.scss';
export default class Title extends Component {
	render() {
		return (
			<div className='titleWrapper'>
				<h1 className='title'>{this.props.children}</h1>
				<p className='titleText'>{this.props.job}</p>
				<Button className='btn' link='/about'>About</Button>
			</div>
		)
	}
}