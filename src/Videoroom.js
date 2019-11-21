import React from 'react';
import youtube from './api/youtube';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SearchBar, VideoList, VideoDetail } from './components';

import { youtubeApiKey } from './config/credentials';

class Videoroom extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.handleSubmit('pdf generation with react and node');
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  handleSubmit = async searchTerm => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: youtubeApiKey,
        q: searchTerm
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };
  render() {
    const { selectedVideo, videos } = this.state;

    return (
      <Grid justify="center" style={{ padding: '40px' }} container spacing={1}>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Videoroom;
