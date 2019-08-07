import React, { Component } from 'react';
import Title from './components/title/title'
import Card from './components/card/card';
import SliderNavigation from './components/slidernavigation/slidernavigation';
import { Projects } from './mockData';
import Background from './components/background/background';

let startX;
let cIndex = 0;
export default class Home extends Component {

	constructor(props) {
		super(props);
		this.displayCard = this.displayCard.bind(this);

		this.state = {
			nextSlide: false,
			startPos: null,
			endX: null
		}
	}

	displayCard() {
		const SliderItems = document.querySelectorAll('.cardProject');
		SliderItems.forEach((item, i) => {
			item.classList.add('cardHide');
			if(i === 0) {
				item.classList.remove('cardHide');
			}
		})
	}

	selectOption (index) {
		const Options = document.querySelectorAll('.sliderNavigationButton');
		const activeOptions = document.querySelectorAll('.sliderNavigationButtonActive');
		activeOptions.forEach(el => el.classList.remove('sliderNavigationButtonActive'))
		Options[index].classList.add('sliderNavigationButtonActive');
	}

	selectCard = (index) => {
		const SliderItems = document.querySelectorAll('.cardProject');
		SliderItems.forEach((item, i) => {
			item.classList.add('cardHide');
			if(index === i) {
				SliderItems[index].classList.remove('cardHide');
			}
		})
	}

	componentDidMount() {
		this.displayCard();
	}

	sliderTouchStart(e) {
		startX = e.touches[0].clientX;
	}

	sliderTouchEnd(e) {
		const endX = e.changedTouches[0].clientX;
		const navItemLength = document.querySelectorAll('.sliderNavigationItem').length

		if(startX !== endX) {
			if(startX < endX && endX - startX > 50) {
				cIndex = cIndex + 1
				if(cIndex > navItemLength - 1) {
					cIndex = 0;
				}
				this.selectCard(cIndex);
				this.selectOption(cIndex);
			}
			else if(startX - endX > 50) {
				cIndex = cIndex - 1
				if(cIndex < 0) {
					cIndex = navItemLength - 1;
				}
				this.selectCard(cIndex);
				this.selectOption(cIndex);
			}
		}
	}

	render() {
		this.displayCard();
		return (
			<>
				<Background />
				<Title link='/about' job="FRONT END DEVELOPER" btntext='ABOUT' animated>Tim</Title>
				<div className='sliderContainer' onTouchStart={(e) => this.sliderTouchStart(e)} onTouchEnd={(e) => this.sliderTouchEnd(e)}>
					{Projects.map((project, i) => {
						return <Card index={i + 1} title={project.title} skills={project.skills} key={i} className='cardHide' style={{backgroundImage: `linear-gradient(rgba(69, 216, 255, .6), rgba(1, 218, 188, .6)), url('${require(`./images/${project.image}`)}')` }} data-id={i}/>
					})}
					<ul className='sliderNavigation'>
						{Projects.map((_, i) => {
							return <SliderNavigation index={i + 1} key={i} selectCard={() => this.selectCard(i)} />
						})}
					</ul>
				</div>
			</>
		)
	}
}