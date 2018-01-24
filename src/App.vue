<template>
  <div id="app">

  </div>
</template>

<script>
import { YOUTUBE_KEY } from './config';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    SearchBar,
    VideoList,
    VideoDetail,
  },
  created() {

  },
};
</script>

<style>
</style>
