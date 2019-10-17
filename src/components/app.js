import { h, Component } from 'preact';

// Code-splitting is automated for routes
import Home from '../routes/Home';

export default class App extends Component {

	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Home path="/" />
			</div>
		);
	}
}
