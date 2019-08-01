import React, {Component} from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import {increment, decrement} from './store/utilities/counter';
import AppView from './AppView';

class AppContainer extends Component {
	constructor(){
		super();
		this.state = {
			amount: 0
		}
	}
	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	render(){
  return (
        <AppView counter={this.props.counter} incrementCounter={this.props.incrementCounter} decrementCounter={this.props.decrementCounter} handleChange={this.handleChange} amount={this.state.amount} />
  		)
	}
}

const mapState = (state) =>{
	return {
		counter: state.counter
	}
}

const mapDispatch = (dispatch) =>{
	return {
		incrementCounter: (amount) => dispatch(increment(amount)),
		decrementCounter: (amount) => dispatch(decrement(amount))
	}
}

export default connect(mapState, mapDispatch)(AppContainer);
