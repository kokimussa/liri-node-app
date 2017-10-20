var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

console.log('this is loaded');

var twitter = {
  consumer_key: 'uHHa7iE3F8FJ1KWbYQxmgkJpA',
  consumer_secret:'18uC6XYAZQnuPzBUYkFI69EC015FeKjIaQ1yQQCeMwqnb5ZqgS',
  access_token_key: '921131098398248960-oyY5W32g5O4qAqjLOui6ExSf0bzpdDm',
  access_token_secret: 'aaZ6KLauM8GQyOGfAM3mSFazY9uuZzkBc5XjJUjq3QhFC'

}

var params = {screen_name: 'liri 345'};

 
var spotify = new Spotify({
  id: '46dc764f230f455ab5236d9abfdbf9cc',
  secret: '3ea3ed285b724623b5835b540fd34506'
});



module.exports = {

	twitterKeys:twitter,
	params:params,
	spotify:spotify
}


