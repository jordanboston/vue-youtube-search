<template>
  <div id="app">
    <SearchBar @termChange="videoSearch($event)" />

    <div v-if="show">
      <VideoDetail :selectedVideo="selectedVideo" :videos="videos" />
    </div>
    <div v-else>
      <h4>...Loading</h4>
    </div>

    <div class="columns">
      <div class="column" v-for="video in videos" :key="video.etag">
        <VideoList
          @selectedVideo="videoSelect($event)"
          :video="video"
          :imgUrl="video.snippet.thumbnails.default.url"
          :videoTitle="video.snippet.title" />
      </div>
    </div>
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
      show: false,
      video: null,
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
    // init search
    this.videoSearch('Surfing');
  },
  methods: {
    videoSearch(searchTerm) {
      YouTubeSearch( {key: YOUTUBE_API_KEY, term: searchTerm}, (videos) => {

        this.videos = videos;
        // get the first video (before one is selected --this is the default)
        this.selectedVideo = videos[0];
        this.show = true;
      });
    },
    videoSelect(video) {
      this.selectedVideo = video;
    }
  },
};
</script>

<style>
</style>
