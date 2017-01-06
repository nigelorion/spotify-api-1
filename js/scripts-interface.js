
var apiKey = "BQDeV7lx1Hb1sx__WyRyrJg78jTqPAfJH396P1ORjSDjsksGtfCJNErCHI5cgGYxC8tbO4okLIUN6Rm4NeHxz-FMhJ1mqrjXRc3IS83UDsmJmRnH2313bFb8_jek8j9e7lomq_bXlhzr";

$(function() {

    var max = 200.00,
   min = 30.00,
   step = 0.1,
   tempoOutput = $('#tempo-value').text(min);

$("#tempo")
   .attr({'max': max, 'min':min, 'step': step,'value': String(min)})
   .on('input change', function() {

       tempoOutput.text(this.value);
   });

        var max1 = 1.0,
   min1 = 0.0,
   step1 = 0.1,
   output = $('#valence-value').text(min);

$("#inst")
   .attr({'max': max1, 'min':min1, 'step': step1,'value': String(min1)})
   .on('input change', function() {

       output.text(this.value);
   });

 $("form").submit(function(){
   event.preventDefault();
        $(".results").empty();
   var genre = $('#genre').val();

   var tempo = parseFloat($('#tempo').val());

        var inst = $("#inst").val();



   $.get('https://api.spotify.com/v1/recommendations?&seed_genres=' + genre + '&limit=48&target_tempo=' + tempo + '&min_valence=' + inst + '&access_token=' + apiKey).then(function(response) {

   var tracks = response.tracks;

        tracks.forEach(function(song) {

            var track = song.name;

            var uri = song.uri;



            var player = document.createElement('iframe');

            player.width = '280';
            player.height = '280';
            player.frameborder="0";
            player.allowtransparency="true";
            player.src = "https://embed.spotify.com/?uri=" + uri;
            $(".results").append(player);
        });

            console.log(response);
   });
 });
});








// var Tracks = require('./../js/scripts.js').spotifyModule;
//
// var displayTracks = function(genre, tempo, inst) {
//    $(".results").append(player);
// };
//
// $(function() {
//    var max = 200.00,
//    min = 30.00,
//    step = 0.1,
//    tempoOutput = $('#tempo-value').text(min);
//
// $("#tempo")
//    .attr({'max': max, 'min':min, 'step': step,'value': String(min)})
//    .on('input change', function() {
//
//        tempoOutput.text(this.value);
//    });
//
//    var max1 = 1.0,
//    min1 = 0.0,
//    step1 = 0.1,
//    output = $('#valence-value').text(min);
//
// $("#inst")
//    .attr({'max': max1, 'min':min1, 'step': step1,'value': String(min1)})
//    .on('input change', function() {
//
//        output.text(this.value);
//    });
//    var trackList = new Tracks();
//    $("form").submit(function(){
//      event.preventDefault();
//    var genre = $('#genre').val();
//    var tempo = parseFloat($('#tempo').val());
//    var inst = $("#inst").val();
//    $(".genre").val("");
//    $(".tempo").val("");
//    $(".inst").val("");
//    trackList.viewTracks(displayTracks);
//  });
// });
