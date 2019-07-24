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
				<h1>Home</h1>
					<ul>
						<li>File1</li>
						<li>File2</li>
						<li>File3</li>
					</ul>
            <button onClick={this.toggleHidden}>Toggle Visibility</button>
			</div>
		}
		else{
			return <div>
						<h1>Home</h1>
            <button onClick={this.toggleHidden}>Toggle Visibility</button>
					</div>
		}
	}
};

export default FormEdit
