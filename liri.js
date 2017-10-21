// Import the Keys file
var keys = require("./keys.js");

var fs = require("fs");

// Import the NPM packages
var Twitter = require("twitter");

var spotify = require("./keys");
// console.log(spotify);

var request = require("request");



// Function for a Twitter Search
  var getMyTweets = function() {
  var client = new Twitter(keys.twitterKeys);
   
     client.get("statuses/user_timeline", keys.params, function(error, tweets, response) {
      if (!error) {
      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].created_at);
        console.log("");
        console.log(tweets[i].text);
      }
    }
  });
};


// Function for a Spotify search
var getMeSpotify = function(songName) {

    if (songName === undefined) {
    songName = "I Want it That Way";
  }

 keys.spotify.search({
      type: "track", query: songName}, function(err, data) {
      if (err) {
        return console.log("Error occurred: " + err);
      }

      // console.log(data);

      var songs = data.tracks.items;

      for (var i = 0; i < songs.length; i++) {
        console.log(i);
        console.log("artist(s): " + songs[i].artists.map(getArtistNames));
        console.log("song name: " + songs[i].name);
        console.log("preview song: " + songs[i].preview_url);
        console.log("album: " + songs[i].album.name);
        console.log("-----------------------------------");
           }
    }
  );
};
 

// Writes to the log.txt file
var getArtistNames = function(artist) {
  return artist.name;
};


// Function for a Movie Search
var getMeMovie = function(movieName) {
  if (movieName === undefined) {
    movieName = "Mr Nobody";
  }

  var urlHit = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&tomatoes=true&apikey=40e9cece";

  request(urlHit, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var jsonData = JSON.parse(body);

      console.log("Title: " + jsonData.Title);
      console.log("Year: " + jsonData.Year);
      console.log("Rated: " + jsonData.Rated);
      console.log("IMDB Rating: " + jsonData.imdbRating);
      console.log("Country: " + jsonData.Country);
      console.log("Language: " + jsonData.Language);
      console.log("Plot: " + jsonData.Plot);
      console.log("Actors: " + jsonData.Actors);
      console.log("Rotton Tomatoes URL: " + jsonData.tomatoURL);
    }
  });
};

// Function for a command based on text file
var doWhatItSays = function() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    console.log(data);

    var dataArr = data.split(",");

    if (dataArr.length === 2) {
      select(dataArr[0], dataArr[1]);
    }
    else if (dataArr.length === 1) {
      select(dataArr[0]);
    }
  });
};

// Function to excute command 
var select = function(command, functionData) {
  if (command=="my-tweets") {
    getMyTweets();
  }
     else if (command=="spotify-this-song") {
    getMeSpotify(functionData);
  }

    else if (command=="movie-this") {
    getMeMovie(functionData);
  }

    else if (command=="do-what-it-says") {
     doWhatItSays();
  }
 
  
};


select(process.argv[2], process.argv[3]);

