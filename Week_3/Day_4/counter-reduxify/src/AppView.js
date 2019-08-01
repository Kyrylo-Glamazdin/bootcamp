import React from 'react';

const AppView = (props) => {
	const {counter, incrementCounter, decrementCounter} = props;
	return <div className="App">
	<header className="App-header">
		Counter: {counter}
		<form>
		<label>
		Type in amount here:
		</label>
		<input name="amount" onChange={this.props.handleChange}></input>
		</form>
		<button onClick = {() => incrementCounter(5)}>Plus</button>
		<button onClick = {() => decrementCounter(5)}>Minus</button>

	</header>
	</div>
}

export default AppView;