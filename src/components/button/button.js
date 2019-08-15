import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Button extends Component {
	render() {
		return (
			this.props.link ? 
			<Link to={`${this.props.link}`} className={`buttonLink${this.props.className ? ' ' + this.props.className : ''}`} onClick={this.props.method ? this.props.method : null}>
				<div className={`button`}>
					<span className={`buttonText${this.props.className ? ' ' + this.props.className : ''}`}>{this.props.children}</span>
				</div>
			</Link>
			:
			<div className={`button buttonLink${this.props.className ? ' ' + this.props.className : ''}`}>
				<span className={`buttonText${this.props.className ? ' ' + this.props.className : ''}`}>{this.props.children}</span>
			</div>
		)
	}
}