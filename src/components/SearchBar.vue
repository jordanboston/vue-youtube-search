<template>
  <div class="field">
    <div class="control">
      <input class="input" type="text" v-model="searchTerm" @input="searchTermChange"/>
    </div>
    <p class="help">Search Youtube for videos.</p>
  </div>
</template>

<script>


export default {
  data() {
    return {
      // Placholder text on init search
      searchTerm: 'Surfing'
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
