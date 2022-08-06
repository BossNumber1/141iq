<template>
  <div class="comments">
    <vue-disqus shortname="your_shortname_disqus" url="https://141iq.ru"></vue-disqus>
  </div>
</template>

<script>
import Vue from 'vue'
import VueDisqus from 'vue-disqus'

export default {
  name: "discussion-filter-contacts-page",
  components: {VueDisqus},
  mounted() {
    Vue.use(VueDisqus)
  }
}
</script>

<style lang="scss">
  
</style>
