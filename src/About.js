import React, { Component } from 'react';
import AboutSection from './components/about-section/about-section'
import Skills from './components/skills/skills';
import Title from './components/title/title';
import Tim from './images/TimDorsman.jpg';
import './sass/main.scss';
import Background from './components/background/background';

class About extends Component {
	render() {
		return (
			<>
				<Background className='About'/>
				<div className="about">
					<div className="aboutSection">
						<img src={Tim} alt='Tim' className='aboutImage'/>
						<Title link='/' job='FRONT END DEVELOPER' btntext='X' className='titleWrapperAbout'>Tim</Title>
						<div className='aboutMe'>
							<AboutSection />
							<Skills classes='_about' title='my skills'>React, Javascript, PHP, HTML, CSS, Sass, C#, Angular, Gulp, Grunt, React, Javascript, PHP, HTML,CSS, Sass, C#, Angular, Gulp, Grunt</Skills>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default About;
