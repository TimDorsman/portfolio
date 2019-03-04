import React, { Component } from 'react';
import './button.scss';


export default class Button extends Component {
	render() {
		return (
			<a href={this.props.link}>
				<div className={`${this.props.class ? this.props.class + ' button' : 'button'}`}>
					<span className='buttonText'>{this.props.children}</span>
				</div>
			</a>
		)
	}
}