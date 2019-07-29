import React from 'react';
import './projectintro.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import Social from '../../components/social/social';

library.add(Icons.faLink)

function ProjectIntro (props) {
	const { client, title, startDate, skills, description } = props.data;
	return <div className="projectInformation">
			<div className="projectIcons">
					<Social faIcon={faGithubAlt} link='www.github.com/TimDorsman' />
					<Social faIcon={Icons.faLink} />
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
