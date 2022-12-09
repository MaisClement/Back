import React from 'react';

class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            date: new Date()
        };
    }
	
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			100
		);
	}
	
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
	
	tick() {
		const jour = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
		const mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
	  	let date = new Date();
		let hour = date.getHours();
		let minute = date.getMinutes();

		hour = (hour < 10) ? '0' + hour : hour;
		minute = (minute < 10) ? '0' + minute : minute;

		this.setState({
			hour: hour,
			minute: minute,
			milli: date.getMilliseconds(),

			day: jour[date.getDay()],
			date_num: date.getDate(),
			month: mois[date.getMonth()],
		});
	}

    style(){
      	if (this.state.milli > 500)
			return { opacity: 0 };
		else
        	return { opacity: 1 };
    }

	render(){
		return (
      <>
        <span className="time">
          {this.state.hour}<span style={this.style()}>:</span>{this.state.minute}
        </span>
        <span className="date">
          {this.state.day} {this.state.date_num} {this.state.month}
        </span>
      </>
		);
	}
}

export default Clock;
