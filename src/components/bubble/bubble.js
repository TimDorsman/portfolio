import React, { Component } from 'react';
import Skills from '../skills/skills';

export default class Bubble extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			styling: {}
		}
	}

	componentDidMount() {
		this.setState({
			data: this.props.data,
			styling: {
				backgroundImage: `url(${require(`./../../images/${this.props.data.image}`)})`,
			}
		})
	}

	render() {
		return (
			<div className='bubble' style={this.state.styling}>
				<h2 className='bubbleText'>{this.props.data.title}</h2>
				<Skills title='Skills used' classes='_projects'>{this.props.data.skills}</Skills>
			</div>
		)
	}
}