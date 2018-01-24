<template>
  <div id="app">
    <SearchBar @termChange="videoSearch($event)" />


  </div>
</template>

<script>
import { YOUTUBE_API_KEY } from './config';
import YouTubeSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

export default {
  name: 'App',
  data() {
    return {
      videos: [],
      selectedVideo: null,
    }
  },
  components: {
    SearchBar,
    VideoList,
    VideoDetail,
  },
  created() {

  },
  methods: {
    videoSearch(searchTerm) {
      YouTubeSearch( {key: YOUTUBE_API_KEY, searchTerm: searchTerm}, (videos) => {

        this.videos = videos;
        // get the first video (before one is selected --this is the default)
        this.selectedVideo = videos[0];
            console.log(searchTerm);
      });
    }
  },
};
</script>

<style>
</style>
