import React, { Component } from 'react';

export default class Form extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			body: '',
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleClick = async (e) => {
		e.preventDefault();
		const data = {
			name: this.state.name,
			email: this.state.email,
			body: this.state.body,
		};
		await fetch(
			'https://ju7qrql2j0.execute-api.eu-central-1.amazonaws.com/mailUsDeploy/contactus',
			{
				method: 'POST',
				dataType: 'json',
				crossDomain: 'true',
				contentType: 'application/json; charset=utf-8',
				body: JSON.stringify(data),
			}
		);
		this.clearForm();
	};

	clearForm = () => {
		this.setState({
			name: '',
			email: '',
			body: '',
		});
	};

	render() {
		return (
			<React.Fragment>
				<form onSubmit={this.handleClick}>
					<input
						type='text'
						value={this.state.name}
						name='name'
						placeholder='your name'
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
					<br />
					<input
						type='text'
						value={this.state.body}
						name='body'
						placeholder='your message'
						onChange={this.handleChange}
					/>
					<br />
					<input type='submit' />
				</form>
			</React.Fragment>
		);
	}
}
