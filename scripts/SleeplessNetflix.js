
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
    return true;
};

var evtMouseMove = new Event('mousemove');
var evtMouseOver = new Event('mouseover');

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


var wakeInterval1 = window.setInterval(wakeNetflixPlayer, 1000);
var wakeInterval2 = window.setInterval(wakeNetflixControls, 1000);
var wakeInterval3 = window.setInterval(wakeNetflixEpisodes, 1000);
