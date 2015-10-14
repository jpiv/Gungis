const React = require('react');
import { Link } from 'react-router';
const cssHelpers = require('../../Utils/CssUtils/cssHelpers.js');
const _forEach = require('lodash.foreach');
require('./index.scss');

class Header extends React.Component {
	componentDidMount() {
		this.centerLinks();
	}

	centerLinks() {
		const headerEl = React.findDOMNode(this.refs.header);
		const linkContainerEl = React.findDOMNode(this.refs.linkContainer);
		cssHelpers.verticalAlign(headerEl);

		_forEach(linkContainerEl.children, (el) =>
			cssHelpers.verticalAlign(el.children[0])
		);
	}

	render() {
		return (
			<div className='Header navbar navbar-default navbar-static-top'>
				<div className="Header__Container container-fluid">
					<div ref="header" className="Brand navbar-header">
						<a href="#" className="Brand__Text navbar-brand">Welcome to Gungis</a>
					</div>
					<ul ref="linkContainer"className="Header__Links nav navbar-nav navbar-right">
						<li className="Link__Container"><a className="Link__Text" href="/browse">HOME</a></li>
						<li className="Link__Container"><Link className="Link__Text" to="/">Login</Link></li>
						<li className="Link__Container"><Link className="Link__Text" to="/browse">Browse</Link></li>
					</ul>
				</div>
			</div>
		);
	}
}

module.exports = Header;
