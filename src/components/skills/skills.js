import React, { Component } from 'react';

export default class Card extends Component {
	render() {
		return (
			<div className={`cardSkills ${this.props.classes ? this.props.classes: ''}`}>
				<p className='cardSkillsHeader'>{this.props.title}</p>
				<p className='cardSkillsText'>{this.props.children}</p>
			</div>
		)
	}
}