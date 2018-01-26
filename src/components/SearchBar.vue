<template>
  <div class="field">
    <div class="control has-icons-left">
      <input class="input is-success" type="text" v-model="searchTerm" @input="searchTermChange" />
      <b-icon icon="magnify"></b-icon>
    </div>
    <p class="help">Search YouTube videos.</p>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  data() {
    return {
      // Placholder text on init search
      searchTerm: 'Surfing'
    }
  },
  methods: {
    // use Lodash debounce to throttle search rendering/reloading (400 milliseconds)
    searchTermChange: _.debounce( function () {
      //  pass event up to parent App.vue
      this.$emit('termChange', this.searchTerm);
    }, 400)
  }
};
</script>

<style>
</style>
