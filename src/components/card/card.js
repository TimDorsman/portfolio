import React, { Component } from 'react';
import Skills from '../../components/skills/skills'
import './card.scss';

export default class Card extends Component {
	render() {
		return (
			<div className='card'>
				<h1 className='cardIndex'>{this.props.index}</h1>
				<div className='cardBackground'>
					<h3 className='cardTitle'>{this.props.title}</h3>
					<Skills title='my skills'>React, Javascript, PHP, HTML, CSS, Sass, C#, Angular, Gulp, Grunt</Skills>
				</div>
			</div>
		)
	}
}