function getEpisodeIdsForCurrentSeason(){
  var epEls = document.querySelectorAll('ul.episode-list>li.episode-list-item');
  var epIDs = [];
  for (var i = 0; i < epEls.length; i++) {
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
  document.location.assign('https://www.netflix.com/watch/' + randEpID);
};

shuffleEpisodes();
