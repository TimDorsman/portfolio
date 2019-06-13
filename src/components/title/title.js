import React, { Component } from 'react';
import Button from '../../components/button/button'
import './title.scss';
export default class Title extends Component {

	render() {
		return (
			<div className={`titleWrapper ${this.props.className}`}>
				<h1 className='title'>{this.props.children}</h1>
				<p className='titleText'>{this.props.job}</p>
				<Button className='buttonHome' link='/about'>{this.props.btntext}</Button>
				{this.props.buttontext}
			</div>
		)
	}
}