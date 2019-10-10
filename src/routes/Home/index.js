import { h, Component, fragment } from 'preact';
import AutoSuggestTrains from '../../components/AutoSuggestTrains';

const CLASS_OPTIONS = [
	{
		name: 'All Class',
		value: 'All'
	},
	{
		name: 'AC First Class (1A)',
		value: '1A'
	},
	{
		name: 'AC 2 Tier (2A)',
		value: '2A'
	},
	{
		name: 'AC 3 Tier (3A)',
		value: '3A'
	},
	{
		name: 'AC Chair Car (CC)',
		value: 'CC'
	},
	{
		name: 'Sleeper (SL)',
		value: 'SL'
	},
	{
		name: 'Second Sitting (2S)',
		value: '2S'
	}
];
// import style from './style';

export default class Home extends Component {
	state = {
		showError: false,
		source: {},
		destination: {},
		date: ''
	};

	changeDate = (e) => {
		this.setState({
			date: e.target.value
		});
	}

	beginSearch = () => {
		const { source, destination, date } = this.state;
		if (!source || !destination || !date) {
			return;
		}
		window.open(`https://www.goibibo.com/trains/results?src=${source.irctc_code}&dst=${destination.irctc_code}&date=${date.split('-').join('')}&class=ALL&srcname=${source.dn}&dstname=${destination.dn}`);
	}

	onSelection = (suggestion, isSrc) => {
		const val = isSrc ? 'source' : 'destination';
		this.setState({
			[val]: suggestion
		});
	}

	render() {
		const { showError, date } = this.state;
		return (
			<fragment>
				<div class="blueBanner pad25">
					<AutoSuggestTrains placeholder="Source" onSelection={this.onSelection} isSrc />
					<AutoSuggestTrains placeholder="Destination" onSelection={this.onSelection} />
					<input class="dateInput" type="date" value={date} onChange={this.changeDate} />
					<button class="search" onClick={this.beginSearch}>Search</button>
					{
						showError ?
							<div class="error">Fill in the Details</div> :
							null
					}
				</div>
			</fragment>
		);
	}
}