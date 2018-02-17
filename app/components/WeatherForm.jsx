var React = require('react');

var WeatherForm = React.createClass({

  onFormSubmit:function(e)
  {
    e.preventDefault();

    var location = this.refs.location.value;  // access the value 

    // check for data validation 
   // onsearch is prop will call parent i.e weather component

    if(location.length >0)
    {
       this.refs.location.value='';

       this.props.onSearch(location);    
    }

  },

  render: function () {
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
            <input type="text" ref="location"/>
            <button>Get Weather</button>
          </form>
        </div>
    );
  }
});

module.exports = WeatherForm;
