const React = require('react');
const classnames = require('classnames');
require('./index.scss');

class Player extends React.Component {
	static propTypes = {
		link: React.PropTypes.string.isRequired,
		width: React.PropTypes.number,
		height: React.PropTypes.number,
		className: React.PropTypes.string
	}

	createEmbedLink() {
		const youtubeAddr = 'http://www.youtube.com/embed/';
		const videoId = this.props.link.match(/v=.+/) && this.props.link.match(/v=.+/)[0].slice(2);
		return youtubeAddr + videoId;
	}

	render() {
		const { className, width, height} = this.props;
		const embedLink = this.createEmbedLink();
		const classes = classnames('Player', className);
		

		return (
			<div className={ classes }>
				<iframe
					className="Player__Iframe"
					width={ width }
					height={ height }
					src={ embedLink }
					frameborder="0"
				/>
			</div>
		);
	}
}

module.exports = Player;
