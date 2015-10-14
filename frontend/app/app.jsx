import React from 'react';

import Header from './Views/Header/index.jsx';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />
				{ this.props.children }
			</div>
		);
	}
}

module.exports = App;
