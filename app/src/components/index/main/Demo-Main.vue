<template>
  <div class="main__demo">
    <div class="titleBlock display-6">Что получаем</div>
    <div class="main__demo-content">
      <FilterContacts />
      <div class="placeForAds"></div>
    </div>
  </div>
</template>

<script>
import FilterContacts from "../../../components/FilterContacts.vue";

export default {
  name: "Demo-Main",
  components: {
    FilterContacts
  }
}
</script>

<style lang="scss">
  .main {
    &__demo {
      &-content {
        margin-top: 50px;
        display: flex;
        align-items: center;

        .placeForAds {
          // width: 100%;
          width: max-content;
          // border: 1px solid;
          height: 250px;
          margin: 50px 0;
        }
      }
    }
  }
</style>