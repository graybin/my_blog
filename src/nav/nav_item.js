import React, { Component } from 'react';

class NavItem extends Component {
	render() {
		const { title } = this.props;
		return (
			<a>
				<li>{title}</li>
			</a>	
		);
	}
}

export default NavItem;