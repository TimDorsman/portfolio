import React from 'react';
import './social.scss';

export default function Social(props) {
	return (
		<a href={props.link} className='social'>
			<img src={props.image} className='socialIcon' alt='social media' />
		</a>
	)
}