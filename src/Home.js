import React, { Component } from 'react';
import Title from './components/title/title'
import Card from './components/card/card';
import SliderNavigation from './components/slidernavigation/slidernavigation';
import { Projects } from './mockData';

const SliderItems = document.querySelectorAll('.cardProject');
export default class Home extends Component {

	constructor(props) {
		super(props);

		this.selectCard = this.selectCard.bind(this);
	}

	displayCard() {
		SliderItems.forEach((item, i) => {
			if(i == 0)
			item.classList.remove('cardHide');
		})
	}

	selectCard(index) {
		SliderItems.forEach((item, i) => {
			item.classList.add('cardHide');
			if(index == i) {
				SliderItems[index].classList.remove('cardHide');
			}
		})
	}

	componentDidMount() {
		this.displayCard();
	}

	render() {
		return (
			<>
				<Title job="FRONT END DEVELOPER" btntext='ABOUT'>Tim</Title>
				{Projects.map(function(project, i) {
					return <Card index={i + 1} title={project.title} skills={project.skills} key={i} className='cardHide' style={{backgroundImage: `linear-gradient(rgba(69, 216, 255, .6), rgba(1, 218, 188, .6)), url('${require(`./images/${project.image}`)}')` }} data-id={i}/>
				})}
				<ul className='sliderNavigation'>
				{Projects.map(function(project, i) {
					return <SliderNavigation index={i + 1} key={i} selectCard={() => this.selectCard} />
				})}
				</ul>
			</>
		)
	}
}