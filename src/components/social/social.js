import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './social.scss';

export default function Social(props) {
	return (
		<a href={props.link} className='social'>
			<FontAwesomeIcon icon={props.faIcon}/>
		</a>
	)
}