'use strict';

var randomize = document.getElementById('randomizer');
var audioVol = document.getElementById('levees');

// randomize.addEventListener('click',function(){
//     audioVol.volume = Math.random(); // range between 0.0 and 1.0
//     console.log(audioVol.volume);
//     console.log('you clicked me');
// })

randomize.addEventListener('click',handleVolume);

function handleVolume() {
    audioVol.volume = Math.random(); // range between 0.0 and 1.0
    console.log(audioVol.volume);
    console.log('you clicked me');
}

