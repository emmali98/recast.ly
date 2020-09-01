var searchYouTube = (options, callback) => {
  // var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 5, key: 'AIzaSyC7yBg_c-JzmcEEFO3twkvExxFFfa8ZxYg'});
  // console.log(results);
  // var results = YouTube.Search.list('id,snippet', options);
  // callback(results);
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max || 5,
      type: 'video',
      part: 'snippet'
    },
    success: function(data) {
      console.log(data.items);
      callback(data.items);
    },
    error: function(response) {
      console.log('Request Failed');
    }
  });
};

export default searchYouTube;

// key: 'AIzaSyC7yBg_c-JzmcEEFO3twkvExxFFfa8ZxYg',
// q: 'dogs',
// part: 'snippet',
// maxResults: 5,
// type: 'video',
// videoEmbeddable: true,