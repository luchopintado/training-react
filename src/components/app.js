import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyCj1-izLdJDhcpBVDIncbSySy4ZeiQ0bc8';

export default class App extends Component {

  constructor (props) {
      super(props);

      this.state = {videos:[]};

      YTSearch({key: API_KEY, term: 'lol cats'}, videos => {
          this.setState({videos});
      });
  }

  render() {
      return (
        <div>
          <SearchBar />
          <VideoDetail video={this.state.videos[0]} />
          <VideoList videos={this.state.videos} />
        </div>
      );
  }
}
