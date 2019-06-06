import React from 'react';
import './slidernavigation.scss';



export default function SliderNavigation (props) {

	function selectOption (e) {
		const activeOptions = document.querySelectorAll('.sliderNavigationButtonActive');
		activeOptions.forEach(el => el.classList.remove('sliderNavigationButtonActive'))
		e.currentTarget.classList.add('sliderNavigationButtonActive');
	}

	return (
		<li className='sliderNavigationItem'>
		<div className='sliderNavigationMax' onClick={props.selectCard}>
			<div 
				className={`sliderNavigationButton ${props.index === 1 ? 'sliderNavigationButtonActive' : ''}`} 
				onClick={selectOption}
			/>
		</div>
		<span>{props.index < 10 ? `0${props.index}` : props.index}</span>
		</li>
	)
}
