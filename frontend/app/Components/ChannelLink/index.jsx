import React from 'react';
require('./index.scss');

class ChannelLink extends React.Component {
	render() {
		return (
			<div className="ChannelLink">
				<a className="ChannelLink__Title">Sample Title</a>
				<div className="ChannelLink__Description">
					something + else
				</div>
			</div>
		);
	}
}

module.exports = ChannelLink;
