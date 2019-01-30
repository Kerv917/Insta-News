// https://www.nytimes.com/?0751ffff01d7a70710354972fa0ad4a9

$('#option').on('change', function() {
   
    $.ajax({
      method: 'GET',
      url: 'https://api.nytimes.com/svc/topstories/v2/'+$('#option').val()+'.json?api-key=0751ffff01d7a70710354972fa0ad4a9'
    })
    
    .done(function(data) {
        // console.log(data)
        $('.h').empty()
         for (i = 0; i <=12; i++) {
         console.log(data.results);
        var description = data.results[i].abstract
        var imageUrl= data.results[i].multimedia[4].url
        var articleLink = data.results[i].url
        console.log(description)
         console.log(imageUrl)
        console.log(articleLink)

         var htmlString = '<div class="articlecontainer"><img  src="' + imageUrl + '" /> <h2>' + description + '</h2><h3>' + articleLink + '</h3></div>';
        console.log(htmlString);


         $('.h').append(htmlString);

         }

    });
});

