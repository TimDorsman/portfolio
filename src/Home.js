import React, { Component } from 'react';
import Title from './components/title/title'
import Card from './components/card/card';
import SliderNavigation from './components/slidernavigation/slidernavigation';
import { Projects } from './mockData';

const SliderItems = document.querySelectorAll('.cardProject');
export default class Home extends Component {

	constructor(props) {
		super(props);
		this.displayCard = this.displayCard.bind(this);
	}

	displayCard() {
		console.log('waat');
		const SliderItems = document.querySelectorAll('.cardProject')
		SliderItems.forEach((item, i) => {
			item.classList.add('cardHide');
			if(i === 0) {
				item.classList.remove('cardHide');
				console.log(item);
			}
		})
	}

	selectCard = (index) => {
		const SliderItems = document.querySelectorAll('.cardProject')
		SliderItems.forEach((item, i) => {
			item.classList.add('cardHide');
			console.log(index, i);
			if(index === i) {
				SliderItems[index].classList.remove('cardHide');
			}
		})
	}

	componentDidMount() {
		this.displayCard();
	}

	selectOption = (e) => {
		console.log(e);
		const event = e;
		const activeOptions = document.querySelectorAll('.sliderNavigationButtonActive');
		activeOptions.forEach(el => el.classList.remove('sliderNavigationButtonActive'))
		event.currentTarget.classList.add('sliderNavigationButtonActive');
	}

	render() {
		this.displayCard();
		return (
			<>
				<Title job="FRONT END DEVELOPER" btntext='ABOUT'>Tim</Title>
				{Projects.map((project, i) => {
					return <Card index={i + 1} title={project.title} skills={project.skills} key={i} className='cardHide' style={{backgroundImage: `linear-gradient(rgba(69, 216, 255, .6), rgba(1, 218, 188, .6)), url('${require(`./images/${project.image}`)}')` }} data-id={i}/>
				})}
				<ul className='sliderNavigation'>
				{Projects.map((_, i) => {
					return <SliderNavigation index={i + 1} key={i} selectCard={() => this.selectCard(i)} />
				})}
				</ul>
			</>
		)
	}
}