import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Decrement extends Component{
	constructor(props){
		super(props);
		this.state = {
			num: props.num
		}
	}
	decrementNum(){
		this.setState({num: this.props.num-1});
	}
	render(){
		return <div>
			<h1>{this.props.num}</h1>
		</div>
	}
};

Decrement.propTypes = {
	num: PropTypes.number.isRequired
};

export default Decrement