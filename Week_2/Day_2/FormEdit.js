import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormEdit extends Component{
	constructor(props){
		super(props);
		this.toggleHidden = this.toggleHidden.bind(this);
		this.handleInputChangeFirst = this.handleInputChangeFirst.bind(this);
		this.handleInputChangeSecond = this.handleInputChangeSecond.bind(this);
		this.previousValues = this.previousValues.bind(this);
		this.updatePreviousValues = this.updatePreviousValues.bind(this);
		this.state = {
			firstName: props.firstName,
			lastName: props.lastName,
			prevFirstName: props.firstName,
			prevLastName: props.lastName,
			isHidden: true
		};
	}

	previousValues(){
		this.setState({firstName: this.state.prevFirstName});
		this.setState({lastName: this.state.prevLastName});
		this.toggleHidden();
	}

	updatePreviousValues(){
		this.setState({prevFirstName: this.state.firstName});
		this.setState({prevLastName: this.state.lastName});
		this.toggleHidden();
	}

	handleInputChangeFirst(event){
		this.setState({firstName: event.target.value})
	}

	handleInputChangeSecond(event){
		this.setState({lastName: event.target.value})
	}

	toggleHidden(){
		this.setState({
			isHidden: !this.state.isHidden
		})
	}

	render(){
		if (this.state.isHidden){
		return <div>
		<div id="regularDisplay">
			<div>
				<h1>
                    First Name: {this.state.firstName}
				</h1>
			</div>
			<div>
				<h1>
                    Last Name: {this.state.lastName}
				</h1>
			</div>
			<button onClick={this.toggleHidden}>Edit</button>
		</div>
		</div>
		}
		else{
			return <div>
						<div id="formDisplay">
							<div>
								<form onSubmit={this.handleSubmit}>
									<label>
										First Name:
										<input type="text" name="firstName" 
										value={this.state.firstName} onChange={this.handleInputChangeFirst} />
									</label>
									<br /><br />
									<label>
										Last Name:
										<input type="text" name="lastName"
										value={this.state.lastName} onChange={this.handleInputChangeSecond} />
									</label>
									<br />
									<button onClick={this.updatePreviousValues}>Save</button>
								<button onClick={this.previousValues} >Cancel</button>
								</form>
							</div>
						</div>
					</div>
		}
	}
};




FormEdit.propTypes = {
	firstName: PropTypes.string.isRequired,
	lastName: PropTypes.string.isRequired
};

export default FormEdit
