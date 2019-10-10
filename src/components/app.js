import { h, Component } from 'preact';
import { Router } from 'preact-router';

// Code-splitting is automated for routes
import Home from '../routes/Home';
import SRP from '../routes/SRP';

export default class App extends Component {

	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				{/* <Header /> */}
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<SRP path="/srp/" />
				</Router>
			</div>
		);
	}
}
