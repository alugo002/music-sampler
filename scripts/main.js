let songSamples = document.querySelectorAll('.song-sample');
let albumCovers = document.querySelectorAll('.album-cover');
let players = document.querySelectorAll('audio');

function hideAll() {
  songSamples.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();

albumCovers.forEach(function(el) {
  el.onclick = (e) => {
    hideAll();
      switch (e.target.getAttribute('id')) {
        case 'rtji':
        players.forEach(function(el) {
          el.pause();
          el.currentTime = 0;
        });
          document.querySelector('#runTheJewels')
            .style.display = 'block';
              break;
        case 'rtjii':
        players.forEach(function(el) {
          el.pause();
          el.currentTime = 0;
        });
          document.querySelector('#closeYourEyes')
            .style.display = 'block';
              break;
        case 'rtjiii':
        players.forEach(function(el) {
          el.pause();
          el.currentTime = 0;
        });
          document.querySelector('#legendHasIt')
            .style.display = 'block';
              break;
        case 'rtjiv':
        players.forEach(function(el) {
          el.pause();
          el.currentTime = 0;
        });
          document.querySelector('#oohLaLa')
            .style.display = 'block';
              break;

        }
      }
    });
