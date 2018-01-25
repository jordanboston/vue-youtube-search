<template>
  <div>
    <ul class="">
      <li @click="onVideoSelect(video)" class="">
        <div class="video-list-media">
          <div class="media-left">
            <img class="media-object" :src="imgUrl" />
          </div>

          <div class="media-body">
            <div class="media-heading">{{ videoTitle }}</div>
          </div>
        </div>
      </li>
		</ul>
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
</style>
