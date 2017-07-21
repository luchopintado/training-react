import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoDetail from './video_detail';
import VideoList from './video_list';
import _ from 'lodash';

const API_KEY = 'AIzaSyCj1-izLdJDhcpBVDIncbSySy4ZeiQ0bc8';

export default class App extends Component {

  constructor (props) {
      super(props);

      this.state = {
          videos: [],
          selectedVideo: null
      };

      this.videoSearch('react vs vue');
  }

  videoSearch (term) {
      YTSearch({key: API_KEY, term}, videos => {
          this.setState({
            videos,
            selectedVideo: videos[0]
          });
      });
  }

  render() {
      const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300);

      return (
        <div className="row">
          <SearchBar onSearchTermChange={videoSearch} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          />
        </div>
      );
  }
}
