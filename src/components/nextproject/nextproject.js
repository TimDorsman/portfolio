import React, { Component } from 'react';
import Button from '../button/button';
import './nextproject.scss';

class NextProject extends Component {
	render() {
		return (
			<div className='nextProject'>
			<Button link={`./${parseInt(this.props.nextNumber) + 1}`} className='NextProject' onClick={window.scroll(0,0)}>NEXT</Button>
			<div className='next'>
				<div className='nextBackground' style={this.props.style}>
					<h3 className='nextTitle'>{this.props.nextTitle}</h3>
				</div>
			</div>
		</div>
		);
	}
}

export default NextProject;