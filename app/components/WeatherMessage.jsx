var React = require('react');

var WeatherMessage = React.createClass({
	render: function () {
		// get location and temp from the parent component Weather
		// Note: pull values from this.props not this.states
		var { location, temp } = this.props;


		return (
			<h3>The temperature in {location} now {temp}</h3>
		);
	}
});

module.exports = WeatherMessage;