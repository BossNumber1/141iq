<template>
  <div class="container">
    <div class="container__subheader mt-2">
      <Animator />
    </div>
    <div class="title display-1 mt-3">
      Фильтрация списка на Vue
    </div>
  </div>
</template>

<script>
import Animator from "../Animator.vue"

export default {
  name: "PreMain-App",
  components: {
    Animator
  }
}
</script>

<style lang="scss">
  .container {
    &__subheader {
      width: 255px;
      height: 99px;
    }
  }
</style>