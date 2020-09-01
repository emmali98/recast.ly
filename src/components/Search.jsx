import App from './App.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../../src/config/youtube.js';

// var Search = () => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" onInput={((e) => App.liveSearch(e))}/>
//     <button className="btn hidden-sm-down">
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

class Search extends App {
  constructor(props) {
    super(props);
  }

  liveSearch(e) {
    _.debounce(searchYouTube({
      key: YOUTUBE_API_KEY,
      query: e.target.value},
    (videoArray) => {
      console.log(videoArray);
      this.setState({
        currentVideo: videoArray[0],
        currentVideoList: videoArray
      });
    }), 1000);

  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onInput={((e) => this.liveSearch.call(App, e))}/>
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;