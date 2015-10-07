const React = require('react');
const Player = require('../../Components/Player/index.jsx');

class Room extends React.Component {
	render() {
		return (
			<div>
				<Player link='https://www.youtube.com/watch?v=lw3Or6eqIpI' />
			</div>
		);
	}
}

module.exports = Room;
