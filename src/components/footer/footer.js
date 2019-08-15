import React, { Component } from 'react';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Social from '../../components/social/social';

export default class Footer extends Component {
	render() {
		return (
			<div className={`footer${this.props.className ? ` footer${this.props.className}` : ''}`}>
				<Social faIcon={faGithubAlt} link='https://www.github.com/timdorsman' />							
				<Social faIcon={faLinkedinIn} link='https://www.linkedin.com/in/tim-dorsman/' />							
			</div>
		)
	}
}