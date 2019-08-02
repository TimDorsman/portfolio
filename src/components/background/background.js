import React, { Component } from 'react';
import Backwave from '../../images/background/backwave.svg';
import Middlewave from '../../images/background/middlewave.svg';
import Frontwave from '../../images/background/frontwave.svg';
import './background.scss';

export default class Background extends Component {
	constructor() {
		super();
		this.state = {
			width: '',
			height: ''
		}
	}

	moveClouds = (ev) => {
		const backWave = this.refs.backwave;
		const middleWave = this.refs.middlewave;
		const frontWave = this.refs.frontwave;
		const mouseX = ev.clientX;
		console.log('X:', ev.clientX);
		console.dir(frontWave);
		frontWave.style.right = `${-mouseX * 0.03}px`
		middleWave.style.right =`${mouseX * 0.03}px`
		backWave.style.right =`${-mouseX * 0.03}px`
	}

	updateWindowSize = () => {
		this.setState({
			width: window.innerWidth, 
			height: window.innerHeight
		})

		console.log(this.state.width, this.state.height);
	}

	componentDidMount() {
		this.updateWindowSize();
		window.addEventListener('resize', this.updateWindowSize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowSize)
	}
	
	render() {
		return (
			<div className='background' onMouseMove={this.moveClouds}>
				<div className='backgroundOverlap'>
					<img src={Backwave} alt='backwave' className='wave backWave' ref='backwave'/>
					<img src={Middlewave} alt='middlewave' className='wave middleWave' ref='middlewave'/>
					<img src={Frontwave} alt='frontwave' className='wave frontWave' ref='frontwave'/>
				</div>
			</div>
		)
	}
}