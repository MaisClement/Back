import React from 'react';

import wind from './assets/img/weather/wind.png';
import wet from './assets/img/weather/wet.png';
import moisture from './assets/img/weather/moisture.png';

class Weather extends React.Component {
	render(){
		return (
			<div className="App">
				<div className="weather">
					{this.props.weather == true ? 
						<>
							<div className='weather_block'>
									<br/>
								<img src={'weather/' + this.props.weather_data.hourly[1].weather[0].icon + '.png'} className='type'/>
								
									<br/><br/>
								<span className='temp'>
									{Math.round(this.props.weather_data.hourly[1].temp)}°C
								</span>

								<br/><br/>

									<br/>
								<span>
									{capitalizeFirstLetter(this.props.weather_data.hourly[1].weather[0].description)}
								</span>
							</div>
							<div className='weather_details'>
								<img src={wind} className='det_img' />
								{Math.round(this.props.weather_data.hourly[1].wind_speed)} Km/h <br/>

								<img src={wet} className='det_img' />
								{Math.round(this.props.weather_data.hourly[1].pop * 100)} % <br/>								
							</div>
						</>
							:
						<>
							
						</>
					} 
				</div>
			</div>
		);
	}
}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Weather;