import React, {Component} from 'react';
import './toggleBar.css'

class ToggleBar extends Component {
	render(){
		return (
			<div className="toggle-bar">
				<div className="toggle-bar-wrap">
					<span>上一页</span>
					<span>1</span>
					<span>2</span>
					<span>3</span>
					<span>4</span>
					<span>5</span>
					<span>6</span>
					<span>下一页</span>
				</div>
			</div>
		)
	}
}

export default ToggleBar;