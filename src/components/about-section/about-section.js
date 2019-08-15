import React, { Component } from 'react';
import Social from '../../components/social/social';
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { aboutData } from '../../mockData';

export default class AboutSection extends Component {

	render() {
		return (
			<div className="about-section">
				<h1 className="about-section__title">{aboutData.title}</h1>
				<p className="about-section__description">{aboutData.description}</p>
				<div className="about-section__social">
					<Social faIcon={faGithubAlt} link='https://www.github.com/TimDorsman'/>
					<Social faIcon={faLinkedinIn} link='https://www.linkedin.com/in/tim-dorsman/'/>
				</div>
			</div>
		)
	}
}