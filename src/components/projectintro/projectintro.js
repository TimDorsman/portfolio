import React from 'react';
import './projectintro.scss';

function ProjectIntro (props) {
	const { client, title, startDate, skills, description, images } = props.data;
	return <div className="projectInformation">
			<div className="projectIcons">
				<div className="projectIconBackground">
					<img src={require('../../images/link.svg')} className="projectIcon" alt=""/>
				</div>
				<div className="projectIconBackground">
					<img src={require('../../images/github.png')} className="projectIcon" alt=""/>
				</div>
			</div>
			<div className="InformationWrapper">
				<div className="InformationBox">
					<h4 className="InformationTitle">Client</h4>
					<p className="InformationDesc">{client}</p>
				</div>
				<div className="InformationBox">
					<h4 className="InformationTitle">Date</h4>
					<p className="InformationDesc">{startDate}</p>
				</div>
				
				<div className="InformationBox">
					<h4 className="InformationTitle">Skills used</h4>
					<p className="InformationDesc">{skills}</p>
				</div>
			</div>
			<h2 className="Title">{title}</h2>
			<p className="Description">{description}</p>
		</div>
	}

export default ProjectIntro;
