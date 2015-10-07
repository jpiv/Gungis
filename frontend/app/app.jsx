const React = require('react');
const $ = require('jquery');
const Room = require('./Views/Room/index.jsx');

class App extends React.Component {
	render() {
		return (
			<div>
				<Room />
			</div>
		);
	}
}

$(() => {
	React.render(<App />, document.body);
})
