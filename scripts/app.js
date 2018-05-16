$(document).on("ready", function(){
  console.log("up and running!");

  // Define variables for the GET request
  var gifCategory;

  var giphyUrl = 'https://api.giphy.com/v1/gifs/search'

  var apiKey = 'tFUeIOKZUTraApArgGf6U46jZO7NK3hK'

var offset = 0;

// Dreate the on submit form function
  $('form').on('submit', function(e) {
    e.preventDefault();

    // Extract the input value
    gifCategory = $('input[type=text]').val();


    // Make the API call for the first call
    if (offset === 0) {
      $.ajax({
        method: 'GET',
        url: giphyUrl,
        data: {
          q: gifCategory,
          api_key: apiKey,
          limit: 25,
          rating: 'g'
        },
        success: gifSuccess,
        error: gifError
      });
      offset +=25;
      return offset;
    }

      else {
        $.ajax({
          method: 'GET',
          url: giphyUrl,
          data: {
            q: gifCategory,
            api_key: apiKey,
            limit: 25,
            rating: 'g',
            offset: offset
          },
          success: gifSuccess,
          error: gifError
        });

        offset +=25;
        return offset;
      }
    })

function consoleThis(response){
  console.log(response);
}
  // Define a function for a successful call
  function gifSuccess(response) {
    // Create a loop to extract gif URLs for returned results, include the URL in HTML, and append the HTML to the gif-gallery div
    for (var i = 0; i < response.data.length; i++) {
      var imageUrl = response.data[i].images.fixed_height_small.url;

      var galleryHtml = `<div class = "gif"><img src = ${imageUrl} /></div>`

      $('.gif-gallery').append(galleryHtml);
    };
    // function createGallery(response) {
    //   for (key in response) {
    //     var imageUrl = response.
    //   }

    }

  function gifError(error) {
    console.log(error);
  }
});
