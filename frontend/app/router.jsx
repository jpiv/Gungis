import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import $ from 'jquery';
import './app.scss';
import App from './app.jsx';
import Room from './Views/Room/index.jsx';
import Home from './Views/Home/index.jsx';
import Browse from './Views/Browse/index.jsx';
const History = require('history/lib/createBrowserHistory')();

class AppRouter extends React.Component {
	render() {
		return (
			<Router history={ History }>
				<Route path="/" component={ App }>
					<IndexRoute component={ Home } />
					<Route path="browse" component={ Browse } />
				</Route>
				<Route path="*" component={ Home } />
			</Router>
		);
	}
}

$(() => {
	React.render(<AppRouter />, document.body);
})
