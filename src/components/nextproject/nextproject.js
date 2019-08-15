import React, { Component } from 'react';
import Button from '../button/button';

class NextProject extends Component {
	render() {
		return (
			<a href={`./${parseInt(this.props.nextNumber) + 1}`} onClick={window.scroll(0,0)}>
				<div className='nextProject'>
					<Button className='NextProject'>NEXT</Button>
					<div className='next'>
						<div className='nextBackground' style={this.props.style}>
							<h3 className='nextTitle'>{this.props.nextTitle}</h3>
						</div>
					</div>
				</div>
			</a>
		);
	}
}

export default NextProject;