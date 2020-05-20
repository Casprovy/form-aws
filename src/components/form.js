import React, { Component } from 'react';

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: '',
			email: '',
		};
	}

	render() {
		return (
			<div>
				<h2>it works!</h2>
			</div>
		);
	}
}
