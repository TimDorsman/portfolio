import React, { Component } from 'react';
import './footer.scss';

export default class Footer extends Component {
	render() {
		return (
			<div className='footer'>
				<a href='www.linked.com/tdorsman'>
					<div className='footerItem'>
						<i className='faGitHub' />
					</div>
				</a>
				<a href='www.linked.com/tdorsman'>
					<div className='footerItem'>
						<i className='faLinkedIn' />
					</div>
				</a>
			</div>
		)
	}
}