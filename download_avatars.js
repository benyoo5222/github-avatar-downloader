var request = require('request');
var token = require('./secrets.js');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  // ...


  // creating a variable of object thats called options to show the url and the header
  var options={
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",

  // adding headers now to satisfy the request
  headers: {
      'User-Agent': 'request',
      'Authorization': `token ${token.GITHUB_TOKEN}`
    }
  };

// instead of url we are passing the whole options object which includes the url and the headers
  request(options, function(err, res, body) {

    var newobj= {}; // container for new object
    var obj= JSON.parse(body); // changes the string to an JSON file type

    for(var a = 0; a < obj.length; a++){
      newobj[obj[a].login] = obj[a]["avatar_url"]; //looped the JSON file type and set the keys to the name and the value to their avatar url.
    }


    cb(err, newobj);
  });
}

getRepoContributors("jquery", "jquery", function(err, result) {
  for(var key in result){
    console.log(result[key]); //uses each key name and prints the url.
  }

});



