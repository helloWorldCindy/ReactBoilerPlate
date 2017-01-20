var React = require('react');

// get location and temp from the parent component Weather
// Note: pull values from this.props not this.states
var WeatherMessage = ({ location, temp }) => {
  return (
    <h3 className="text-center">The temperature in {location} is {temp}°C</h3>
  );
};

module.exports = WeatherMessage;