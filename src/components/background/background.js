import React, { Component } from 'react';
import Backwave from '../../images/background/backwave.svg';
import Middlewave from '../../images/background/middlewave.svg';
import Frontwave from '../../images/background/frontwave.svg';
import './background.scss';

export default class Background extends Component {
	constructor() {
		super();
		this.state = {
			width: null,
			height: null
		}
	}

	moveClouds = (ev) => {
		const backWave = this.refs.backwave;
		const middleWave = this.refs.middlewave;
		const frontWave = this.refs.frontwave;
		const mouseX = ev.clientX;
		frontWave.style.right = `${-mouseX * 0.1}px`
		middleWave.style.right =`${mouseX * 0.08}px`
		backWave.style.right =`${-mouseX * 0.04}px`
	}

	updateWindowSize = () => {
		this.setState({
			width: window.innerWidth, 
			height: window.innerHeight
		})

		this.refs.backwave.style.right = 0;
		this.refs.middlewave.style.right = 0;
		this.refs.frontwave.style.right = 0;

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
			<div className={`background${this.props.className ? ` background${this.props.className}` : ''}`} onMouseMove={this.moveClouds}>
				<div className={`backgroundOverlap${this.props.className ? ` backgroundOverlap${this.props.className}` : ''}`}>
					<img src={Backwave} alt='backwave' className='wave backWave' ref='backwave'/>
					<img src={Middlewave} alt='middlewave' className='wave middleWave' ref='middlewave'/>
					<img src={Frontwave} alt='frontwave' className='wave frontWave' ref='frontwave'/>
				</div>
			</div>
		)
	}
}