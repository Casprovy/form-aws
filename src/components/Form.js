import React, { Component } from 'react';

export default class Form extends Component {
	constructor() {
		super();
		this.state = {
			message: '',
			email: '',
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	clearForm = () => {
		this.setState({
			message: '',
			email: '',
		});
	};

	render() {
		return (
			<React.Fragment>
				<form>
					<input
						type='text'
						value={this.state.message}
						name='message'
						placeholder='your message'
						onChange={this.handleChange}
					/>
					<br />
					<input
						type='email'
						value={this.state.email}
						name='email'
						placeholder='your email'
						onChange={this.handleChange}
					/>
				</form>
			</React.Fragment>
		);
	}
}
