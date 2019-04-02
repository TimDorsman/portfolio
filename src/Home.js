import React, { Component } from 'react';
import Title from './components/title/title'
import Card from './components/card/card';
import Bubble from './components/bubble/bubble';
import SliderNavigation from './components/slidernavigation/slidernavigation';
import { Projects } from './mockData';

const SliderItems = document.querySelectorAll('.cardProject');
export default class Home extends Component {

	displayCard() {
		SliderItems.forEach((item, i) => {
			if(!i == 0)
			item.classList.add('cardHide');
		})
	}

	selectCard(index) {
		
	}

	componentDidMount() {
		this.displayCard();
	}

	render() {
		return (
			<>
				<Title job="FRONT END DEVELOPER" btntext='ABOUT'>Tim</Title>
				{Projects.map(function(project, i) {
					return <Card index={i + 1} title={project.title} skills={project.skills} key={i} style={{backgroundImage: `linear-gradient(rgba(69, 216, 255, .6), rgba(1, 218, 188, .6)), url('${require(`./images/${project.image}`)}')` }} data-id={i}/>
				})}
				<ul className='sliderNavigation'>
				{Projects.map(function(project, i) {
					return <SliderNavigation index={i + 1} key={i} onClick={this.selectCard} />
				})}
				</ul>
			</>
		)
	}
}