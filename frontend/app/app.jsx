const React = require('react');
const $ = require('jquery');
const Room = require('./Views/Room/index.jsx');
require('./app.scss');

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<h1 className="App__Heading">GUNGIS</h1>
				<Room />
			</div>
		);
	}
}

$(() => {
	React.render(<App />, document.body);
})
