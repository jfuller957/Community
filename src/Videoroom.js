import React from 'react';
import youtube from './api/youtube';
import { Grid } from '@material-ui/core';
import { SearchBar, VideoList, VideoDetail } from './components';

export default function Videoroom() {
  return (
    <Grid justify="center" container spacing={16}>
      <Grid item xs={12}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <SearchBar />
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
