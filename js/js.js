// var apiKey = require('./../.env').apiKey;
//
// function Tracks() {
// }
//
// Tracks.prototype.viewTracks = function(genre, tempo, inst) {
//   $.get('https://api.spotify.com/v1/recommendations?&seed_genres=' + genre + '&limit=48&target_tempo=' + tempo + '&min_valence=' + inst + '&access_token=' + apiKey).then(function(response) {
//    var tracks = response.tracks;
//      tracks.forEach(function(song) {
//          var uri = song.uri;
//          var player = document.createElement('iframe');
//            player.width = '280';
//            player.height = '280';
//            player.frameborder="0";
//            player.allowtransparency="true";
//            player.src = "https://embed.spotify.com/?uri=" + uri;
//        }).fail(function(error) {
//          $(".results").text(error.responseJSON.message);
//        });
//      });
//    };
//
//
// exports.spotifyModule = Tracks;

// 
// back-end logic:

// var apiKey = require('./../.env').apiKey;
//
// function Tracks() {
// }
//
// Tracks.prototype.viewTracks = function(genre, tempo, inst) {
//   $.get('https://api.spotify.com/v1/recommendations?&seed_genres=' + genre + '&limit=48&target_tempo=' + tempo + '&min_valence=' + inst + '&access_token=' + apiKey).then(function(response) {
//    var tracks = response.tracks;
//      tracks.forEach(function(song) {
//          var uri = song.uri;
//          var player = document.createElement('iframe');
//            player.width = '280';
//            player.height = '280';
//            player.frameborder="0";
//            player.allowtransparency="true";
//            player.src = "https://embed.spotify.com/?uri=" + uri;
//        }).fail(function(error) {
//          $(".results").text(error.responseJSON.message);
//        });
//      });
//    };
//
//
// exports.spotifyModule = Tracks;
