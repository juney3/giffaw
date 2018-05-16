$(document).on("ready", function(){
  console.log("up and running!");

  // Define variables for the GET request
  var gifCategory;

  var giphyUrl = 'https://api.giphy.com/v1/gifs/search'

  var apiKey = 'tFUeIOKZUTraApArgGf6U46jZO7NK3hK'

// Dreate the on submit form function
  $('form').on('submit', function(e) {
    e.preventDefault();

    // Extract the input value
    gifCategory = $('input[type=text]').val();

    // Make the API call
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
  })

  // Define a function for a successful call
  function gifSuccess(response) {
    console.log(response);

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
