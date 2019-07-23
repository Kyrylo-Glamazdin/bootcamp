import React, { Component } from 'react';
class FormEdit extends Component{
	
	constructor(){
		super();
		this.toggleHidden = this.toggleHidden.bind(this);
		this.state = {
			isHidden: true
		};
	}

	toggleHidden(){
		this.setState({
			isHidden: !this.state.isHidden
		})
	}

	render(){
		if (this.state.isHidden){
			return <div>
				<button onClick={this.toggleHidden}>Toggle Visibility</button>
				<h1>Home</h1>
					<ul>
						<li>File1</li>
						<li>File2</li>
						<li>File3</li>
					</ul>
			</div>
		}
		else{
			return <div>
						<button onClick={this.toggleHidden}>Toggle Visibility</button>
						<h1>Home</h1>
					</div>
		}
	}
};

export default FormEdit