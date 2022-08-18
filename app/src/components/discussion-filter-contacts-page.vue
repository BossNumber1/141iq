<template>
  <div id="app">
    <div class="auth" v-if="!showDisqusBlock">
      Войти через
      <div @click="googleAuth" id="googleBtnAuth">
        <img src="../../public/pictures/icons/googleAuth.svg" alt="google icon auth">
      </div>
      <div @click="vkAuth" id="vkBtnAuth">
        <img src="../../public/pictures/icons/vkAuth.svg" alt="vk icon auth">
      </div>
      <div @click="fbAuth" id="fbBtnAuth">
        <img src="../../public/pictures/icons/fbAuth.svg" alt="fb icon auth">
      </div>
    </div>

    <disqus-block v-else />
  </div>
</template>

<script>
import DisqusBlock from "./disqus-block.vue";

export default {
  name: "discussion-filter-contacts-page",
  data() {
    return {
      showDisqusBlock: false,
    };
  },
  components: {
    DisqusBlock,
  },
  methods: {
    googleAuth() {
      // проходим через приложение

      // переходим в обсуждения
      this.showDisqusBlock = true;
    },
    vkAuth() {
      // проходим через приложение

      // переходим в обсуждения
      this.showDisqusBlock = true;
    },
    fbAuth() {
      // проходим через приложение

      // переходим в обсуждения
      this.showDisqusBlock = true;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.auth {
  margin: 32px;
  font-size: 18px;
  display: flex;
  align-items: center;
}

#googleBtnAuth,
#vkBtnAuth,
#fbBtnAuth {
  cursor: pointer;
  margin-left: 10px;
}
</style>