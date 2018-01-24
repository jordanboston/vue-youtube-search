<template>
  <div>
    <div class="search-bar">
      <input v-model="searchTerm" @change="searchTermChange"/>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      searchTerm: 'surfing'
    }
  },
  methods: {
    searchTermChange() {
      //  pass event up to parent App.vue
      this.$emit('termChange', this.searchTerm);
    }
  }
};
</script>

<style>
</style>
