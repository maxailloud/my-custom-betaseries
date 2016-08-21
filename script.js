(function() {
    "use strict";

    var shows = document.getElementsByClassName('showItem');

    for(var showNumber = 0; showNumber < shows.length; showNumber++) {
        var show = shows[showNumber];
        
        if (!show.classList.contains('archive')) {
            var showName = show.getElementsByClassName('blue')[0].innerHTML;
            var showActions = show.getElementsByClassName('actions');
            var newAction = document.createElement("div");
            var placeholder = show.getElementsByClassName('placeholder');
            
            show.removeChild(placeholder[0]);
            
            newAction.classList.add('t441');
            newAction.classList.add('actionButton');
            newAction.innerHTML = 
            '<a href="https://www.t411.ch/torrents/search/?search=' + showName + '&order=added&type=desc" target="_blank">' +
                '<img src="https://www.t411.ch/images/default.png" alt="Rechercher la série ' + showName + ' sur Torrent411" title="Rechercher la série ' + showName + ' sur Torrent411" class="t411-icon">' +
            '</a>';

            showActions[0].insertBefore(newAction, showActions[0].firstChild);
        }
    }

    document.getElementById('ongoing').click();
})();
