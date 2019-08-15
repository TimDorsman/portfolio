import React, { Component } from 'react';
import AboutSection from './components/about-section/about-section'
import Skills from './components/skills/skills';
import Title from './components/title/title';
import Tim from './images/TimDorsman.jpg';
import Background from './components/background/background';
import Footer from './components/footer/footer';

class About extends Component {
	render() {
		return (
			<>
				<div className="about">
				<Background className='About'/>
					<div className="aboutSection">
						<img src={Tim} alt='Tim' className='aboutImage'/>
						<Title link='/' job='FRONT END DEVELOPER' btntext='X' className='titleWrapperAbout'>Tim</Title>
						<div className='aboutMe'>
							<AboutSection />
							<Skills classes='_about' title='my skills'>React, Javascript, PHP, HTML, CSS, Sass, C#, Angular, Gulp, Grunt, React, Javascript, PHP, HTML,CSS, Sass, C#, Angular, Gulp, Grunt</Skills>
						</div>
					</div>
					<Footer className='About'/>
				</div>
			</>
		);
	}
}

export default About;
