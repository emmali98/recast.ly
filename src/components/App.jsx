import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import YOUTUBE_API_KEY from '../../src/config/youtube.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      currentVideoList: exampleVideoData
    };
  }

  newVideo(e) {
    var title = e.target.innerHTML;
    var newVid = this.state.currentVideoList.find(video => video.snippet.title === title);
    this.setState({
      currentVideo: newVid
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchYouTube={searchYouTube}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5" onClick = {((e) => this.newVideo.call(this, e))}>
            <VideoList videos={this.state.currentVideoList}/>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.searchYouTube({key: YOUTUBE_API_KEY, query: 'dogs', max: 5}, (videoArray) => {
      this.setState({
        currentVideo: videoArray[0],
        currentVideoList: videoArray
      });
    });
  }
}

export default App;