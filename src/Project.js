import React from 'react';
import ProjectIntro from './components/projectintro/projectintro';
import Button from './components/button/button';
import NextProject from './components/nextproject/nextproject';
import { Projects } from './mockData';

function copyUrl() {
	console.log('copy!');
}

export default (props) => {
	const { projectId } = props.match.params;
	let nextImage;
	let image;

	if(Projects[projectId] === undefined) {
		window.location.href = '/error';
	}

	if(Projects[parseInt(projectId) + 1] !== undefined) {
		nextImage = Projects[parseInt(projectId) + 1].image;
	}
	image = Projects[projectId].image;

	const body = document.querySelector('.body');
	body.classList.remove('no-scroll-y');

	return (
		<>
		<div className='project' style={{height: '100%'}}>
			<div className='projectBackground' style={{backgroundImage: `linear-gradient(rgba(69, 216, 255, .6), rgba(1, 218, 188, .6)), url('${require(`./images/${image}`)}')` }}>
				<Button className='roundButton' link='/'>X</Button>
				<h2 className='projectTitle'>{Projects[projectId].title}</h2>

			</div>
				<ProjectIntro data={Projects[projectId]}/>
				{Projects[projectId].images.map((picture, i) => {
					return <img src={require(`./images/${picture}`)} className={`InformationImage InformationImage${i % 2 === 0 ? 'Even' : 'Odd'}`} alt="pew" key={i}/>
				})}
				{Projects[parseInt(projectId) + 1] !== undefined && <div className='invisibleWall'><NextProject nextNumber={projectId} nextTitle={Projects[parseInt(projectId) + 1].title } style={{backgroundImage: `linear-gradient(rgba(69, 216, 255, .6), rgba(1, 218, 188, .6)), url('${require(`./images/${nextImage}`)}')` }} /></div>}
		</div>
		</>
	)
}