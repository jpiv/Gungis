const React = require('react');
const ChannelLink = require('../../Components/ChannelLink/index.jsx');
require('./index.scss');

class Browse extends React.Component {
	render() {
		return (
			<div className="Browse">
				<ChannelLink />
			</div>
		);
	}
}

module.exports = Browse;
