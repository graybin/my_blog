import React, { Component } from 'react';
import NavItem from './nav_item.js'
import Logo from '../img/name.svg'
import './nav.css'

class Nav extends Component {
	render() {
		const item = [{'title':'首页'},{'title':'文章分类'}];
		return (
			<div id='nav'>
				<div className='nav-wrap'>
					<img className='nav-logo' src={Logo} alt='logo'/>
					<ul className='nav-info'>
						{item.map((val, index) => 
							<NavItem 
								key={index}
								title={val.title}
							/>)
						}
					</ul>
				</div>
			</div>
			
		);
	}
}

export default Nav;