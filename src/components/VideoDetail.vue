<template>
  <div>
    <iframe :src="`https://www.youtube.com/embed/${this.selectedVideo.id.videoId}`"></iframe>
    <div>{{ selectedVideo.snippet.title }}</div>
    <div>{{ selectedVideo.snippet.description }}</div>
  </div>
</template>

<script>
export default {
  props: {
    videos: Array,
    selectedVideo: Object
  }
};
</script>

<style>
</style>
