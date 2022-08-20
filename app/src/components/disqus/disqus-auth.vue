<template>
  <div class="auth">
    <div class="auth-btn">
      <GoogleAuth @login="login" />
      <div @click="vkAuth" id="vkBtnAuth">
        <img src="../../../public/pictures/icons/vkAuth.svg" alt="vk icon auth">
      </div>
      <div @click="fbAuth" id="fbBtnAuth">
        <img src="../../../public/pictures/icons/fbAuth.svg" alt="fb icon auth">
      </div>
    </div>
  </div>
</template>

<script>
import GoogleAuth from './auth/ggl-icon-component.vue';

export default {
  name: "disqus-auth",
  components: { GoogleAuth },
  methods: {
    login(value) {
      this.$emit("login", value);
    },
    vkAuth() {
      // проходим через приложение

      // переходим в обсуждения
      this.$emit('login', false)
    },
    fbAuth() {
      // проходим через приложение

      // переходим в обсуждения
      this.$emit('login', false)
    },
  },
}
</script>

<style lang="scss">
.auth {
  margin: 32px;
  font-size: 18px;
  width: max-content;
  margin: 0 auto;
}

.auth-btn {
  display: flex;
  padding: 12px 0 0 3px;
  // align-items: center;
  /* animation: blink-animation 5s steps(5, start) infinite;
  -webkit-animation: blink-animation 5s steps(15, start) infinite; */
}

@keyframes blink-animation {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 0;
    /* visibility: hidden; */
    content: "hi";
  }
}

@-webkit-keyframes blink-animation {
  to {
    /* visibility: hidden; */
  }
}

#vkBtnAuth,
#fbBtnAuth {
  cursor: url('../../../public/pictures/cursors/pointer.png'), pointer;
  margin-left: 10px;

  &:hover {
    transform: scale(1.4);
  }
}
</style>