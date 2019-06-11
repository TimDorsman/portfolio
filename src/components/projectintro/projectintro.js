import React from 'react';
import './projectintro.scss';

function ProjectIntro (props) {
	const { client, title, startDate, skills, description, images } = props.data;
	console.log(images);
	return <div className="projectInformation">
			<h4 className="InformationTitle">Client</h4>
			<p className="InformationDesc">{client}</p>

			<h4 className="InformationTitle">Date</h4>
			<p className="InformationDesc">{startDate}</p>

			<h4 className="InformationTitle">Skills used</h4>
			<p className="InformationDesc">{skills}</p>
			
			<h2 className="Title">{title}</h2>
			<p className="Description">{description}</p>
		</div>
	}

export default ProjectIntro;
