import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: 'AIzaSyAvy0_eqcxvexu591IfEVK7Qs_5WU6eIHM'
  }
});
