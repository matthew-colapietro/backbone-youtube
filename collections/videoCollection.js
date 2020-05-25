var VideoCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=leeroy%20jenkins&type=video&key=AIzaSyCXEKB0jRvSYo_YL9WUOYWsn8-VXWg7JUQ',
  model: VideoModel,

  //add video to the video collection when called
  addVideo: function (videoId, videoThumbnail, title, description) {
    this.add({
      videoId: videoId,
      videoThumbnail: videoThumbnail,
      title: title,
      description: description
    }, { wait: true });
  },

  //parsing data from YouTube api and only grabbing the first video on the list for the main video
  parse: function (response) {   
    return {
      videoId: response.items[0].id.videoId,
      videoThumbnail: response.items[0].snippet.thumbnails.default.url,
      title: response.items[0].snippet.title,
      description: response.items[0].snippet.description
    }
  },
})