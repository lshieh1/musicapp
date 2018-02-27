/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */

// var request = require('request'); // "Request" library

// var client_id = '2cc4313fc6ce4651943f4e925552e3f3'; // Your client id
// var client_secret = '16668c5c91534d798d68b215b963470d'; // Your secret

// // your application requests authorization
// var authOptions = {
//   url: 'https://accounts.spotify.com/api/token',
//   headers: {
//     'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
//   },
//   form: {
//     grant_type: 'client_credentials'
//   },
//   json: true
// };

// request.post(authOptions, function(error, response, body) {
//   if (!error && response.statusCode === 200) {

//     // use the access token to access the Spotify Web API
//     var token = body.access_token;
//     var options = {
//       url: 'https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF',
//       headers: {
//         'Authorization': 'Bearer ' + token
//       },
//       json: true
//     };
//     request.get(options, function(error, response, body) {
//       console.log(body);
//     });
//   }
// });
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: '2cc4313fc6ce4651943f4e925552e3f3',
  secret: '16668c5c91534d798d68b215b963470d'
});
 
// spotify
//   .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
//   .then(function(data) {
//     console.log(data); 
//   })
//   .catch(function(err) {
//     console.error('Error occurred: ' + err); 
//   });
spotify.search({type: 'track',query: 'Miley Cyrus'}).then(function(res) {
  console.log(res.tracks.items[0])
}).catch(function(err) {
  console.log(err)
})