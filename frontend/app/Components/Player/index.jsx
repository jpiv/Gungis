const React = require('react');

class Player extends React.Component {
	static propTypes = {
		link: React.PropTypes.string.isRequired,
		width: React.PropTypes.number,
		height: React.PropTypes.number,
		className: React.PropTypes.string
	}

	createEmbedLink() {
		const youtubeAddr = 'http://www.youtube.com/embed/';
		const videoId = this.props.link.match(/v=.+/)[0].slice(2);
		return youtubeAddr + videoId;;
	}

	render() {
		const { className, width, height} = this.props;
		const embedLink = this.createEmbedLink();
		console.log(embedLink);
		return (
			<iframe
				className={ className }
				width={ width }
				height={ height }
				src={ embedLink }
			/>
		);
	}
}

module.exports = Player;
