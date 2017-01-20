var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');


var Weather = React.createClass({
	getInitialState: function () {
		return {
			location: 'Ottawa',
			temp: '-10'
		}
	},
	handleSearch: function (location) {
		this.setState({
			location: location,
			temp: 23
		})
	},

	render: function () {
		// this is important
		// pull the values after you setState
		var { location, temp } = this.state

		// pass location and temp to WeatherMessage component
		return (
			<div>
				<h3>Weather Component</h3>
				<WeatherForm onSearch={this.handleSearch}/>
				<WeatherMessage temp={temp} location={location}/>
			</div>
		);
	}
});

module.exports = Weather;