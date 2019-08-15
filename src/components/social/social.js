import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Social extends Component {
	state = {
		isAnimating: false
	}

	copyURL = (e) => {
		const input = e.currentTarget.children[1];
		input.setAttribute('type', 'text')
		input.select();
		document.execCommand('copy');
		input.setAttribute('type', 'hidden')
		const copyText = document.querySelector('.copyText');
		copyText.classList.add('animate');

		this.setState({
			isAnimating: true
		})
	}

	render() {
		return (
			<>
				{this.copyURL ? <p className={`copyText${this.state.isAnimating ? ' animate' : ''}`} onAnimationEnd={() => this.setState({isAnimating: false})}>Copied URL to clipboard!</p> : null}
				<a href={this.props.link} className={`social${this.props.customClass ? ` ${this.props.customClass}` : ''}`} onClick={this.props.copyURL ? this.copyURL : null} data-url={this.props.url}>
					<FontAwesomeIcon icon={this.props.faIcon}/>
					{this.copyURL ? <input type="hidden" value={this.props.url}/> : null}
				</a>
			</>
		)
	}
}