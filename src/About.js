import React, { Component } from 'react';
import AboutSection from './components/about-section/about-section'
import Skills from './components/skills/skills';
import './sass/main.scss';

class About extends Component {
	render() {
		return (
			<div className="about">
				<div className="about__section">
					<AboutSection />
					<Skills classes='_about' title='my skills'>React, Javascript, PHP, HTML, CSS, Sass, C#, Angular, Gulp, Grunt, React, Javascript, PHP, HTML,CSS, Sass, C#, Angular, Gulp, Grunt</Skills>
				</div>
			</div>
		);
	}
}

export default About;
