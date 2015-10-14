const React = require('react');
const Player = require('../../Components/Player/index.jsx');
const FlatInput = require('../../Components/FlatInput/index.jsx');
require('./index.scss');

class Room extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			youtubeUrl: 'https://www.youtube.com/watch?v=lw3Or6eqIpIca'
		};
	}

	onBlur(e) {
		this.setState({ youtubeUrl: e.target.value });
	}

	render() {
		const { youtubeUrl } = this.state;

		return (
			<div className="Room">
				<FlatInput onBlur={ ::this.onBlur } />
				<Player className="Room__Player" link={ youtubeUrl } />
			</div>
		);
	}
}

module.exports = Room;
