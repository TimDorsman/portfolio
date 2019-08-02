import React, { Component } from 'react';
import Button from '../../components/button/button'
import './title.scss';

let i = -1;
let timeOutID;
export default class Title extends Component {

	constructor(props) {
		super(props);

		this.state = {
			job: '',
			callTypeWriter: true
		}
	}

	typeWriter() {
		var txt = this.props.job;
		var speed = 150;

		if (i < txt.length && this.state.callTypeWriter) {
			i++;
			this.setState((state) => {
				return { job: state.job += txt.charAt(i) }
			})
			
			timeOutID = setTimeout(this.typeWriter.bind(this), speed);
		}
		else
			clearTimeout(timeOutID);
	}
	
	componentDidMount() {
		i = -1;
		this.setState({
			callTypeWriter: true
		})
		if(this.props.animated) {
			this.typeWriter();
		}
	}

	componentWillUnmount() {
		this.setState({
			callTypeWriter: false
		})
		clearTimeout(timeOutID);
	}

	
	render() {
		return (
			<div className={`titleWrapper${this.props.className ? ' ' + this.props.className : ''}`}>
				<h1 className='title'>{this.props.children}</h1>
				<p className='titleText'>{this.props.animated ? this.state.job : this.props.job}</p>
				<Button className='buttonHome' link={this.props.link}>{this.props.btntext}</Button>
				{this.props.buttontext}
			</div>
		)
	}
}