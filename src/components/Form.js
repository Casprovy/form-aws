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
			<div>
				<h2>magic form</h2>
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
				<button onClick={this.clearForm}>Submit</button>
				<h2>
					{this.state.message} {this.state.email}
				</h2>
			</div>
		);
	}
}
