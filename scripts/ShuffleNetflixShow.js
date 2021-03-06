function qS (selector_str) {
  return document.querySelector(selector_str);
};

function qSA (selector_str) {
  return document.querySelectorAll(selector_str);
};

function getEpisodeIdsForCurrentSeason(){
  var epEls = qSA('ul.episode-list>li.episode-list-item');
  var epCount = epEls.length;
  var epIDs = [];
  for (var i = 0; i < epCount; i++) {
    var x = epEls[i];
    epIDs.push(x.getAttribute('data-episode-id'));
  }
  return epIDs;
};

function showSeasonList() {
  var btnBack = qS('#player-menu-episode-selector > div > div > div.episode-list-container > div > div > button');
  btnBack.click();
};

function getSeasonCount() {
  showSeasonList();
  return qSA('ul.season-list>li.season').length;
};

function selectSeason(seasonNum) {
  showSeasonList();
  var seasonLIs = qSA('ul.season-list>li.season');
  var selectedLI = seasonLIs[seasonNum];
  selectedLI.click();
  return;
};

function getAllEpisodeIDs() {
  var seasonCount = getSeasonCount();
  var allEpIDs = [];
  
  for (var i = 0; i < seasonCount; i++) {
    selectSeason(i);
    var xEpIDs = getEpisodeIdsForCurrentSeason();
    Array.prototype.push.apply(allEpIDs, xEpIDs);
    
  }
  return allEpIDs;
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

function shuffleEpisodes() {
  var allEpIDs = getAllEpisodeIDs();
  var epIndex = getRandomInt(0, (allEpIDs.length - 1));
  var randEpID = allEpIDs[epIndex];
  var netflixBaseURL = 'https://www.netflix.com/watch/';
  var shufURL = netflixBaseURL + randEpID;
  document.location.assign(shufURL);
};

shuffleEpisodes();
