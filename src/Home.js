import React, { Component } from 'react';
import Title from './components/title/title'
import Card from './components/card/card';
export default class Home extends Component {



	render() {
		return (
			<>
				<Title job="FRONT END DEVELOPER">Tim</Title>
				<Card index='1' title='Workpamoja' />
			</>
		)
	}
}