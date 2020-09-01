var searchYouTube = (options = {maxResults: 5}, callback) => {
  // var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 5, key: 'AIzaSyC7yBg_c-JzmcEEFO3twkvExxFFfa8ZxYg'});
  // console.log(results);
  // var results = YouTube.Search.list('id,snippet', options);
  // callback(results);
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: 'AIzaSyC7yBg_c-JzmcEEFO3twkvExxFFfa8ZxYg',
      q: 'dogs',
      part: 'snippet',
      maxResults: 5,
      type: 'video',
      videoEmbeddable: true,
    },
    success: function(data) {
      embedVideo(data);
      callback(data);
    },
    error: function(response) {
      console.log('Request Failed');
    }
  });
};

export default searchYouTube;
