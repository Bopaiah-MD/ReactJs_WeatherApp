var React = require('react');

var WeatherForm = require('app/components/WeatherForm.jsx');

var WeatherMessage = require('app/components/WeatherMessage.jsx');

var OpenWeatherMap = require('app/api/OpenWeatherMap.jsx');

var Weather = React.createClass({

  getInitialState: function () {
    return {
        location: 'Miami',
        temp: 88
    }
  },
  handleSearch: function (location) {

  	var that =this;

    OpenWeatherMap.getTemp(location).then(function(temp)
    {
    	that.setState({
    		location:location,
    		temp:temp
    	});

    },
    function(errorMessage)
    {

    	alert(errorMessage);

    })



    // this.setState({
    //   location: location,
    //   temp: 23
    // });
  },
  render: function () {
    var {temp, location} = this.state;

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage temp={temp} location={location}/>
      </div>
    )
  }
});

module.exports = Weather;
