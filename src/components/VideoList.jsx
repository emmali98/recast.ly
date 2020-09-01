// import exampleVideoData from './data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';

var VideoList = (props) => {
  return (<div className="video-list">
    {props.videos.map(video =>
      <VideoListEntry video={video}/>)}
  </div>);
};

VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

export default VideoList;