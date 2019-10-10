import { h, Component, fragment } from 'preact';
import AutoSuggestTrains from '../../components/AutoSuggestTrains';
import { Link } from 'preact-router';

export default class SRP extends Component {
	render() {
		return (
			<fragment>
				<h1>You are in SRP</h1>
        <Link href="/">Go home</Link>
			</fragment>
		);
	}
}