import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactCard extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return <div>
			<h1>{this.props.name}:</h1> 
			<p>Mobile Phone: {this.props.mobileNum},</p> 
			<p>email: {this.props.email},</p>
			<p>Work Phone: {this.props.workNum}</p>
		</div>
	}
};

ContactCard.propTypes = {
	name: PropTypes.string.isRequired,
	mobileNum: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	workNum: PropTypes.string
};

export default ContactCard