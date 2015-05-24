$(function () {
    "use strict";
    // Load Data
    $.getJSON('movies.json', function (data) {
        $.each(data.movies, function () {
            var item = this,
                prop,
                obj = {posterPath: item.poster_path,
                       title: item.title,
                       releaseDate: item.release_date,
                       voteAvg: item.vote_average,
                       id: item.id,
                       voteCount: item.vote_count,
                       desc: item.decription,
                       dir: item.director,
                       stars: item.stars,
                       runtime: item.runtime,
                       rated: item.rated},
                html = '';

            for (prop in obj) { // check for undefined values from the JSON feed
                if (obj.hasOwnProperty(prop)) {
                    if (obj[prop] === undefined) {
                        obj[prop] = "N/A";
                    }
                }
            }

            html = '<div class="item"><div class="movieBlock"><img src="../' + obj.posterPath + '" width="214px" height="320px" alt="' + obj.title + '"/><div class="movieInfo"><h2 class="movieTitle">' + obj.title + '</h2><p class="movieReleaseDate">Release Date: <span>' + obj.releaseDate + '</span></p></div></div><div class="movieData"><div class="bar">Show Movie Details</div><div class="dataWrap"><ul><li class="id">ID: <span>' + obj.id + '</span></li><li class="vAvg">Vote Average: <span>' + obj.voteAvg + '</span></li><li class="vCount">Vote Count: <span>' + obj.voteCount + '</span></li><li class="desc">Decription: <span>' + obj.desc + '</span></li><li class="dir">Director: <span>' + obj.dir + '</span></li><li class="stars">Stars: <span>' + obj.stars + '</span></li><li class="runtime">Runtime: <span>' + obj.runtime + '</span></li><li class="rated">Rated: <span>' + obj.rated + '</span></li></ul></div></div><div style="clear: both;"></div></div>';

            $('#wrapper').append(html);
        });
    });

    // Bind click and hover events
    $(document).on('click', '.bar', function () {
        var dataWrap = $(this).next('.dataWrap');
        if (dataWrap.css('display') === 'none') {
            $(this).text('Hide Movie Details');
        } else {
            $(this).text('Show Movie Details');
        }
        dataWrap.slideToggle();
    });

    $(document).on('mouseover', '.bar', function () {
        var self = $(this);
        self.css('background-color', 'orange');
        self.css('cursor', 'pointer');
    });

    $(document).on('mouseout', '.bar', function () {
        var self = $(this);
        self.css('background-color', 'rgb(142, 252, 147)');
        self.css('cursor', 'default');
    });
});