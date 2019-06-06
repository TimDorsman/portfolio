import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './button.scss';


export default class Button extends Component {
	render() {
		return (
			<Link to={`${this.props.link}`}>
				<div className={`button${this.props.className ? ' ' + this.props.className : ''}`}>
					<span className={`buttonText${this.props.className ? ' ' + this.props.className : ''}`}>{this.props.children}</span>
				</div>
			</Link>
		)
	}
}