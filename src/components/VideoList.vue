<template>
    <div class="tile is-child box" @click="onVideoSelect(video)">
      <img :src="imgUrl" />
      <p class="subtitle is-6">{{ videoTitle }}</p>
    </div>
</template>

<script>
export default {
  props: {
    video: Object,
    imgUrl: String,
    videoTitle: String
  },
  methods: {
    onVideoSelect(video) {
      this.$emit('selectedVideo', this.video);
    }
  }
};
</script>

<style>
  .tile.is-child:hover {
    cursor: pointer;
  }
</style>
