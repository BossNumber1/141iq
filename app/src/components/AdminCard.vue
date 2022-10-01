<template>
  <v-dialog v-model="showCardAdmin">
    <div class="card">
      <div class="card__face">
        <img src="../../public/pictures/adminAva.jpg" alt="admin face">
      </div>
      <div class="mb-2">
        <a href="https://ustinnov.ru">Корпорация Ustinnov</a>
      </div>
      <div>Идейный программист</div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: "AdminCard",
  // props: {
  //   showCardAdmin
  // }
}
</script>

<style lang="scss" scoped>
@import '../styles/sass/common/vars.scss';

  .card {
    padding: 7px;
    width: 156px;
    height: 284px;
    border-radius: 12px;
    box-shadow:0 0 10px #000;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    margin-top: -162px;
    
    &__face {
      img {
        border-radius: 12px;
        // width: 50px;
        // height: 50px;
        margin-bottom: 12px;
      }
    }

    text-align: center;
    font-size: 12px;

    a {
      cursor: $cursorPointer;
    }
  }
</style>
