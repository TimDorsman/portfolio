import React, { Component } from 'react';
import Skills from '../../components/skills/skills'
import './card.scss';

export default class Card extends Component {

	render() {
		return (
			<div className='cardProject'>
				<h1 className='cardIndex'>{this.props.index < 10 ? '0' : ''}{this.props.index}</h1>
				<div className='card'>
					<div className='cardBackground' style={this.props.style}>
						<h3 className='cardTitle'>{this.props.title}</h3>
					</div>
				</div>
				<Skills title='my skills' classes='_projects'>{this.props.skills}</Skills>
			</div>
		)
	}
}