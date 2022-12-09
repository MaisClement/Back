import React, { cloneElement } from 'react';

import Trafic from './Trafic';
import Weather, { Home, Graph } from './Weather';
import Clock from './Clock';

const credentials = require('./crendential.json');

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			timer: 0,

			trafic: [],

			error: '',

			weather_data: [],
			weather: false,

			coord_lat: '48.9586688',
			coord_lon: '2.8803072',
		};
		this.getTrafic = this.getTrafic.bind(this);
		this.getPos = this.getPos.bind(this);
		this.getWeather = this.getWeather.bind(this);
	}

	componentDidMount() {
		this.getTrafic();
		this.getPos();
		this.getWeather();

		this.intervalTimer = setInterval(
			() => this.timer(),
			50
		);

		this.intervalSNCF = setInterval(
			() => this.getSNCFTrafic(),
			1000 * 60 * 3
		);
		this.intervalRATP = setInterval(
			() => this.getRATPTrafic(),
			1000 * 60 * 3
		);
		this.intervalWeather = setInterval(
			() => this.getWeather(),
			1000 * 60 * 60
		);
	}
	componentWillUnmount() {
		clearInterval(this.intervalTimer);
		clearInterval(this.intervalSNCF);
		clearInterval(this.intervalRATP);
		clearInterval(this.intervalWeather);
	}
	timer() {
		if (this.state.timer > 1000 * 80) {
			this.setState({
				timer: 0
			});
		} else {
			this.setState({
				timer: this.state.timer + 50
			});
		}
	}
	getTrafic() {
		let url = 'https://navika.hackernwar.com/v0.1/trafic';

		fetch(url)
			.then(res => res.json())
			.then(data => {
				this.setState({
					trafic: data.trafic
				});
			})
			.catch(err => {
				this.setState({
					trafic: []
				});
			});
	}
	getPos() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this.getWeather);
		} else {
			this.setState({
				weather: false
			});
		}
	}
	getWeather() {
		let lat, lon;

		lat = this.state.coord_lat;
		lon = this.state.coord_lon;

		let url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + credentials.API_weather + '&units=metric&lang=fr';

		const headers = new Headers();
		headers.append('Accept', 'application/json');

		fetch(url, {
			method: 'GET',
			headers: headers,
		})
			.then(res => res.json())
			.then(data => {
				this.setState({
					weather_data: data,
					weather: true
				});
			})
			.catch(err => {
				this.setState({
					weather: false
				});
			});
	}

	render() {
		return (
			<>
				<Clock />

				<div className='Body'>
					<div className="container">
						<Weather
							weather={this.state.weather}
							weather_data={this.state.weather_data}
						/>
					</div>

					<div className="container">
						<span id="webcam"></span>
					</div>
				</div>

				<div className='Body'>
					<div className="container">
						<Trafic
							trafic={this.state.trafic}
						/>
					</div>

					<div className="container">
						<span id="webcam2"></span>
					</div>
				</div>




			</>

		);
	}

}


export default App;