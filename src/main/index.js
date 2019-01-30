import React, { Component } from 'react';
import './index.css';
import ListItem from './listItem.js';
import ToggleBar from './toggleBar.js'

class Main extends Component {
	render(){
		const item = [{'title': '如何从 HTML 5 快速转型开发快应用？',
						'des': '作为移动互联网的全新应用分发形态，快应用可以提供智能化场景分发，即点即用，让用户从手机系统快速进入快应用，无需下载安装，一步直达服务。快应用拥有原生性能体验和系统级服务能力，也让快应用有比 HTML 5 更好的转化率和商业价值。',
						'type': 'qianduan',
						'readNum': 1000},
						{'title': '如何从 HTML 5 快速转型开发快应用？',
						'des': '作为移动互联网的全新应用分发形态，快应用可以提供智能化场景分发，即点即用，让用户从手机系统快速进入快应用，无需下载安装，一步直达服务。快应用拥有原生性能体验和系统级服务能力，也让快应用有比 HTML 5 更好的转化率和商业价值。',
						'type': 'qianduan',
						'readNum': 1000},
						{'title': '如何从 HTML 5 快速转型开发快应用？',
						'des': '作为移动互联网的全新应用分发形态，快应用可以提供智能化场景分发，即点即用，让用户从手机系统快速进入快应用，无需下载安装，一步直达服务。快应用拥有原生性能体验和系统级服务能力，也让快应用有比 HTML 5 更好的转化率和商业价值。',
						'type': 'qianduan',
						'readNum': 1000},
						{'title': '如何从 HTML 5 快速转型开发快应用？',
						'des': '作为移动互联网的全新应用分发形态，快应用可以提供智能化场景分发，即点即用，让用户从手机系统快速进入快应用，无需下载安装，一步直达服务。快应用拥有原生性能体验和系统级服务能力，也让快应用有比 HTML 5 更好的转化率和商业价值。',
						'type': 'qianduan',
						'readNum': 1000},
						{'title': '如何从 HTML 5 快速转型开发快应用？',
						'des': '作为移动互联网的全新应用分发形态，快应用可以提供智能化场景分发，即点即用，让用户从手机系统快速进入快应用，无需下载安装，一步直达服务。快应用拥有原生性能体验和系统级服务能力，也让快应用有比 HTML 5 更好的转化率和商业价值。',
						'type': 'qianduan',
						'readNum': 1000},
						{'title': '如何从 HTML 5 快速转型开发快应用？',
						'des': '作为移动互联网的全新应用分发形态，快应用可以提供智能化场景分发，即点即用，让用户从手机系统快速进入快应用，无需下载安装，一步直达服务。快应用拥有原生性能体验和系统级服务能力，也让快应用有比 HTML 5 更好的转化率和商业价值。',
						'type': 'qianduan',
						'readNum': 1000},
						{'title': '如何从 HTML 5 快速转型开发快应用？',
						'des': '作为移动互联网的全新应用分发形态，快应用可以提供智能化场景分发，即点即用，让用户从手机系统快速进入快应用，无需下载安装，一步直达服务。快应用拥有原生性能体验和系统级服务能力，也让快应用有比 HTML 5 更好的转化率和商业价值。',
						'type': 'qianduan',
						'readNum': 1000}]
		return (
			<div id="main">
				<div className="main-wrap">
					{
						item.map((item,index) => 
							<ListItem 
									  key={index}
									  title={item.title}
									  des={item.des}
									  type={item.type}
									  readNum={item.readNum}/>
						)
					}
					<ToggleBar/>
				</div>
			</div>
		);
	}
}

export default Main;