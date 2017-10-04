var movie = require("./movie");
var threeFavoriteMovies = ["Contact", "Inception", "Groundhog Day"];

threeFavoriteMovies.forEach(function(film){
	movie(film);
});
