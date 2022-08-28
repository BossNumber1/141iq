<template>
  <div class="main__discussion">
    <div class="titleBlock display-6 mb-5 mt-5">Есть вопросы? Помогу!</div>
    <div class="main__discussion-content">
      <DisqusBlock />
    </div>
  </div>
</template>

<script>
import DisqusBlock from "../../../components/disqus/disqus-block.vue";

export default {
  name: "Discussion-Main",
  components: {
    DisqusBlock
  }
}
</script>

<style lang="scss">
  
</style>