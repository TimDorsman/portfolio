import React from 'react';
import ProjectIntro from './components/projectintro/projectintro';
import Button from './components/button/button';
import NextProject from './components/nextproject/nextproject';
import { Projects } from './mockData';

export default (props) => {
	const { projectId } = props.match.params;
	const image = Projects[projectId].image;
	const nextImage = Projects[parseInt(projectId) + 1].image;

	if(Projects[projectId] === undefined) {
		window.location.href = '/error';
	}
	return (
		<>
			<div className='projectBackground' style={{backgroundImage: `linear-gradient(rgba(69, 216, 255, .6), rgba(1, 218, 188, .6)), url('${require(`./images/${image}`)}')` }}>
				<Button className='roundButton' link='/'>X</Button>
				<h2 className='projectTitle'>{Projects[projectId].title}</h2>
				<div className="projectIcons">
					<div className="projectIconBackground">
						<img src={require('./images/link.svg')} className="projectIcon" alt=""/>
					</div>
					<div className="projectIconBackground">
						<img src={require('./images/github.png')} className="projectIcon" alt=""/>
					</div>
				</div>
				<ProjectIntro data={Projects[projectId]}/>
				{Projects[parseInt(projectId) + 1] !== undefined && <NextProject nextNumber={projectId} nextTitle={Projects[parseInt(projectId) + 1].title } style={{backgroundImage: `linear-gradient(rgba(69, 216, 255, .6), rgba(1, 218, 188, .6)), url('${require(`./images/${nextImage}`)}')` }} />}
			</div>
		</>
	)
}