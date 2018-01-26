<template>
  <div>
    <Header />
    <section class="section">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-parent is-9">
            <article class="tile is-child">
              <SearchBar @termChange="videoSearch($event)" />
              <div v-if="show">
                <VideoDetail :selectedVideo="selectedVideo" :videos="videos" />
              </div>
              <div v-else>
                <h4>...Loading ⟳</h4>
              </div>
            </article>
          </div>
          <div class="tile is-parent is-3 is-vertical">
            <article v-for="video in videos" :key="video.etag">
              <VideoList
                @selectedVideo="videoSelect($event)"
                :video="video"
                :imgUrl="video.snippet.thumbnails.medium.url"
                :videoTitle="video.snippet.title" />
            </article>
          </div>
        </div>
      </div> <!-- /.container -->
    </section>
    <Footer />
  </div>
</template>

<script>
import { YOUTUBE_API_KEY } from './config';
import YouTubeSearch from 'youtube-api-search';
import Header from './components/Header';
import Footer from './components/Footer';
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
    Header,
    Footer,
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
  .container p {
    font-family: 'Open Sans', sans-serif;
  }
</style>
