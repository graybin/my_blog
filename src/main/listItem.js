import React, {Component} from 'react';
import './listItem.css';

class ListItem extends Component {
	render(){
		const {title, des, type, readNum} = this.props;
		return (
			<div className="list-item">
				<div className="item-title">{title}</div>
				<div className="item-des">{des}</div>
				<div className="item-info">
					<span className="type">{type}</span>
					<span className="space-line"></span>
					<span className="read">{readNum}</span>
				</div>
			</div>
		)
	}
}

export default ListItem;