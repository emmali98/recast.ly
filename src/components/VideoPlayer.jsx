var VideoPlayer = (props) => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src= {'https://www.youtube.com/embed/' + props.video.id.videoId} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{props.video.snippet.title}</h3>
      <div>{props.video.snippet.description}</div>i
    </div>
  </div>
);

VideoPlayer.propTypes = {
  video: PropTypes.object.isRequired
};

export default VideoPlayer;
