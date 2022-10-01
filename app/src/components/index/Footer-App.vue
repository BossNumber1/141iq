<template>
  <div class="footer">
    <div>
      <img src="../../../public/pictures/dogfriend.png" alt="dog image" />
      <p>
        Незнание вменяется в вину
      </p>
      <div class="footer-original-quote">Imperitia pro culpa habetur</div>
    </div>
    <div>
      <div class="footer__creator" @click="$emit('showAdminCardBio')" v-if="!showCardAdmin">
        <img src="../../../public/pictures/creator.png" alt="creator" /> Дмитрий Устинов
      </div>
      <div class="footer__creator" @click="$emit('showAdminCardBio')" v-else>
        <img src="../../../public/pictures/creator.png" alt="creator" /> Закрыть карточку
      </div>
      <div class="footer__contacts">
        <img src="../../../public/pictures/contacts.png" alt="contacts" />
        <a href="https://t.me/moyustimov">t.me/moyustimov</a>
      </div>
      <div class="footer__visitors">
        <img src="../../../public/pictures/eye.png" alt="eye" /> Нас посетило: <b>8</b> человек
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer-App",
  props: {
    showCardAdmin: Boolean
  }
}
</script>

<style lang="scss">
  @import '../../styles/sass/common/vars.scss';

  .footer {
    margin-top: 100px;
    padding: 50px 50px 20px 50px;
    border-top: 0.5px solid #e4e4e4;
    background: aliceblue;

    // border-top: 0.5px solid #332525;

    display: flex;

    img {
      width: 256px;
      height: 224px;
    }

    p {
      // display: none;
      font-size: 9px;
      font-weight: 900;
      margin-bottom: 5px;
    }

    &-original-quote {
      font-size: 9px;
      padding-left: 5px;
    }

    &__creator {
      cursor: $cursorPointer;

      &:hover {
        font-size: 25px;
        transition: 0.5s;
      }
    }

    &__visitors, &__creator, &__contacts {
      // width: max-content + 20px;
      display: flex;
      align-items: center;
      justify-content: left;

      b {
        margin: 0 5px;
      }

      img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }

      a {
        cursor: $cursorPointer;
        text-decoration: none !important;
        color: black;

        &:hover {
          font-size: 25px;
          transition: 0.5s;
        }
      }
    }
  }
</style>