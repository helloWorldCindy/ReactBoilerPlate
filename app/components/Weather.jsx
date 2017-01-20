var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
	getInitialState: function () {
		return {
			isLoading: false
		}
	},
	handleSearch: function (location) {

		this.setState({
			isLoading: true
		});

		openWeatherMap.getTemp(location).then( (temp) => {
			this.setState({
				location: location,
				temp: temp,
				isLoading: false
			});
		}, (errorMessage) => {
			this.setState({ isLoading: false });
			alert(errorMessage);
		})
	},

	render: function () {
		// this is important
		// pull the values after you setState
		var { isLoading, location, temp } = this.state;

		function renderMessage () {
			if (isLoading) return <h3>Fetching Weather...</h3>
			else if (location && temp) return <WeatherMessage temp={temp} location={location}/>
		}

		// pass location and temp to WeatherMessage component
		return (
			<div>
				<h3>Weather Component</h3>
				<WeatherForm onSearch={this.handleSearch}/>
				{renderMessage()}
			</div>
		);
	}
});

module.exports = Weather;