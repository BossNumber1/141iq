<template>
  <div class="main">
    <DemoMain />
    <SrcMain />
    <DiscussionMain />
  </div>
</template>

<script>
import DemoMain from "./main/Demo-Main.vue"
import DiscussionMain from "./main/Discussion-Main.vue"
import SrcMain from "./main/Src-Main.vue"

export default {
  name: "Main-App",
  components: {
    DemoMain,
    DiscussionMain,
    SrcMain
  },
}
</script>

<style lang="scss">
  .titleBlock {
    text-align: center;
    margin: 10px;
  }
</style>