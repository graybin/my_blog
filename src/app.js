import React, { Component } from 'react';
import Nav from './nav/nav.js'
import Main from './main/index.js'

class App extends Component {
	render(){
		return (
			<div id='app'>
				<Nav/>
				<Main/>
			</div>
		);
	}
}

export default App;