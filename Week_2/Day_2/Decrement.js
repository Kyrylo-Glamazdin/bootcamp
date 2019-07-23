import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Decrement extends Component{
	constructor(props){
		super(props);
        this.decrementNum = this.decrementNum.bind(this);
		this.state = {
			num: props.num
        };
	}
    decrementNum(){
        if (this.state.num <= 0){
            window.alert("Cannot be less than zero");
        }
        else{
            this.setState({num: this.state.num - 1});
        }
	}
	render(){
		return <div>
        <h2>Click the button to decrement the number:</h2>
			<h1>{this.state.num}</h1>
        <button onClick = {this.decrementNum}>Decrement</button>
		</div>
	}
};

Decrement.propTypes = {
	num: PropTypes.number.isRequired
};

export default Decrement
