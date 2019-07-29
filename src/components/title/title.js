import React, { Component } from 'react';
import Button from '../../components/button/button'
import './title.scss';

let i = -1;
export default class Title extends Component {

	constructor(props) {
		super(props);

		this.state = {
			job: ''
		}
	}

	typeWriter() {
		var txt = this.props.job
		var speed = 150;
		
		if (i < txt.length) {
			i++;
			this.setState((state) => {
				return { job: state.job += txt.charAt(i) }
			})
			
			setTimeout(this.typeWriter.bind(this), speed);
		}
	}
	
	componentDidMount() {

		if(this.props.animated)
		this.typeWriter();
	}

	
	render() {
		return (
			<div className={`titleWrapper ${this.props.className}`}>
				<h1 className='title'>{this.props.children}</h1>
				<p className='titleText'>{this.props.animated ? this.state.job : this.props.job}</p>
				<Button className='buttonHome' link='/about'>{this.props.btntext}</Button>
				{this.props.buttontext}
			</div>
		)
	}
}