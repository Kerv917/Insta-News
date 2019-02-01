$('#option').on('change', function() {
    event.preventDefault();
console.log("here");

    $.ajax({
        method: 'GET',
        url: 'https://api.nytimes.com/svc/topstories/v2/' + $('#option').val() + '.json?api-key=0751ffff01d7a70710354972fa0ad4a9',
        dataType: "json"
    })

        .done(function(data) {
            // console.log(data)
            $('.news-container').empty();
            for (i = 0; i <= 12; i++) {
                console.log(data.results);
                var description = data.results[i].abstract;
                var imageUrl = data.results[i].multimedia[4].url;
                var articleLink = data.results[i].url;
                console.log(description);
                console.log(articleLink);


                var htmlString = '<a target="_blank" href=" ' + articleLink + ' "><div class="articleContainer"><h2>' + description + '</h2></div></a>';
                console.log(htmlString);


                $('.news-container').append(htmlString);
                console.log("here");

            
            $('.articleContainer').last().css('background', 'url(' + imageUrl + ')');
            console.log("here as well");
            }
        })
});

