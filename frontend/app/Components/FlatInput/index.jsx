const React = require('react');
require('./index.scss');

class FlatInput extends React.Component {
	static propTypes = {
		placeholder: React.PropTypes.string,
		onBlur: React.PropTypes.func
	}

	render() {
		const { onBlur } = this.props;

		return (
			<div className="FlatInput">
				<input
					className="FlatInput__Input"
					size={ 25 }
					onBlur={ onBlur }
				></input>
			</div>
		);
	}
}

module.exports = FlatInput;
