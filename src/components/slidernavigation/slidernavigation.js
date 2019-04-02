import React, { Component } from 'react';
import './slidernavigation.scss';



export default class SliderNavigation extends Component {
	selectOption(e) {
		const activeOptions = document.querySelectorAll('.sliderNavigationButtonActive');
		console.log(activeOptions);
		activeOptions.forEach(el => el.classList.remove('sliderNavigationButtonActive'))

		e.target.classList.add('sliderNavigationButtonActive');
	}

	render() {
		return (
			<li className='sliderNavigationItem'>
				<div 
					className={`sliderNavigationButton ${this.props.index === 1 ? 'sliderNavigationButtonActive' : ''}`} 
					onClick={(e) => this.selectOption(e)}
				/>
				<span>{this.props.index < 10 ? `0${this.props.index}` : this.props.index}</span>
			</li>
		)
	}
}
