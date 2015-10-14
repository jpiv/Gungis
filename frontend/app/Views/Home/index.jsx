const React = require('react');
require('./index.scss');

class Home extends React.Component {
	render() {
		console.log(this.props, this.state)
		return (
			<div className="Home tint-purple">
				<div className="Home__Body">
					<div className="Body__Title">
						Gungis
					</div>
					<div className="Body__Caption">
						Explore. Get known. Be entertained
					</div>
				</div>
			</div>
		)
	}
}

module.exports = Home;
