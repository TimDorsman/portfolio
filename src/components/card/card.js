import React from 'react';
import Skills from '../../components/skills/skills'
import './card.scss';


export default function Card(props) {
	return (
		<a href={`project/${props.index}`}>
			<div className='cardProject'>
				<h1 className='cardIndex'>{props.index < 10 ? 0 : ''}{props.index}</h1>
				<div className='card'>
					<div className='cardBackground' style={props.style}>
						<h3 className='cardTitle'>{props.title}</h3>
					</div>
				</div>
				<Skills title='my skills' classes='_projects'>{props.skills}</Skills>
			</div>
		</a>
	)
}
