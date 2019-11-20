import React from 'react';
import youtube from './api/youtube';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SearchBar, VideoList, VideoDetail } from './components';

import { youtubeApiKey } from './config/credentials';

class Videoroom extends React.Component {
  state = {
    video: [],
    selectedVideo: null
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
      selectedVideo: response.data.item[0]
    });
  };
  render() {
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail />
            </Grid>
            <Grid item xs={4}>
              {}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Videoroom;
