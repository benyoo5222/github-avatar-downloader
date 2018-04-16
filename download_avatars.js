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
    cb(err, body);
  });
}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});



