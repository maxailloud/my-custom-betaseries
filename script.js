(function() {
    "use strict";

    var shows = document.getElementsByClassName('show');

    for(var showNumber = 0; showNumber < shows.length; showNumber++) {
        var show     = shows[showNumber];
        if (!show.classList.contains('archive')) {
            var showName = show.getElementsByClassName('blue')[0].innerHTML;
            var showActions = show.getElementsByClassName('actions');
            showActions[0].innerHTML += '<div class="fastforward" style="right: 87px;">' +
                '<a href="https://www.t411.io/torrents/search/?search=' + showName + '&order=added&type=desc" target="_blank">' +
                '<img src="/images/site/search.png" alt="Rechercher la série ' + showName + ' sur Torrent411" title="Rechercher la série ' + showName + ' sur Torrent411">' +
                '</a></div>';
        }
    }

    document.getElementById('ongoing').click();
})();
