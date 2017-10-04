// The movie file will contain a Module. DONE

// This module should export a function named get(movieTitle). DONE

// get(movieTitle) should make a request to the Google Custom Search API with the movieTitle as an argument. DONE
		// Hint: what do you need to do to use the request library? DONE

// You should parse the response that you receive and console.log() something from it. DONE
		// (Maybe each search item's snippet field or just the first one? 
		// The goal is to console.log() something received from the API for each movie.)



'use restrict'

 // function get(movieTitle) {
 	const keys = require('./key.js');
	const request = require('request');
	const googleUrl = "https://www.googleapis.com/customsearch/v1?key=" +keys.googleApiKey+ "&cx=" +keys.googleAppId+ "&q=" +movieTitle+ "+movie";
	request(googleUrl, function (error, response, body) {
		if (error) throw (error);
		console.log(JSON.parse(body).items[0].snippet);
	});
 // };

 // module.exports = get;
// get("contact");