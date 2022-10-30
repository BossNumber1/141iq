<template>
  <div>
    <Header />
    <PreMain />
  </div>
</template>

<script>
  import Header from "../index/Header-App.vue"
  import PreMain from "../index/PreMain-App.vue"

  export default {
    name: "templatePage",
    components: {
      Header,
      PreMain
    }
  }
</script>