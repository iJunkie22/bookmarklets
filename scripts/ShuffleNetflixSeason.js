
Element.prototype.addClassName = function(classString) {
    var oldClassList = this.className.split(' ');
    if (oldClassList.indexOf(classString) === -1) {
        // The class is not yet applied
        oldClassList.push(classString);
    }
    this.className = oldClassList.join(' ');
    return true;
};

Element.prototype.removeClassName = function(classString) {
    var oldClassList = this.className.split(' ');
    var newClassList = oldClassList.filter(function(i){return (i !== classString)});
    this.className = newClassList.join(' ');
    return true
};

var evtMouseMove = new Event('mousemove');
var evtMouseOver = new Event('mouseover');
var evtClick = new Event('click');

var divNetflixPlayer = document.getElementById('netflix-player');

var divControlBar = document.querySelector('#netflix-player > div.player-controls-wrapper.player-active.no-select.opacity-transparent.display-none');

var divEpSelect2 = document.querySelector('div.player-control-button.player-episode-selector.container-icon-player-episode-selector');

function wakeNetflixPlayer() {
  divNetflixPlayer.dispatchEvent(evtMouseMove);
};

function wakeNetflixControls() {
  divControlBar.removeClassName('opacity-transparent');
  divControlBar.removeClassName('display-none');
};

function wakeNetflixEpisodes() {
  divEpSelect2.dispatchEvent(evtMouseOver);
};

function getEpisodeIdsForCurrentSeason(){
  var epEls = document.querySelectorAll('ul.episode-list>li.episode-list-item');
  var epCount = epEls.length;
  var epIDs = [];
  for (var i = 0; i < epCount; i++) {
    var x = epEls[i];
    epIDs.push(x.getAttribute('data-episode-id'));
  }
  return epIDs;
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

function shuffleEpisodes() {
  var allEpIDs = getEpisodeIdsForCurrentSeason();
  var epIndex = getRandomInt(0, (allEpIDs.length - 1));
  var randEpID = allEpIDs[epIndex];
  var netflixBaseURL = 'https://www.netflix.com/watch/';
  var shufURL = netflixBaseURL + randEpID;
  document.location.assign(shufURL);
};



var wakeInterval1 = window.setInterval(wakeNetflixPlayer, 1000);
var wakeInterval2 = window.setInterval(wakeNetflixControls, 1000);
var wakeInterval3 = window.setInterval(wakeNetflixEpisodes, 1000);

shuffleEpisodes();
