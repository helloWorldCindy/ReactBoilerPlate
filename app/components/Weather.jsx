var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    }
  },
  handleSearch: function (location) {
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then( (temp) => {
      this.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, (errorMessage) => {
      this.setState({ 
        isLoading: false,
        errorMessage: true
      });
    })
  },

  render: function () {
    // this is important
    // pull the values after you setState
    var { isLoading, location, temp, errorMessage } = this.state;

    function renderMessage () {
      if (isLoading) {
        return (
          <h3 className="text-center">Fetching Weather...</h3>
        );
      }
      else if (location) {
        return (
          <WeatherMessage temp={temp} location={location}/>
        );
      }
    }

    function renderError() {
      //debugger
      if (errorMessage) {
        return <ErrorModal message="You fucked up the city name!"/>
      }
    }

    // pass location and temp to WeatherMessage component
    return (
      <div>
        <h2 className="text-center">Get Weather</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;