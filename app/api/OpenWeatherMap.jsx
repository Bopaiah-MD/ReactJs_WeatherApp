var axios= require('axios')



const 	OPEN_WEATHER_APP_URL='http://api.openweathermap.org/data/2.5/weather?appid=c556a0d5eb926cdb7936f1876c4282d9&units=metric';

module.exports = {

getTemp:function  (location) {

	// The encodeURIComponent() function encodes a URI component This function encodes special characters

var encodedLocation = encodeURIComponent(location)

var requestURL=`${OPEN_WEATHER_APP_URL}&q=${encodedLocation}`;

// make the request now  and axios will use promises

return axios.get(requestURL).then(function(res) 

{


	if(res.data.cod && res.data.message)
	{

	 	throw new Error(res.data.message);
    }
	 else 
	 {

	 	return res.data.main.temp;

	 }


},

function(res) 
{
	
	throw new Error(res.data.message);

});

   }
}
