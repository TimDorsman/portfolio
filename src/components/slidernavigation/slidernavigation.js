import React from 'react';
import './slidernavigation.scss';

export default function SliderNavigation (props) {

	function selectOption (e) {
		const target = e.currentTarget.querySelector('.sliderNavigationButton');
		props.selectCard();
		const activeOptions = document.querySelectorAll('.sliderNavigationButtonActive');
		activeOptions.forEach(el => el.classList.remove('sliderNavigationButtonActive'))
		target.classList.add('sliderNavigationButtonActive');
	}

	return (
		<li className='sliderNavigationItem' onClick={selectOption}>
			<div className='sliderNavigationMax'>
				<div 
					className={`sliderNavigationButton ${props.index === 1 ? 'sliderNavigationButtonActive' : ''}`} 
				/>
			</div>
			<span>{props.index < 10 ? `0${props.index}` : props.index}</span>
		</li>
	)
}
