import React, { Component } from 'react';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Social from '../../components/social/social';

import './footer.scss';

export default class Footer extends Component {
	render() {
		return (
			<div className='footer'>
					<Social faIcon={faGithubAlt} link='www.linked.com/tdorsman' />							
					<Social faIcon={faLinkedinIn} link='www.linked.com/tdorsman' />							
			</div>
		)
	}
}