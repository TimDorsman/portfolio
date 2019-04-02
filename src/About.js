import React, { Component } from 'react';
import AboutSection from './components/about-section/about-section'
import Skills from './components/skills/skills';
import Title from './components/title/title';
import Tim from './images/TimDorsman.jpg';
import './sass/main.scss';

class About extends Component {
	render() {
		return (
			<div className="about">
				<div className="aboutSection">
					<AboutSection />
					<Skills classes='_about' title='my skills'>React, Javascript, PHP, HTML, CSS, Sass, C#, Angular, Gulp, Grunt, React, Javascript, PHP, HTML,CSS, Sass, C#, Angular, Gulp, Grunt</Skills>
					<Title job='FRONT END DEVELOPER' btntext='X' className='titleWrapperAbout'>Tim</Title>
					<img src={Tim} alt='Tim' className='aboutImage'/>
				</div>
			</div>
		);
	}
}

export default About;
